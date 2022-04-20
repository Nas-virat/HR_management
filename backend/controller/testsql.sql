
/* AllEmployee.js ALL EMPLOYEE */
SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName 
FROM employee e JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID 
                JOIN department d ON p.DprtID = d.DprtID 
                JOIN role r ON p.RoleID = r.RoleID
    GROUP BY e.EmployeeID HAVING MAX(p.Datetime);

/* ViewEmployee.js TASK */
SELECT t.TaskID, t.TaskDesc, e.startdate, t.Deadline 
FROM task t JOIN employeeontask e ON t.TaskID = e.TaskID WHERE e.EmployeeID = {EMPLOYEEID};

/* EmployeeMore.js Personal Information */
SELECT Email, RecruitDate, Address, BankRecive, AccountNo FROM employee WHERE EmployeeID = {EMPLOYEEID};

/* EmployeeMore.js Education Information */
SELECT EduLevel, Institution, Major, YearGrads, GPAX FROM employee WHERE EmployeeID = {EMPLOYEEID};
