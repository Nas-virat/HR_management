-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2022 at 11:33 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrms`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `EmployeeID` varchar(7) NOT NULL,
  `Status` enum('O','L','A') NOT NULL,
  `Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Type` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `bonus`
--

CREATE TABLE `bonus` (
  `BonusID` varchar(7) NOT NULL,
  `EmployeeID` varchar(7) NOT NULL,
  `Amount` double(10,2) NOT NULL,
  `AdminID` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `deduction`
--

CREATE TABLE `deduction` (
  `DeductionID` varchar(7) NOT NULL,
  `EmployeeID` varchar(7) NOT NULL,
  `DateTime` date NOT NULL,
  `TypeDeduction` enum('M','I','P','O') NOT NULL,
  `Description` text DEFAULT NULL,
  `Amount` double(10,2) NOT NULL,
  `AdminID` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `DprtID` varchar(3) NOT NULL,
  `DprtName` varchar(50) NOT NULL,
  `DprtDesc` text NOT NULL,
  `HeadDeptID` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmployeeID` varchar(7) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `Address` text NOT NULL,
  `Emaill` varchar(50) NOT NULL,
  `Gender` enum('M','F','O') NOT NULL,
  `DOB` date NOT NULL,
  `AccountNo` varchar(10) NOT NULL,
  `BankRecive` varchar(10) NOT NULL,
  `EduLevel` enum('B','M','P') NOT NULL,
  `Institution` varchar(30) NOT NULL,
  `Major` varchar(30) NOT NULL,
  `YearGrads` varchar(4) NOT NULL,
  `GPAX` double(10,2) NOT NULL,
  `RecruitDate` date NOT NULL,
  `WorkStatus` enum('E','S','Q') NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmployeeID`, `fname`, `lname`, `Address`, `Emaill`, `Gender`, `DOB`, `AccountNo`, `BankRecive`, `EduLevel`, `Institution`, `Major`, `YearGrads`, `GPAX`, `RecruitDate`, `WorkStatus`, `Password`, `Image`) VALUES
('E633408', 'Meow', 'Sean', 'underTheBridge', 'meowsean@mail.com', 'M', '2020-04-17', '1234567890', 'SCB', 'P', 'KMUTT', 'CopyPasteEngineering', '2024', 4.00, '2021-09-12', 'E', 'meowmeow', NULL),
('E633409', 'Mooo', 'Por', 'underThetree', 'moopor@mail.com', 'O', '2002-05-20', '0987654321', 'KBANK', 'B', 'CU', 'niteddd', '2020', 3.90, '2022-09-09', 'E', 'moomoo', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `employeeontask`
--

CREATE TABLE `employeeontask` (
  `TaskID` varchar(8) NOT NULL,
  `EmployeeID` varchar(7) NOT NULL,
  `StartDate` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employeeontask`
--

INSERT INTO `employeeontask` (`TaskID`, `EmployeeID`, `StartDate`) VALUES
('T000001', 'E633408', '2024-12');

-- --------------------------------------------------------

--
-- Table structure for table `ot`
--

