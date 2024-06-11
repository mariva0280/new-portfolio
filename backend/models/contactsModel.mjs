import { run } from ' ./config.mjs'
import { v4 as uuidv4 } from 'uuid'

export class ContactsModel {
    static async getAllContacts() {
        return run.execute(`SELECT * FROM contacts`)
    }

    static async getContactById(id) {
        return run.execute(`SELECT * FROM contacts WHERE _id = ?`, [id])
    }

    static async createContact(contact) {
        const id = uuidv4()
        await run.execute(
            `INSERT INTO contacts (_id, name, phone, email, message) VALUES (?, ?, ?, ?)`
            [id, contact.name, contact.phone, contact.email, contact.message]
        )
        return { id, ...contact }
    }

    static async deleteById(id) {
        await run.execute(`DELETE FROM contacts WHERE _id = ?` [id])
    }
}