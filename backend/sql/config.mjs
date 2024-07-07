/* eslint-disable no-undef */
import 'dotenv/config'
import { createClient } from "@libsql/client";

const connection = createClient({
  url:"libsql://contactform-vanessa.turso.io",
  authToken: process.env.TURSO_TOKEN_BD,
})


await connection.execute(
    `CREATE TABLE IF NOT EXISTS contact (id TEXT PRIMARY KEY, name VARCHAR,
    phone VARCHAR, email VARCHAR, message TEXT )`
)
export default connection

// conexión con docker a base de datos mysql workbench para trabajar en local
/*import mysql from 'mysql2/promise';
import 'dotenv/config';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export default connection;*/