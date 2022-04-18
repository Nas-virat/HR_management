require('dotenv').config();

const mysql = require('mysql');

const db = mysql.createConnection({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    insecureAuth : true
});


module.exports = db;