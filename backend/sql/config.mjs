import 'dotenv/config'
import { createClient } from "@libsql/client";

export const run = createClient({
  url:"libsql://contactform-vanessa.turso.io",
  authToken: process.env.TURSO_TOKEN_BD,
});

/*await run.execute(
    `CREATE TABLE IF NOT EXISTS contacts (_id VARCHAR PRIMARY KEY, name VARCHAR,
    phone VARCHAR, email VARCHAR, message TEXT )`
)*/