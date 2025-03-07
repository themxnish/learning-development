import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});
db.connect();

db.on('error', (err) => {
    console.log("unexpected error is here - " + err);
    process.exit(-1);
});
console.log("User:", process.env.PG_USER);
console.log("Password:", process.env.PG_PASSWORD);
console.log("Loaded Password:", process.env.PG_PASSWORD);

export const query = (text, params) => db.query(text, params);