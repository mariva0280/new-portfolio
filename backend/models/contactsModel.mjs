import connection from '../sql/config.mjs'


export class ContactsModel {
    static async getAllContacts() {
        try {
            const {rows} = await connection.execute(`SELECT * FROM contact`)
            console.log(rows)
            return rows.map(row => ({
                id: row.id,
                name: row.name,
                phone: row.phone,
                email: row.email,
                message: row.message
            }))    
            
        } catch (error) {
            //console.error('Error in getAllContacts:', error)
            throw error
        }    
    }

    static async getContactById(id) {
        try {
            const {rows} = await connection.execute({sql:`SELECT * FROM contact WHERE id = ?`, args: [id]})
            return rows.length > 0 ? rows[0] : null
            const row = rows[0]
            return {
                id: row.id,
                name: row.name,
                phone: row.phone,
                email: row.email,
                message: row.message
            }
        } catch (error) {
            //console.error('Error in getContactById:', error)
            throw error
        }    
    }

    static async createContact(contact) {
        try {
            
            const result = await connection.execute(
               { sql: `INSERT INTO contact (id, name, phone, email, message) VALUES (gen_random_uuid (), ?, ?, ?, ?)`,
                 args: [contact.name, contact.phone, contact.email, contact.message]}
            )
            console.log(result)
            return result
        } catch (error) {
            //console.error('Error in createContact:', error)
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
            const [result] = await connection.execute({
                sql:`UPDATE contact SET ${fields.join(', ')} WHERE id = ?`,args: values})
            if(result.affectedRows === 0) {
                return null
            }
            return this.getContactById(id)
        } catch (error) {
            //console.error('Error in updateContactById:', error)
            throw error
        }    
    }

    static async deleteById(id) {
        try {
            await connection.execute({sql:`DELETE FROM contact WHERE id = ?`, args: [id]})
        } catch (error) {
            console.error('Error in deleteById:', error)
            throw error
        }    
    }
}