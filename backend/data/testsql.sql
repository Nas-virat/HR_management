
/*
    Backend  : getEmployeeInfo.js
    frontend : AllEmployee.js 
    Description: This file is used to get the employee information from the database.
 */
SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                INNER JOIN department d ON p.DprtID = d.DprtID 
                INNER JOIN role r ON p.RoleID = r.RoleID
    ORDER BY e.EmployeeID ASC;


/* 
    Backend :  getTaskinfo.js
    frontend : ViewEmployee.js - TASKS 
    Description : Task information for a specific employee
*/
SELECT t.TaskID, t.taskdate, e.startdate, t.deadline 
FROM task t JOIN employeeontask e ON t.TaskID = e.TaskID WHERE e.EmployeeID = '{EMPLOYEEID}';



/*  Backend :  getEmployeeinfo.js
    frontend : EmployeeMore.js - Personal Information 
    Description : Employee information for a specific employee
*/    
SELECT e.fname, e.lname, d.DprtName, r.RoleName, e.Email, e.RecruitDate, e.Address, e.BankRecive, e.AccountNo 
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
				INNER JOIN department d ON p.DprtID = d.DprtID
                INNER JOIN role r ON p.RoleID = r.RoleID
   WHERE e.EmployeeID = '{EMPLOYEEID}';

/*
    Backend : getEmployeeInfo.js
    frontend : EmployeeMore.js Education Information 
    Description: Education information for a specific employee
*/
SELECT EduLevel, Institution, Major, YearGrads, GPAX FROM employee WHERE EmployeeID = '{EMPLOYEEID}';

/* 
    Backend : getEmployeeInfo.js
    frontend : EmployeeMore.js - Promotion History 
    Description : Promotion history for a specific employee
*/
SELECT p.Datetime, r.RoleName, d.DprtName
FROM promotionhistory p INNER JOIN role r ON p.RoleID = r.RoleID 
						INNER JOIN department d ON p.DprtID = d.DprtID
WHERE p.EmployeeID = '{EMPLOYEEID}'
ORDER BY p.Datetime DESC;



/* 
    Backend : getTaskInfo.js
    frontend : AddNewTask.js - ADD NEW TASK 
    Description : Add new task to the database
*/
INSERT INTO task (TaskDesc, SupervisorID, Type, Deadline) 
VALUES ('{TASKDESC}', '{SupervisorID}', '{Type}' , '{DEADLINE}');

INSERT INTO employeeontask (EmployeeID, TaskID) VALUES ('{EMPLOYEEID}', '{TASKID}');

/* 
    CANCEL/FINISH TASK BUTTON (UPDATE API) 
*/
UPDATE task SET status = '{TASKSTATUS}' WHERE TaskID = '{TASKID}';



/* 
    Backend : getTaskInfo.js
    frontend : ViewTask.js - MEMBERS 
    Description : Members of a specific task   
*/
SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                INNER JOIN department d ON p.DprtID = d.DprtID 
                INNER JOIN role r ON p.RoleID = r.RoleID
                INNER JOIN employeeontask et ON e.EmployeeID = et.EmployeeID
                WHERE et.taskID = '{TASKID}';

/* 
    Backend : getTaskInfo.js
    frontend : ViewTask.js - MEMBERS 
    Description : get specfic Task Desc  
*/
SELECT taskdesc, deadline FROM task WHERE TaskID = '{TASKID}';





/* 
    Backend : getDepartmentInfo.js
    frontend : AllDepartment.js - ALL DEPARTMENT
    Description : All department in the database
*/
SELECT d.DprtID, d.DprtName, COUNT(*) AS TotalMembers
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
				INNER JOIN department d ON p.DprtID = d.DprtID
    GROUP BY d.DprtID;




/*
    Backend : getDepartmentInfo.js
    frontend : AllDepartment.js - DEPARTMENT INFO
    Description : Department information for a specific department
*/
SELECT DprtName ,DprtDesc FROM department WHERE DprtID = '{DprtID}';


/*
    Backend : getDepartmentInfo.js
    frontend : AllDepartment.js - MEMBERS
    Description: Members of a specific department
*/
SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                INNER JOIN department d ON p.DprtID = d.DprtID 
                INNER JOIN role r ON p.RoleID = r.RoleID
                WHERE d.DprtID = '{DprtID}';



/*
    ******* NOT TEST IN SQL YET *******
    Backend : getDepartmentInfo.js
    frontend : AllDepartment.js - HEAD OF DEPARTMENT
    Description : Head of a specific department
*/
SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                INNER JOIN department d ON p.DprtID = d.DprtID 
                INNER JOIN role r ON p.RoleID = r.RoleID
                WHERE d.DprtID = d.HeadDeptID;