import connection from '../sql/config.mjs'


export class ContactsModel {
    static async getAllContacts() {
        const {rows} = await connection.execute(`SELECT * FROM contact`)
        console.log(rows)
        return rows.map(row => ({
            id: row.id,
            name: row.name,
            phone: row.phone,
            email: row.email,
            message: row.message
        }))      
    } 

    static async getContactById(id) {
        const {rows} = await connection.execute({sql:`SELECT * FROM contact WHERE id = ?`, args: [id]})
        if(rows.length === 0) {
            return null
        }
        const row = rows[0]
        return {
            id: row.id,
            name: row.name,
            phone: row.phone,
            email: row.email,
            message: row.message
        }
  
    }

    static async createContact(contact) {
            
        const result = await connection.execute(
            { sql: `INSERT INTO contact (id, name, phone, email, message) VALUES (gen_random_uuid (), ?, ?, ?, ?)`,
             args: [contact.name, contact.phone, contact.email, contact.message]}
        )
           
        const lastinsertedId = result.lastInsertRowid
        const { rows }= await connection.execute(
            {
                sql:`SELECT * FROM contact WHERE ROWID = ?`,
                args: [lastinsertedId]
            }
        )
        const newContact = rows[0]
        return newContact
            
    }

    static async updateContactById(id, updates) {
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
            
    }

    static async deleteById(id) {
        
        await connection.execute({sql:`DELETE FROM contact WHERE id = ?`, args: [id]})
    }
}