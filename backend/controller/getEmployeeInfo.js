

const mysql = require('mysql');
const mariadb = require('mariadb');

const pool = require("../config/db");

const sql = "SELECT * FROM employee";

const getAllEmployee = (req, res) => {

    pool.getConnection((err, connection) => {
       if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
       }
        connection.query(sql, (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
   });
};


module.exports = getAllEmployee;