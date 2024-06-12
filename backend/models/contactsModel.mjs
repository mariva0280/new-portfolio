import connection from '../sql/config.mjs'
import crypto from 'node:crypto'

export class ContactsModel {
    static async getAllContacts() {
        try {
            const [rows] = await connection.query (`SELECT * FROM contacts`)
            return rows.map(row => ({
                id: row.id,
                name: row.name,
                phone: row.phone,
                email: row.email,
                message: row.message
            }))    
            
        } catch (error) {
            console.error('Error in getAllContacts:', error)
            throw error
        }    
    }

    static async getContactById(id) {
        try {
            const [rows] = await connection.query(`SELECT * FROM contacts WHERE id = ?`, [id])
            if(rows.length === 0) {
                throw new Error('Contact not found')
            }
            const row = rows[0]
            return {
                id: row.id,
                name: row.name,
                phone: row.phone,
                email: row.email,
                message: row.message
            }
        } catch (error) {
            console.error('Error in getContactById:', error)
            throw error
        }    
    }

    static async createContact(contact) {
        try {
            const id = crypto.randomUUID()
            await connection.query(
                `INSERT INTO contacts (id, name, phone, email, message) VALUES (?, ?, ?, ?, ?)`,
                [id, contact.name, contact.phone, contact.email, contact.message]
            )
            return { id, ...contact }
        } catch (error) {
            console.error('Error in createContact:', error)
            throw error
        }    
    }

    static async updateContactById(id, updates) {
        try {
            const fields = []
            const values = []
            if(updates.name !== undefined) {
                fields.push('name = ?')
                values.push(updates.name)
            }
            if(updates.phone !== undefined) {
                fields.push('phone = ?')
                values.push(updates.phone)
            }
            values.push(id)
            const [result] = await connection.query(
                `UPDATE contacts SET ${fields.join(', ')} WHERE id = ?`, values)
            if(result.affectedRows === 0) {
                return null
            }
            return this.getContactById(id)
        } catch (error) {
            console.error('Error in updateContactById:', error)
            throw error
        }    
    }

    static async deleteById(id) {
        try {
            await connection.query(`DELETE FROM contacts WHERE id = ?`, [id])
        } catch (error) {
            console.error('Error in deleteById:', error)
            throw error
        }    
    }
}