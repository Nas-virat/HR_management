require('dotenv').config();

const mysql = require('mysql');

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"dreamhome",
    insecureAuth : true
});


module.exports = db;