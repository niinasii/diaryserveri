require('dotenv').config;
const salasana = process.env.PGPASSWORD;
const pguser = process.env.PGUSER;
const pgdatabase = process.env.PGDATABASE;
const pghost = process.env.PGHOST;

const conopts = {
    user: pguser,
    password: salasana,
    host: pghost,
    database: pgdatabase
}

const Pool = require('pg').Pool;
const allas = new Pool(conopts);

const getTopics = (callback) => {
    allas.query("SELECT * FROM topics", (error, data) => {
        console.dir(data.rows);
        callback(data.rows);
    })
}

module.exports = {getTopics};