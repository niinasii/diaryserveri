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
        //console.dir(error);
        callback(data.rows);
    })
}

const getTopic = (id, callback) => {
    allas.query("SELECT * FROM topics where id =$1", [id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rows);
    })
}

const insertTopic = (newtopic, callback) => {
    const { title, description, timetomaster, timespent, source, learningdatestart, inprogress, completiondate } = newtopic;
    allas.query("INSERT INTO topics (title, description, timetomaster, timespent, source, learningdatestart, inprogress, completiondate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [title, description, timetomaster, timespent, source, learningdatestart, inprogress, completiondate], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

const updateTopic = (topic, id, callback) => {
    const { title, description, timetomaster, timespent, source, learningdatestart, inprogress, completiondate } = topic;
    allas.query("UPDATE topics SET title=$1, description=$2, timetomaster=$3, timespent=$4, source=$5, learningdatestart=$6, inprogress=$7, completiondate=$8 WHERE id=$9", [title, description, timetomaster, timespent, source, learningdatestart, inprogress, completiondate, id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

const deleteTopics = (callback) => {
    allas.query("DELETE FROM topics", (error, data) => {
        //console.dir(error);
        callback(data.rows);
    })
}

const deleteTopic = (id, callback) => {
    allas.query("DELETE FROM topics WHERE id=$1", [id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

module.exports = {getTopics, getTopic, insertTopic, updateTopic, deleteTopic, deleteTopics};