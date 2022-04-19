

const pool = require("../config/db");

const getAllDepartment = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        console.log("Select ALL Department");
        connection.query("SELECT * FROM department", (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
   });
};

module.exports = getAllDepartment;