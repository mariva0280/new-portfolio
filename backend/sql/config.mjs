import mysql from 'mysql2/promise';
import 'dotenv/config';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export default connection;



/*import 'dotenv/config'
import { createClient } from "@libsql/client";

export const run = createClient({
  url:"libsql://contactform-vanessa.turso.io",
  authToken: process.env.TURSO_TOKEN_BD,
})


await run.execute(
    `CREATE TABLE IF NOT EXISTS contacts (_id VARCHAR PRIMARY KEY, name VARCHAR,
    phone VARCHAR, email VARCHAR, message TEXT )`
)*/