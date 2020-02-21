require('dotenv').config;
const salasana = process.env.PGPASSWORD;
const pguser = process.env.PGUSER;

const conopts = {
    user: pguser,
    password: salasana,
    host: 'localhost',
    database: 'kurssi'
}

const Pool = require('pg').Pool;
const allas = new Pool(conopts);
