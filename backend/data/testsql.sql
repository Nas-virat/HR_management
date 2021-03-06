
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
SELECT t.TaskID, t.taskdesc, e.startdate, t.deadline 
FROM task t JOIN employeeontask e ON t.TaskID = e.TaskID 
WHERE t.status = 'A' AND e.EmployeeID = '{EmployeeID}'



/*  Backend :  getEmployeeinfo.js
    frontend : ViewEmployee.js EmployeeMore.js - Personal Information 
    Description : Employee information for a specific employee
*/    
SELECT e.fname, e.lname, d.DprtName, r.RoleName, e.Email, e.RecruitDate, e.Address, e.BankRecive, e.AccountNo 
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
				INNER JOIN department d ON p.DprtID = d.DprtID
                INNER JOIN role r ON p.RoleID = r.RoleID
   WHERE e.EmployeeID = '{EMPLOYEEID}';



/*  Backend :  getEmployeeinfo.js
    frontend : ViewEmployee.js EmployeeMore.js - ATTENDANCE
    Description : ATTENDANCE information for a specific employee
*/  
SELECT Status, Time    
FROM attendance where EmployeeID= 1001    
Order By Time DESC LIMIT 5;


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

/* etime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                INNER JOIN department d ON p.DprtID = d.DprtID 
                INNER JOIN role r ON p.RoleID = r.RoleID
                INNER JOIN employeeontask et ON e.EmployeeID = et.EmployeeID
                WHERE et.taskID = '{TASKID}';
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
    frontend : ViewTask.js - SUPERVISOR
    Description : Supervisor of a specific task   
*/
SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                INNER JOIN department d ON p.DprtID = d.DprtID 
                INNER JOIN role r ON p.RoleID = r.RoleID
                INNER JOIN employeeontask et ON e.EmployeeID = et.EmployeeID
                INNER JOIN task t ON et.TaskID = t.TaskID
                WHERE et.taskID = '{TASKID}' AND e.EmployeeID = t.SupervisorID;

/* 
    Backend : getTaskInfo.js
    frontend : AllTask.js - 
    Description : get list of all task  
*/
SELECT t.taskID, t.taskdesc, t.SupervisorID, t.status, COUNT(*) AS TotalMembers 
FROM task t INNER JOIN employeeontask et ON t.TaskID = et.TaskID
GROUP BY t.TaskID ORDER BY t.TaskID DESC;




/* 
    Backend : getTaskInfo.js
    frontend : AllTask.js - MEMBERS 
    Description : get specfic Task Desc  
*/

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
    Backend : getDepartmentInfo.js
    frontend : AllDepartment.js - HEAD OF DEPARTMENT
    Description : Head of a specific department
*/
SELECT e.EmployeeID, e.fname, e.lname, r.RoleName, d.DprtName
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                INNER JOIN department d ON p.DprtID = d.DprtID 
                INNER JOIN role r ON p.RoleID = r.RoleID
                WHERE d.DprtID = '{DprtID}' AND e.EmployeeID = d.HeadDeptID;


/*

    Backend : getPayment.js
    frontend : ViewEmployee.js - EMPLOYEE INFO
    Description : display employee information

*/
SELECT s.EmployeeID, s.fname, s.lname, s.BaseSalary, IFNULL(s.totalDeduction,0) AS totalDeduction, IFNULL(s.amount,0) AS BonusAmount,
IFNULL(ROUND(SUM(HOUR(SUBTIME(o.end_time, o.start_time)))*s.OTRate*((s.BaseSalary/30)/7),2),0) AS OTamount,
(s.BaseSalary + IFNULL(ROUND(SUM(HOUR(SUBTIME(o.end_time, o.start_time)))*s.OTRate*((s.BaseSalary/30)/7),2),0) - IFNULL(s.totalDeduction,0) + IFNULL(s.amount,0)) AS TotalPayment
FROM ot o
RIGHT JOIN (SELECT e.EmployeeID, e.fname, e.lname, SUM(d.Amount) AS totalDeduction, r.BaseSalary, r.OTrate, d.datetime, b.amount
FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
    p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                LEFT JOIN deduction d ON p.EmployeeID = d.EmployeeID
            	AND MONTH(d.datetime) = MONTH(CURRENT_DATE) AND YEAR(d.datetime) = YEAR(CURRENT_DATE)
                INNER JOIN role r ON p.RoleID = r.RoleID
            	LEFT JOIN bonus b ON p.EmployeeID = b.EmployeeID
            	AND MONTH(b.BonusDate) = MONTH(CURRENT_DATE) AND YEAR(b.BonusDate) = YEAR(CURRENT_DATE)
               	GROUP BY EmployeeID
                ORDER BY EmployeeID
 ) s
 ON o.EmployeeID = s.EmployeeID 
 AND MONTH(o.otdate) = MONTH(CURRENT_DATE) AND YEAR(o.otdate) = YEAR(CURRENT_DATE)
 WHERE s.EmployeeID = 1001
 GROUP BY EmployeeID


 SELECT * FROM attendance WHERE EmployeeID = 1001 ORDER BY Time DESC LIMIT 5;

 SELECT 
