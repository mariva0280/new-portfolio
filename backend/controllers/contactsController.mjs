/*
debería poner las validaciones aquí en los métodos createContact y update, pero para que sea
funcional porque no conseguía que funcionara al final las tengo en routes, con más tiempo lo modificaré
*/

import { ContactsModel } from '../models/contactsModel.mjs'

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
        try {
            const newContact = await ContactsModel.createContact(req.body)
            res.status(201).json(newContact)
        } catch (error) {
            res.status(500).json({
                errors :[{ code: 'SERVER-500', message: 'Internal server error', field: null}]
            })
        }
    }

    static async updateContactById(req, res) {
        try {
            const { id } = req.params
            const { name, phone } = req.body

            
            const updateContact = await ContactsModel.updateContactById(id, {name, phone})
            if(updateContact) {
                res.status(200).json(updateContact)
            } else {
                res.status(404).json({
                    errors: [{ code: 'NOTF-404', message: 'Recurso no encontrado', field: null}]
                })
            }
            
           
        } catch (error) {
            res.status(500).json({
                errors: [{code: 'SERVER-500', message: 'Internal server error', field: null}]
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
