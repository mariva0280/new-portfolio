import { ContactsModel } from '../models/contactsModel.mjs'
import { validateContact } from '../validation/contactsValidation.mjs'

export class ContactsController {
    static async getAllContacts(req, res) {
        try {
            const contacts = await ContactsModel.getAllContacts()
            res.status(200).json(contacts)
        } catch (error) {
            res.status(500).json({ 
                errors:[{ code: 'SERVER-500',message: 'Internal server error', field: null}]
            })
        }
    }

    static async getContactById(req, res) {
        try {
            const { id } = req.params
            const contact = await ContactsModel.getContactById(id)
            if(contact) {
                res.status(200).json(contact)
            } else {
                res.status(400).json({
                    errors: [{ code: 'NOTF-404', message: 'Recurso no encontrado', field: null}]
                })
            }

        } catch (error) {
            res.status(500).json({
                errors:[{ code: 'SERVER-500', message: 'Internal server error', field: null}]
            })
        }
    }

    static async createContact(req, res) {
        const errors = validateContact(req.body)
        if(errors.length > 0) {
            return res.status(400).json({errors})
        }

        try {
            const newContact = await ContactsModel.createContact(req.body)
            res.status(201).json(newContact)
        } catch (error) {
            res.status(500).json({
                errors :[{ code: 'SERVER-500', message: 'Internal server error', field: null}]
            })
        }
    }
    
    static async deleteContactById(req, res) {
        try{
            const { id } = req.params
            await ContactsModel.deleteById(id)
            res.status(204).end()
        } catch (error) {
            res.status(500).json({
                errors: [{ code: 'SERVER-500', message: 'Internal server error', field: null}]
            })
        }
    }

}
