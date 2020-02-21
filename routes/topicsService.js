require('dotenv').config();
const Pool = require('pg').Pool;
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

const allas = new Pool(conopts);

const getTopics = (callback) => {
    allas.query("SELECT * FROM topics", (error, data) => {
        console.dir(error);
        callback(data.rows); //pelkästään (data) tulee tyhjää
    })
}

module.exports = {getTopics};