CREATE TABLE `ot` (
  `OT_ID` varchar(8) NOT NULL,
  `EmployeeID` varchar(7) NOT NULL,
  `SupervisorID` varchar(7) NOT NULL,
  `TaskID` varchar(7) NOT NULL,
  `start_time` time DEFAULT NULL,
  `End_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ot`
--

INSERT INTO `ot` (`OT_ID`, `EmployeeID`, `SupervisorID`, `TaskID`, `start_time`, `End_time`) VALUES
('OT000001', 'E633408', 'E633409', 'T000001', '12:20:58', '12:22:09');

-- --------------------------------------------------------

--
-- Table structure for table `paymentstatus`
--

CREATE TABLE `paymentstatus` (
  `PaymentID` varchar(11) NOT NULL,
  `EmployeeID` varchar(7) NOT NULL,
  `DateTime` date DEFAULT NULL,
  `ApproveBy` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `promotionhistory`
--

CREATE TABLE `promotionhistory` (
  `EmployeeID` varchar(7) NOT NULL,
  `DprtID` varchar(3) NOT NULL,
  `RoleID` varchar(3) NOT NULL,
  `Datetime` date NOT NULL,
  `ApproveBy` varchar(7) NOT NULL,
  `ExtraSalary` double(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `RoleID` varchar(3) NOT NULL,
  `RoleName` varchar(20) NOT NULL,
  `RoleDesc` text NOT NULL,
  `BaseSalary` double(10,2) NOT NULL,
  `OTRate` double(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`RoleID`, `RoleName`, `RoleDesc`, `BaseSalary`, `OTRate`) VALUES
('R01', 'humanresource', 'hellotesttest', 15000.00, 0.65);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `TaskID` varchar(7) NOT NULL,
  `TaskDesc` text DEFAULT NULL,
  `SupervisorID` varchar(7) NOT NULL,
  `Type` enum('I','P') NOT NULL,
  `Status` enum('A','C','F') NOT NULL,
  `Deadline` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`TaskID`, `TaskDesc`, `SupervisorID`, `Type`, `Status`, `Deadline`) VALUES
('T000001', 'nothing', 'E633408', 'I', 'F', '2025-12-30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`EmployeeID`,`Time`),
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- Indexes for table `bonus`
--
ALTER TABLE `bonus`
  ADD PRIMARY KEY (`BonusID`),
  ADD KEY `EmployeeID` (`EmployeeID`),
  ADD KEY `AdminID` (`AdminID`);

--
-- Indexes for table `deduction`
--
ALTER TABLE `deduction`
  ADD PRIMARY KEY (`DeductionID`),
  ADD KEY `EmployeeID` (`EmployeeID`),
  ADD KEY `AdminID` (`AdminID`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`DprtID`),
  ADD KEY `HeadDeptID` (`HeadDeptID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmployeeID`);

--
-- Indexes for table `employeeontask`
--
ALTER TABLE `employeeontask`
  ADD PRIMARY KEY (`TaskID`,`EmployeeID`,`StartDate`),
  ADD KEY `EmployeeID` (`EmployeeID`),
  ADD KEY `TaskID` (`TaskID`);

--
-- Indexes for table `ot`
--
ALTER TABLE `ot`
  ADD PRIMARY KEY (`OT_ID`),
  ADD KEY `SupervisorID` (`SupervisorID`),
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- Indexes for table `paymentstatus`
--
ALTER TABLE `paymentstatus`
  ADD PRIMARY KEY (`PaymentID`),
  ADD KEY `EmployeeID` (`EmployeeID`),
  ADD KEY `ApproveBy` (`ApproveBy`);

--
-- Indexes for table `promotionhistory`
--
ALTER TABLE `promotionhistory`
  ADD PRIMARY KEY (`EmployeeID`,`Datetime`),
  ADD KEY `DprtID` (`DprtID`),
  ADD KEY `RoleID` (`RoleID`),
  ADD KEY `ApproveBy` (`ApproveBy`),
  ADD KEY `EmployeeID` (`EmployeeID`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`RoleID`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`TaskID`),
  ADD KEY `SupervisorID` (`SupervisorID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`),
  ADD CONSTRAINT `attendance_ibfk_2` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`);

--
-- Constraints for table `bonus`
--
ALTER TABLE `bonus`
  ADD CONSTRAINT `bonus_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`),
  ADD CONSTRAINT `bonus_ibfk_2` FOREIGN KEY (`AdminID`) REFERENCES `employee` (`EmployeeID`);

--
-- Constraints for table `deduction`
--
ALTER TABLE `deduction`
  ADD CONSTRAINT `deduction_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`),
  ADD CONSTRAINT `deduction_ibfk_2` FOREIGN KEY (`AdminID`) REFERENCES `employee` (`EmployeeID`);

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `department_ibfk_1` FOREIGN KEY (`HeadDeptID`) REFERENCES `employee` (`EmployeeID`);

--
-- Constraints for table `employeeontask`
--
ALTER TABLE `employeeontask`
  ADD CONSTRAINT `employeeontask_ibfk_1` FOREIGN KEY (`TaskID`) REFERENCES `task` (`TaskID`),
  ADD CONSTRAINT `employeeontask_ibfk_2` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`);

--
-- Constraints for table `ot`
--
ALTER TABLE `ot`
  ADD CONSTRAINT `ot_ibfk_1` FOREIGN KEY (`SupervisorID`) REFERENCES `employee` (`EmployeeID`),
  ADD CONSTRAINT `ot_ibfk_2` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`);

--
-- Constraints for table `paymentstatus`
--
ALTER TABLE `paymentstatus`
  ADD CONSTRAINT `paymentstatus_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`),
  ADD CONSTRAINT `paymentstatus_ibfk_2` FOREIGN KEY (`ApproveBy`) REFERENCES `employee` (`EmployeeID`);

--
-- Constraints for table `promotionhistory`
--
ALTER TABLE `promotionhistory`
  ADD CONSTRAINT `promotionhistory_ibfk_1` FOREIGN KEY (`DprtID`) REFERENCES `department` (`DprtID`),
  ADD CONSTRAINT `promotionhistory_ibfk_2` FOREIGN KEY (`RoleID`) REFERENCES `role` (`RoleID`),
  ADD CONSTRAINT `promotionhistory_ibfk_3` FOREIGN KEY (`ApproveBy`) REFERENCES `employee` (`EmployeeID`),
  ADD CONSTRAINT `promotionhistory_ibfk_4` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`);

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`SupervisorID`) REFERENCES `employee` (`EmployeeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
