


const pool = require("../config/db");

const getAllTaskInfo = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        console.log("Select ALL Task");
        connection.query("SELECT * FROM task", (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
   });
};









module.exports = getAllTaskInfo;