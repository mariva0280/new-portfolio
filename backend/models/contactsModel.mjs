import { run } from '../sql/config.mjs'
import crypto from 'node:crypto'

export class ContactsModel {
    static async getAllContacts() {
        const result = await run.execute(`SELECT * FROM contacts`)
        return result.rows.map(row => ({
            id: row._id,
            name: row.name,
            phone: row.phone,
            email: row.email,
            message: row.message
        }))
    }

    static async getContactById(id) {
        return run.execute(`SELECT * FROM contacts WHERE _id = ?`, [id])
    }

    static async createContact(contact) {
        const id = crypto.randomUUID()
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