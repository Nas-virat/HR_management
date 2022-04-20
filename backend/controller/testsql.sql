
/* AllEmployee.js ALL EMPLOYEE */
SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName 
FROM employee e JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID 
                JOIN department d ON p.DprtID = d.DprtID 
                JOIN role r ON p.RoleID = r.RoleID
    GROUP BY e.EmployeeID HAVING MAX(p.Datetime);



/* ViewEmployee.js TASK */
SELECT t.TaskID, t.TaskDesc, e.startdate, t.Deadline 
FROM task t JOIN employeeontask e ON t.TaskID = e.TaskID WHERE e.EmployeeID = {EMPLOYEEID};



/* EmployeeMore.js */
/* EmployeeMore.js Personal Information */
SELECT e.fname, e.lname, d.DprtName, r.RoleName, e.Email, e.RecruitDate, e.Address, e.BankRecive, e.AccountNo 
FROM employee e JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID
				JOIN department d ON p.DprtID = d.DprtID
                JOIN role r ON p.RoleID = r.RoleID
GROUP BY e.EmployeeID HAVING MAX(p.Datetime) AND e.EmployeeID = '{EMPLOYEEID}';

/* EmployeeMore.js Education Information */
SELECT EduLevel, Institution, Major, YearGrads, GPAX FROM employee WHERE EmployeeID = '{EMPLOYEEID}';

/* EmployeeMore.js Promotion History */
SELECT p.Datetime, r.RoleName, d.DprtName
FROM promotionhistory p JOIN role r ON p.RoleID = r.RoleID 
						JOIN department d ON p.DprtID = d.DprtID
WHERE p.EmployeeID = '{EMPLOYEEID}'
ORDER BY p.Datetime DESC;



/* AddNewTask.js ADD NEW TASK*/
INSERT INTO task (TaskDesc, SupervisorID,Task,Deadline) VALUES ('{TASKDESC}', '{DEADLINE}');
INSERT INTO employeeontask (EmployeeID, TaskID) VALUES ('{EMPLOYEEID}', '{TASKID}');

/* CANCEL/FINISH TASK BUTTON (UPDATE API) */
UPDATE task SET TaskStatus = '{TASKSTATUS}' WHERE TaskID = '{TASKID}';

/* SHOW  Task*/
SELECT e.* FROM employee e JOIN employeeontask et ON e.EmployeeID = et.EmployeeID
WHERE et.TaskID = '{TASKID}';

SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName 
FROM employee e JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID 
                JOIN department d ON p.DprtID = d.DprtID 
                JOIN role r ON p.RoleID = r.RoleID
                JOIN employeeontask et ON e.EmployeeID = et.EmployeeID
    WHERE et.TaskID = 4004
    GROUP BY e.EmployeeID HAVING MAX(p.Datetime);




