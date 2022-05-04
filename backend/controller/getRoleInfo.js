const pool = require("../config/db");

const AllRole = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }

        connection.query(`SELECT r.*, IFNULL(d.countRole,0) AS TotalMembers
                            FROM role r
                            LEFT JOIN (SELECT p.RoleID, COUNT(e.EmployeeID) as countRole
                                        FROM employee e 
                                        INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                                        p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID AND e.WorkStatus != 'Q')
                                        GROUP BY p.RoleID
                                    ) d
                                    ON r.RoleID = d.RoleID
                                        GROUP BY r.RoleID`,
        (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });
        console.log("All Role");

    });
} 



const insertRole = (req, res) =>{
    pool.getConnection((err, connection) => {
        if (err) {
             console.log(err);
             res.status(500).json({'error':err});
             return;
        }
        const roleName = req.body.RoleName;
        const roleDesc = req.body.RoleDesc;
        const basesalary = req.body.BaseSalary;
        const otrate = req.body.OTRate;

        console.log(`Insert New Role : ${roleName}`);
        connection.query(`INSERT INTO role (RoleName,RoleDesc,BaseSalary,OTRate) VALUES (?,?,?,?)`,
        [roleName,roleDesc,basesalary,otrate]
        , (err, result) => {
             connection.release();
             if (err) {
                 console.log(err);
             }
             res.send(result);
         });

    });
} 



module.exports = { insertRole, AllRole };