(SELECT COUNT(*) FROM employee WHERE WorkStatus != 'Q') AS TotalEmployee, 
(SELECT COUNT(*)  FROM department) AS TotalDepartment, 
(SELECT COUNT(*)  FROM task WHERE status != 'F') AS TotalTask
FROM employee LIMIT 1;

SELECT a.EmployeeID, e.fname, e.lname, COUNT(*) AS TotalLate FROM attendance a 
INNER JOIN employee e ON e.EmployeeID = a.EmployeeID 
WHERE a.Status = 'L'
GROUP BY a.EmployeeID;

SELECT s.EmployeeID, s.fname, s.lname, s.BaseSalary, s.AccountNo, s.BankRecive, ps.ApproveBy, IFNULL(s.totalDeduction,0) AS totalDeduction, IFNULL(s.amount,0) AS BonusAmount,
                            IFNULL(ROUND(SUM(HOUR(SUBTIME(o.end_time, o.start_time)))*s.OTRate*((s.BaseSalary/30)/7),2),0) AS OTamount,
                            (s.BaseSalary + IFNULL(ROUND(SUM(HOUR(SUBTIME(o.end_time, o.start_time)))*s.OTRate*((s.BaseSalary/30)/7),2),0) - IFNULL(s.totalDeduction,0) + IFNULL(s.amount,0)) AS TotalPayment
                            FROM ot o
                            RIGHT JOIN (SELECT e.EmployeeID, e.fname, e.lname,e.AccountNo,e.BankRecive, SUM(d.Amount) AS totalDeduction, r.BaseSalary, r.OTrate, d.datetime, b.amount
                            FROM employee e INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
                                p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
                                            LEFT JOIN deduction d ON p.EmployeeID = d.EmployeeID
                                            AND MONTH(d.datetime) = MONTH(CURRENT_DATE) AND YEAR(d.datetime) = YEAR(CURRENT_DATE)
                                            INNER JOIN role r ON p.RoleID = r.RoleID
                                            LEFT JOIN bonus b ON p.EmployeeID = b.EmployeeID
                                            AND MONTH(b.BonusDate) = MONTH(CURRENT_DATE) AND YEAR(b.BonusDate) = YEAR(CURRENT_DATE)
                                            GROUP BY EmployeeID
                                            ORDER BY EmployeeID
                            ) s
                            ON o.EmployeeID = s.EmployeeID 
                            AND MONTH(o.otdate) = MONTH(CURRENT_DATE) AND YEAR(o.otdate) = YEAR(CURRENT_DATE)
                            INNER JOIN paymentstatus ps ON ps.EmployeeID = s.EmployeeID
                            WHERE s.EmployeeID = 1004 AND ps.datetime = (SELECT MAX(datetime) FROM paymentstatus WHERE EmployeeID = s.EmployeeID)
                            GROUP BY EmployeeID;
/*
    Role count
*/
SELECT p.RoleID, count(e.EmployeeID) as countRole
FROM employee e 
INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID)
GROUP BY p.RoleID;

SELECT r.*, IFNULL(d.countRole,0) AS TotalMembers
FROM role r
LEFT JOIN (SELECT p.RoleID, COUNT(e.EmployeeID) as countRole
            FROM employee e 
            INNER JOIN promotionhistory p ON e.EmployeeID = p.EmployeeID AND 
            p.Datetime = (SELECT MAX(Datetime) FROM promotionhistory WHERE EmployeeID = e.EmployeeID AND e.WorkStatus != 'Q')
            GROUP BY p.RoleID
            ) d
            ON r.RoleID = d.RoleID
            GROUP BY r.RoleID;