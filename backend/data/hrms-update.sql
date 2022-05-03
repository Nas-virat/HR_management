-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2022 at 11:05 AM
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
-- Database: `hrms3`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `EmployeeID` int(11) NOT NULL,
  `Status` enum('O','L','A') NOT NULL,
  `Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`EmployeeID`, `Status`, `Time`) VALUES
(1001, 'O', '2022-01-24 02:28:40'),
(1001, 'O', '2022-04-19 02:30:30'),
(1001, 'A', '2022-04-20 16:17:51'),
(1001, 'A', '2022-04-22 09:40:44'),
(1001, 'L', '2022-04-29 09:33:45'),
(1001, 'L', '2022-04-29 09:33:49'),
(1001, 'L', '2022-04-29 09:35:53'),
(1001, 'L', '2022-04-29 09:35:55'),
(1002, 'O', '2022-07-26 01:44:47'),
(1003, 'L', '2022-04-29 09:44:46'),
(1003, 'L', '2022-04-29 09:45:09'),
(1003, 'O', '2022-04-29 09:45:13'),
(1003, 'L', '2022-07-26 05:44:50'),
(1004, 'O', '2022-04-20 16:19:02'),
(1004, 'A', '2022-04-20 16:20:30'),
(1004, 'O', '2022-04-28 10:42:36'),
(1004, 'O', '2022-04-28 11:20:30'),
(1005, 'L', '2022-01-25 05:08:40'),
(1006, 'L', '2022-04-29 09:35:10'),
(1006, 'L', '2022-04-29 09:35:12'),
(1006, 'L', '2022-04-29 09:35:13'),
(1006, 'O', '2022-09-19 02:29:19'),
(1006, 'L', '2022-12-11 05:40:35'),
(1007, 'O', '2022-04-29 09:12:30'),
(1007, 'A', '2022-04-29 09:12:36'),
(1008, 'O', '2022-08-08 02:10:58'),
(1009, 'A', '0000-00-00 00:00:00'),
(1010, 'A', '0000-00-00 00:00:00'),
(1011, 'L', '2022-04-29 09:44:53'),
(1011, 'L', '2022-12-03 04:45:56'),
(1013, 'O', '2022-09-05 02:00:32'),
(1014, 'O', '2022-05-22 02:30:22'),
(1015, 'L', '2022-04-28 10:45:23'),
(1016, 'L', '2022-04-29 10:21:41'),
(1018, 'O', '2022-02-28 02:01:55'),
(1018, 'O', '2022-03-30 02:29:04'),
(1018, 'O', '2022-11-17 01:59:26'),
(1019, 'O', '2022-07-25 02:44:10'),
(1020, 'O', '2022-12-12 02:40:35');

-- --------------------------------------------------------

--
-- Table structure for table `bonus`
--

CREATE TABLE `bonus` (
  `BonusID` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `Amount` double(10,2) NOT NULL,
  `AdminID` int(11) NOT NULL,
  `BonusDate` date NOT NULL DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bonus`
--

INSERT INTO `bonus` (`BonusID`, `EmployeeID`, `Amount`, `AdminID`, `BonusDate`) VALUES
(6001, 1003, 100000.00, 1001, '2022-05-03'),
(6002, 1004, 150000.00, 1001, '2022-05-03'),
(6003, 1005, 100000.00, 1001, '2022-05-03'),
(6004, 1006, 500000.00, 1001, '2022-05-03'),
(6005, 1007, 250000.00, 1001, '2022-05-03'),
(6006, 1008, 100000.00, 1001, '2022-05-03'),
(6007, 1009, 45000.00, 1001, '2022-05-03'),
(6008, 1010, 80000.00, 1001, '2022-05-03'),
(6009, 1011, 120000.00, 1001, '2022-05-03'),
(6010, 1012, 13000.00, 1001, '2022-05-03'),
(6011, 1013, 30000.00, 1001, '2022-05-03'),
(6012, 1014, 160000.00, 1001, '2022-05-03'),
(6013, 1015, 250000.00, 1001, '2022-05-03'),
(6014, 1016, 200000.00, 1001, '2022-05-03'),
(6015, 1017, 10000.00, 1001, '2022-05-03');

-- --------------------------------------------------------

--
-- Table structure for table `deduction`
--

CREATE TABLE `deduction` (
  `DeductionID` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `datetime` date NOT NULL DEFAULT current_timestamp(),
  `TypeDeduction` enum('M','I','P','O') NOT NULL,
  `Description` text DEFAULT NULL,
  `Amount` double(10,2) NOT NULL,
  `AdminID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `deduction`
--

INSERT INTO `deduction` (`DeductionID`, `EmployeeID`, `datetime`, `TypeDeduction`, `Description`, `Amount`, `AdminID`) VALUES
(7001, 1006, '2021-04-18', 'M', 'NULL', 15000.00, 1001),
(7002, 1007, '2022-05-18', 'M', 'NULL', 9000.00, 1001),
(7003, 1006, '2022-04-22', 'M', 'NULL', 2500.00, 1001),
(7004, 1009, '2019-02-12', 'I', 'NULL', 500.00, 1001),
(7005, 1010, '2019-09-10', 'I', 'NULL', 1000.00, 1001),
(7006, 1011, '2022-05-25', 'I', 'NULL', 700.00, 1001),
(7007, 1012, '2018-04-29', 'I', 'NULL', 350.00, 1001),
(7008, 1006, '2021-04-08', 'I', 'NULL', 1250.00, 1001),
(7009, 1014, '2020-03-14', 'P', 'NULL', 1000.00, 1001),
(7010, 1015, '2021-11-01', 'P', 'NULL', 5000.00, 1001),
(7011, 1016, '2021-02-04', 'P', 'NULL', 1350.00, 1001),
(7012, 1017, '2022-05-31', 'O', 'NULL', 1000.00, 1001),
(7013, 1018, '2019-06-01', 'O', 'NULL', 14500.00, 1001),
(7014, 1019, '2022-09-02', 'O', 'NULL', 2000.00, 1001),
(7015, 1020, '2021-12-04', 'O', 'NULL', 3500.00, 1001),
(7016, 1001, '2022-04-26', 'I', 'HAHAHA', 50.00, 1001),
(7017, 1027, '2022-04-26', 'P', 'FORGET TO RENAME VARIABLE', 20.00, 1001),
(7018, 1001, '2022-04-29', 'P', 'To much base salary', 30000.00, 1004),
(7019, 1007, '2022-04-29', 'I', 'deduction for no reason', 10000.00, 1004);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `DprtID` int(11) NOT NULL,
  `DprtName` varchar(50) NOT NULL,
  `DprtDesc` text NOT NULL,
  `HeadDeptID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`DprtID`, `DprtName`, `DprtDesc`, `HeadDeptID`) VALUES
(2001, 'Human Resource Management', 'employing training and compensating new employee and developing policies relating to the workplace and retain employees', 1001),
(2002, 'Information Technology', 'supporting network databases and systems updating system hardware and software slove for error and assisting team members in supporting all data security and optimization', 1002),
(2003, 'Marketing', 'coordinating and producing all materials representing the business', 1003),
(2004, 'Accounting and Finance', 'plan and forecase financial planning, report and maintain cashflow in company', 1004),
(2005, 'Production', 'help assemble products and monitor manufacturing equipment for product defects', 1005),
(2006, 'Research and Development', 'keep a business competitive by providing insights into the market and developing new services \nand products or improving existing ones accordingly', 1006),
(2016, 'Beer Beer', 'beer', 1001);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmployeeID` int(11) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `Address` text NOT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Gender` enum('M','F','O') NOT NULL,
  `DOB` date NOT NULL,
  `AccountNo` varchar(10) NOT NULL,
  `BankRecive` varchar(10) NOT NULL,
  `EduLevel` enum('B','M','P') NOT NULL,
  `Institution` varchar(30) NOT NULL,
  `Major` varchar(30) NOT NULL,
  `YearGrads` varchar(4) NOT NULL,
  `GPAX` double(10,2) NOT NULL,
  `RecruitDate` date NOT NULL DEFAULT current_timestamp(),
  `WorkStatus` enum('E','S','Q') NOT NULL DEFAULT 'E',
  `Password` varchar(100) NOT NULL,
  `Image` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmployeeID`, `fname`, `lname`, `Address`, `Email`, `Gender`, `DOB`, `AccountNo`, `BankRecive`, `EduLevel`, `Institution`, `Major`, `YearGrads`, `GPAX`, `RecruitDate`, `WorkStatus`, `Password`, `Image`) VALUES
(1001, 'Chanon', 'Khanijoh', 'King Mongkut University of Technology Thonburi', 'chanon.kha@mail.kmutt.ac.th', 'M', '2002-06-05', '1234567890', 'KBANK', 'B', 'KMUTT', 'Computer Engineer', '2021', 1.27, '2021-04-19', 'E', 'Chanon123', NULL),
(1002, 'Pechdanai', 'SaePong', 'King Mongkut University of Technology Thonburi', 'pechdanai.sp@mail.kmutt.ac.th', 'M', '2001-10-18', '9987654321', 'SCB', 'B', 'KMUTT', 'Computer Engineer', '2021', 3.50, '2021-08-19', 'E', 'Nine321', NULL),
(1003, 'Fasai', 'Sae-Tae', 'King Mongkut University of Technology Thonburi', 'fasai.sae@mail.kmutt.ac.th', 'F', '2001-10-18', '1122334455', 'KBANK', 'B', 'KMUTT', 'Computer Engineer', '2021', 3.25, '2021-07-15', 'E', 'Atom112233', NULL),
(1004, 'Napat', 'Vinitnantharat', 'King Mongkut University of Technology Thonburi', 'Napat.Vin@mail.kmutt.ac.th', 'M', '2001-04-19', '5566778899', 'BBL', 'B', 'KMUTT', 'Computer Engineer', '2021', 4.00, '2021-01-20', 'E', 'NapasNapas', NULL),
(1005, 'Tunwa', 'Satianrapapong', 'King Mongkut University of Technology Thonburi', 'Tunwa.Sataian@mail.kmutt.ac.th', 'M', '2001-12-31', '1212312121', 'SCB', 'M', 'KMUTT', 'Computer Engineer', '2021', 3.56, '2021-12-25', 'E', 'TunwaPo300', NULL),
(1006, 'Lalisa', 'Manobal', 'YG Entertainment, Seoul, South Korea, 121-886', 'lalisalovemela@gmail.com', 'F', '1997-03-27', '2468100186', 'BBL', 'P', 'CU', 'Business', '2020', 3.27, '2020-01-01', 'E', 'LalisaLala', NULL),
(1007, 'Michael', 'Jackson', 'California, United States', 'michaeljack@gmail.com', 'O', '1997-03-27', '1357911131', 'SCB', 'B', 'KMITL', 'Business', '2020', 2.78, '2019-12-31', 'E', 'MichaelJS12', NULL),
(1008, 'Harry', 'Potter', '2 Picket Post Close, Bracknell, Berkshire', 'harrypotter@gmail.com', 'M', '1980-07-31', '2122242362', 'KBANK', 'B', 'KMUTNB', 'Business', '2019', 3.99, '2019-09-10', 'E', 'HarryPotterGryff', NULL),
(1009, 'Jason', 'Bourne', '415 East 71st Street', 'Jason.Bourne@gmail.com', 'M', '1970-09-13', '3126334125', 'KBANK', 'P', 'BU', 'Business', '2015', 2.12, '2017-04-13', 'E', 'JasonB2', NULL),
(1010, 'Michael', 'Jordan', 'Jump23 Washington DC, 20015-2092, USA', 'michaeljordaninfo@gmail.com', 'M', '1963-02-17', '3141592653', 'BBL', 'M', 'MU', 'Business', '2010', 3.33, '2013-11-11', 'S', 'MichaelJor', NULL),
(1011, 'Taylor', 'Swift', '16 Bluff Avenue, Watch Hill, Rhode Island 02891', 'taylorswift@gmail.com', 'F', '1989-12-13', '2718281828', 'BBL', 'M', 'CU', 'Business', '2020', 4.00, '2020-06-02', 'E', 'TaylorRedSwift', NULL),
(1012, 'Justin', 'Bieber', 'Beverly Hills, California (CA), US', 'whatsup@gmail.com', 'M', '1994-03-01', '2018042231', 'SCB', 'M', 'KMITL', 'Business', '2012', 3.95, '2014-07-13', 'E', 'BabyJustin12', NULL),
(1013, 'Prayut ', 'Chan-o-cha', '1 Phitsanulok Road Dusit District 10300', 'PrayutKwaii@gmail.com', 'O', '1954-03-21', '8314472159', 'KBANK', 'P', 'MU', 'Business', '2022', 1.15, '2021-06-29', 'Q', 'Prayut5555', NULL),
(1014, 'Mickey', 'Mouse', 'Disney Land, California, USA', 'mickeymouse@gmail.com', 'O', '1928-11-18', '1602176634', 'SCB', 'B', 'KU', 'Language Art', '2016', 2.98, '2018-08-18', 'S', 'MickeyMousehoho', NULL),
(1015, 'Buzz', 'Lightyear', '234 Elm Street, Tri-Valley Area', 'buzzlightyear@gmail.com', 'M', '1995-04-18', '6674301510', 'SCB', 'P', 'CU', 'Language Art', '2012', 2.47, '2011-07-06', 'E', 'Totheinfinity!', NULL),
(1016, 'Elon', 'Musk', 'Tesla Motors, 3500 Deer Creek, Palo Alto, CA 94304', 'ElonMusk@gmail.com', 'M', '1995-04-18', '2997924581', 'SCB', 'B', 'BU', 'Language Art', '2010', 3.12, '2011-11-24', 'E', 'EMSems', NULL),
(1017, 'Albert ', 'Enstine', '112 Mercer Street, Princeton, New Jersey', 'AlbertEstine@gmail.com', 'M', '1879-03-14', '8854187812', 'BBL', 'M', 'BSRU', 'Language Art', '2021', 2.79, '2020-02-22', 'E', 'eismcsquare', NULL),
(1018, 'Leonardo', 'Davinci', 'Anchiano Village, Montalbano, Vinci', 'Leo.Vinci@gmail.com', 'M', '1452-04-15', '7297352563', 'KBANK', 'P', 'SIIT', 'Computer Science', '2022', 2.54, '2017-10-15', 'E', 'MonaLisaa', NULL),
(1019, 'Jason', 'Voorhees', 'Crystal Lake, New Jersey', 'Jayson.voo@gmail.com', 'M', '1946-06-13', '1097373156', 'BBL', 'B', 'TU', 'Computer Science', '2016', 3.69, '2016-05-09', 'E', 'VHJason', NULL),
(1020, 'Freddy', 'Krueger', '1428 N Genesee Avenue', 'FredK@gmail.com', 'M', '1941-05-06', '2581208079', 'KBANK', 'P', 'KMUTNB', 'Computer Science', '2015', 3.56, '2014-05-17', 'E', 'Fred.dy', NULL),
(1022, 'Elaina', 'Saepong', '18/295 PLENO suksawat', 'elaine@gmail.comm', 'F', '2002-10-17', '0919708158', 'KBANK', 'P', 'KMUTT', 'Computer Engineer', '2019', 4.00, '2022-04-20', 'E', 'Elaina', NULL),
(1026, 'SENIOR', 'PETDANAY', 'SAENAY', 'naynay@gmail.com', 'M', '2022-04-26', '00000000', 'KABNK', 'B', 'KMUTT', 'Computer', '2020', 2.00, '2022-04-26', 'E', 'naynaynaynaynany', NULL),
(1027, 'JUNIOR', 'CHANON', 'CPE GOD GOD', 'chanonjr@gmail.com', 'M', '2022-04-26', '012498745', 'SCB', 'B', 'KMUTT', 'CPE', '2023', 2.00, '2022-04-26', 'E', '', NULL),
(1028, 'Napas', 'Vinitnantharat', 'samwa', 'Napas@gmail.com', 'M', '2022-04-26', '1234567', 'SCB', 'M', 'KMUTT', 'CPE', '2022', 4.00, '2022-04-26', 'E', '372614', NULL),
(1029, 'Tester', 'Humburg', 'England Swedakong', 'testtest@hotmail.com', 'M', '1997-02-18', '1234741852', 'KBANK', 'B', 'CU', 'IT', '2022', 3.20, '2022-05-01', 'E', 'lol123456789', ''),
(1030, 'Master', 'Chachachanon', 'Under the table, KMUTT', 'schanon@gmail.com', 'M', '2016-01-13', '174852963', 'SCB', 'B', 'KMUTT', 'AI', '2022', 3.00, '2022-05-01', 'E', 'chachanon123456', '1651387745285-group of slowpoke.jpg'),
(1031, 'Meowmeow', 'Seansean', 'In the house, near garbage', 'chanonmeaw@gmail.com', 'O', '2022-01-19', '852741963', 'SCB', 'B', 'KMUTT', 'COMARCH', '2023', 2.00, '2022-05-01', 'E', '$2b$20$mwsS95lN7x04ZbIu8PCB.eflXXkL/214zA8Dc6UdI.7aOT09KV6oq', NULL),
(1032, 'Password', 'Maker', 'Live in the computer and spread the virus.', 'makerpass@gmail.com', 'F', '1992-06-05', '123852741', 'KBANK', 'M', 'KMUTT', 'IT Security', '2026', 3.00, '2022-05-01', 'E', '$2b$05$23KD/Ytwp/PiEOTC7mxwjOetQRge5N/.OPfxy1otgTYw0WA9E5DIq', NULL),
(1033, 'Paradorn', 'Bhumirapi', 'Pathumthani', 'parabhu@gmail.com', 'M', '1992-10-02', '145236987', 'SCB', 'B', 'BU', 'Telecomunication and Informati', '2026', 3.52, '2022-05-02', 'E', '$2b$05$Bc/Kutw2GMhVEcUHwLVuVO/XqetnZXs.ZIbQWOmJNFT05bxVffwqO', '1651562901451-20210219_132355.jpg'),
(1034, 'Picturesan', 'Picpicpic', 'Picture collector Thailand', 'picturepng@gmail.com', 'M', '2022-05-03', '789123456', 'SCB', 'B', 'MU', 'Photography', '2022', 3.00, '2022-05-03', 'E', '$2b$05$S15Z8WoFdIF7y5SDssEQQOPn0YPvYa9Qwl9dLxArEp906MhquYeGW', '1651562725800-download.png');

-- --------------------------------------------------------

--
-- Table structure for table `employeeontask`
--

CREATE TABLE `employeeontask` (
  `TaskID` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `startdate` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employeeontask`
--

INSERT INTO `employeeontask` (`TaskID`, `EmployeeID`, `startdate`) VALUES
(4002, 1003, '2022-04-28'),
(4002, 1004, '2022-01-13'),
(4002, 1005, '2022-01-14'),
(4003, 1002, '2022-04-28'),
(4003, 1003, '2022-04-28'),
(4003, 1006, '2020-12-12'),
(4004, 1001, '2020-02-20'),
(4004, 1007, '2020-05-25'),
(4004, 1007, '2022-04-29'),
(4004, 1008, '2020-05-26'),
(4004, 1009, '2020-05-27'),
(4004, 1010, '2020-05-28'),
(4005, 1001, '2022-04-28'),
(4005, 1011, '2021-12-21'),
(4005, 1012, '2021-12-22'),
(4005, 1013, '2021-12-23'),
(4005, 1014, '2021-12-24'),
(4006, 1004, '2022-04-28'),
(4006, 1015, '2021-06-30'),
(4006, 1016, '2021-07-01'),
(4006, 1017, '2021-07-02'),
(4007, 1007, '2022-04-29'),
(4007, 1018, '2019-07-12'),
(4007, 1019, '2019-07-13'),
(4007, 1020, '2019-07-14'),
(4010, 1001, '2022-04-26'),
(4010, 1027, '2022-04-26'),
(4011, 1001, '2022-04-28'),
(4011, 1002, '2022-04-28'),
(4011, 1003, '2022-04-28'),
(4011, 1004, '2022-04-28'),
(4012, 1001, '2022-04-29'),
(4012, 1004, '2022-04-29');

-- --------------------------------------------------------

--
-- Table structure for table `ot`
--

CREATE TABLE `ot` (
  `OT_ID` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `SupervisorID` int(11) NOT NULL,
  `TaskID` int(11) NOT NULL,
  `start_time` time NOT NULL DEFAULT current_timestamp(),
  `end_time` time NOT NULL DEFAULT current_timestamp(),
  `OTdate` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ot`
--

INSERT INTO `ot` (`OT_ID`, `EmployeeID`, `SupervisorID`, `TaskID`, `start_time`, `end_time`, `OTdate`) VALUES
(8001, 1002, 1001, 4001, '18:00:00', '18:30:00', '2022-04-22'),
(8002, 1005, 1004, 4002, '18:00:00', '18:59:59', '2022-04-22'),
(8003, 1006, 1006, 4003, '18:00:00', '19:00:01', '2022-04-22'),
(8004, 1010, 1007, 4004, '18:00:00', '20:15:30', '2022-04-22'),
(8005, 1012, 1011, 4005, '18:00:00', '23:59:59', '2022-04-22'),
(8006, 1016, 1015, 4006, '18:00:00', '19:00:01', '2022-04-22'),
(8007, 1020, 1018, 4007, '18:00:00', '22:00:01', '2022-04-22'),
(8008, 1006, 1003, 8008, '18:00:00', '21:00:00', '2022-04-28'),
(8009, 1027, 1001, 4007, '16:43:00', '18:43:00', '2022-04-26'),
(8010, 1001, 1004, 4003, '18:29:00', '20:37:00', '2022-04-29'),
(8011, 1001, 1004, 4003, '18:29:00', '20:37:00', '2022-04-29'),
(8012, 1001, 1004, 4003, '21:29:00', '12:37:00', '2022-04-29'),
(8013, 1007, 1004, 4003, '17:14:00', '19:15:00', '2022-04-29'),
(8014, 1007, 1004, 4003, '18:17:00', '18:23:00', '2022-04-29'),
(8015, 1007, 1004, 4003, '17:20:00', '18:20:00', '2022-04-29'),
(8016, 1001, 1004, 4003, '17:19:00', '19:22:00', '2022-04-29'),
(8017, 1002, 1007, 4005, '18:22:00', '20:24:00', '2022-04-29'),
(8018, 1007, 1004, 4003, '17:20:00', '19:20:00', '2022-04-29'),
(8019, 1027, 1004, 4003, '17:22:00', '19:22:00', '2022-04-29');

-- --------------------------------------------------------

--
-- Table structure for table `paymentstatus`
--

CREATE TABLE `paymentstatus` (
  `PaymentID` int(11) NOT NULL,
  `EmployeeID` int(11) NOT NULL,
  `datetime` date NOT NULL DEFAULT current_timestamp(),
  `ApproveBy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `paymentstatus`
--

INSERT INTO `paymentstatus` (`PaymentID`, `EmployeeID`, `datetime`, `ApproveBy`) VALUES
(5001, 1001, '2022-09-12', 1001),
(5002, 1002, '2022-12-31', 1001),
(5003, 1003, '2022-10-24', 1001),
(5004, 1004, '2022-08-15', 1001),
(5005, 1005, '2022-01-31', 1001),
(5006, 1006, '2022-02-17', 1001),
(5007, 1007, '2022-09-18', 1001),
(5008, 1008, '2022-03-19', 1001),
(5009, 1009, '2022-10-20', 1001),
(5010, 1010, '2022-12-21', 1001),
(5011, 1011, '2022-11-12', 1001),
(5012, 1012, '2022-05-23', 1001),
(5013, 1013, '2022-07-06', 1001),
(5014, 1014, '2022-02-25', 1001),
(5015, 1015, '2022-03-14', 1001),
(5016, 1016, '2022-08-27', 1001),
(5017, 1017, '2022-07-28', 1001),
(5018, 1018, '2022-06-08', 1001),
(5019, 1019, '2022-11-25', 1001),
(5020, 1020, '2022-07-12', 1001);

-- --------------------------------------------------------

--
-- Table structure for table `promotionhistory`
--

CREATE TABLE `promotionhistory` (
  `EmployeeID` int(11) NOT NULL,
  `DprtID` int(11) NOT NULL,
  `RoleID` int(11) NOT NULL,
  `Datetime` date NOT NULL DEFAULT current_timestamp(),
  `ApproveBy` int(11) NOT NULL,
  `ExtraSalary` double(10,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `promotionhistory`
--

INSERT INTO `promotionhistory` (`EmployeeID`, `DprtID`, `RoleID`, `Datetime`, `ApproveBy`, `ExtraSalary`) VALUES
(1001, 2001, 3001, '2021-04-19', 1001, 0.00),
(1001, 2001, 3001, '2021-10-15', 1001, 15000.00),
(1001, 2016, 3001, '2022-05-03', 1001, 0.00),
(1002, 2002, 3007, '2021-08-19', 1002, 0.00),
(1002, 2002, 3006, '2022-03-11', 1002, 30000.00),
(1002, 2002, 3005, '2022-04-20', 1002, 10000.00),
(1003, 2003, 3010, '2021-07-15', 1003, 0.00),
(1003, 2003, 3009, '2022-01-18', 1003, 25000.00),
(1004, 2004, 3014, '2021-01-20', 1004, 0.00),
(1004, 2004, 3013, '2021-04-28', 1004, 25000.00),
(1004, 2006, 3023, '2022-04-28', 1004, 1000000.00),
(1005, 2005, 3016, '2021-12-25', 1005, 0.00),
(1005, 2005, 3001, '2022-04-22', 1005, 123453.00),
(1006, 2006, 3021, '2020-01-01', 1006, 0.00),
(1006, 2006, 3020, '2020-12-09', 1006, 10000.00),
(1006, 2006, 3019, '2021-03-26', 1006, 10000.00),
(1007, 2005, 3018, '2019-12-31', 1005, 0.00),
(1008, 2001, 3004, '2019-09-10', 1001, 0.00),
(1008, 2004, 3015, '2021-09-11', 1004, 20000.00),
(1009, 2002, 3007, '2017-04-13', 1002, 0.00),
(1010, 2005, 3017, '2013-11-11', 1005, 0.00),
(1011, 2001, 3003, '2020-06-02', 1001, 0.00),
(1012, 2002, 3006, '2014-07-13', 1002, 0.00),
(1013, 2003, 3010, '2021-06-29', 1003, 0.00),
(1013, 2003, 3011, '2021-08-01', 1003, 15000.00),
(1014, 2006, 3021, '2018-08-18', 1006, 0.00),
(1015, 2006, 3022, '2011-07-06', 1006, 0.00),
(1016, 2006, 3023, '2011-11-24', 1006, 0.00),
(1016, 2001, 3001, '2022-04-22', 1005, 100000.00),
(1017, 2006, 3020, '2020-02-22', 1006, 0.00),
(1018, 2002, 3008, '2017-10-15', 1002, 0.00),
(1019, 2001, 3002, '2016-05-09', 1001, 0.00),
(1020, 2004, 3014, '2014-05-17', 1004, 0.00),
(1026, 2005, 3022, '2022-04-26', 1001, 0.00),
(1027, 2005, 3022, '2022-04-26', 1001, 0.00),
(1028, 2001, 3003, '2022-04-26', 1001, 0.00),
(1029, 2002, 3005, '2022-05-01', 1001, 0.00),
(1030, 2003, 3007, '2022-05-01', 1001, 0.00),
(1031, 2006, 3019, '2022-05-01', 1001, 0.00),
(1032, 2006, 3020, '2022-05-01', 1001, 0.00),
(1033, 2002, 3019, '2022-05-02', 1001, 0.00),
(1034, 2005, 3017, '2022-05-03', 1001, 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `RoleID` int(11) NOT NULL,
  `RoleName` varchar(30) NOT NULL,
  `RoleDesc` text NOT NULL,
  `BaseSalary` double(10,2) NOT NULL,
  `OTrate` double(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`RoleID`, `RoleName`, `RoleDesc`, `BaseSalary`, `OTrate`) VALUES
(3001, 'Human Resources Manager', 'Responsible for coordinating all administrative activities related to an organization personnel. \nInclude developing recruitment strategies, staff benefit system, payroll and behavior and onboarding new employees.', 65000.00, 0.30),
(3002, 'Human Resources Assistant', 'responsible for document absences, terminations, performance reports, grievances and compensation information related to employees', 18000.00, 0.50),
(3003, 'Human Resources Generalist', 'responsible for managing the daily operations of the department concerning policies, procedures and programs', 18000.00, 0.50),
(3004, 'Administrative Assisstant', 'responsible for assist with the day-to-day operations of an office by doing tasks', 12000.00, 0.65),
(3005, 'IT Manager', 'responsible for ensures that all employees can get their job done via technology', 22000.00, 0.30),
(3006, 'Senior developer', 'responsible for reviewing code work to be accurate and functional and implement the plans, analyse code segment', 60000.00, 0.25),
(3007, 'Web Developer', 'responsible for ensuring websites look good and function properly', 30000.00, 0.60),
(3008, 'Database Administrator', 'responsible for performance, integrity and security of a database.', 30000.00, 0.45),
(3009, 'Marketing Manager', 'responsible for developing, implementing and executing strategic marketing plans for organization to attract potential customers and retain existing ones.', 40000.00, 0.50),
(3010, 'Marketing Specialist', 'responsible for creating advertising campaigns, pricing strategies and targeting the demographic data of their target audience.', 25000.00, 0.50),
(3011, 'Marketing Analyst', 'responsible for help companies and organizations decide which products and services to sell, as well as to which customers and at what price', 25000.00, 0.65),
(3012, 'Finance Manager', 'responsible for oversee the financial operations of an organization. Advise on investment plans, monitor the company finances and produce financial reports.', 60000.00, 0.30),
(3013, 'Accountant Manager', 'responsible for assist in budget planning and allocation for each of a companys departments and ongoing projects.', 50000.00, 0.25),
(3014, 'Accountant', ' responsible for the management and reporting of financial data of an organization.', 15000.00, 0.00),
(3015, 'Financial Analyst', 'responsible for tracking a companys financial performance, analyzing business performance, market conditions to create forecasts', 25000.00, 0.65),
(3016, 'Production Manager', 'responsible for oversees the production process and coordinates all activities to ensure enough resources on hand', 22000.00, 0.45),
(3017, 'Production Worker', 'responsible for feeding raw materials into machinery, assembling goods on production lines, and monitoring the process', 15000.00, 0.65),
(3018, 'Production Engineer', 'responsible for supervising and improving production at plants and factories', 50000.00, 0.00),
(3019, 'R&D Manager', 'responsible for developing and executing new product development, and works with the commercialization team to bring these products to market', 23000.00, 0.30),
(3020, 'R&D Specialist', 'responsible for collects, sorts, and analyzes data and also develops, executes, and interprets research projects and performs laboratory experiments for product development', 23000.00, 0.25),
(3021, 'Product Researcher', ' responsible for identify opportunities for product improvement, using internal and external data and define applicable customer/market trends', 25000.00, 0.60),
(3022, 'Product Development', 'responsible for help create new products or improve existing ones, which helps the company effectively meet consumer needs', 25000.00, 0.40),
(3023, 'Business Analyst', 'responsible for ssess how organisations are performing and help them improve their processes and systems. \nThey conduct research and analysis solutions to business problems', 55000.00, 0.25);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `TaskID` int(11) NOT NULL,
  `taskdesc` text NOT NULL,
  `SupervisorID` int(11) NOT NULL,
  `Type` enum('I','P') NOT NULL,
  `status` enum('A','C','F') NOT NULL DEFAULT 'A',
  `deadline` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`TaskID`, `taskdesc`, `SupervisorID`, `Type`, `status`, `deadline`) VALUES
(4002, 'Backend', 1004, 'P', 'A', '2022-11-25'),
(4003, 'Set-up Database infrastructure', 1006, 'I', 'A', '2022-01-09'),
(4004, 'Advertisment', 1007, 'P', 'A', '2021-06-18'),
(4005, 'Frontend', 1011, 'P', 'A', '2022-05-20'),
(4006, 'Database', 1015, 'P', 'A', '2021-07-30'),
(4007, 'Creative - PR & Marketing', 1018, 'P', 'F', '2022-08-24'),
(4010, 'SPIN THE HEAD', 1001, 'I', 'A', '2022-04-26'),
(4011, 'fix frontend bug', 1004, 'I', 'A', '2022-04-28'),
(4012, 'fix Employee Status in viewEmployee.js', 1001, 'P', 'F', '2022-04-29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`EmployeeID`,`Time`);

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
  ADD PRIMARY KEY (`TaskID`,`EmployeeID`,`startdate`),
  ADD KEY `EmployeeID` (`EmployeeID`);

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
  ADD KEY `ApproveBy` (`ApproveBy`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `EmployeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1021;

--
-- AUTO_INCREMENT for table `bonus`
--
ALTER TABLE `bonus`
  MODIFY `BonusID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6016;

--
-- AUTO_INCREMENT for table `deduction`
--
ALTER TABLE `deduction`
  MODIFY `DeductionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7020;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `DprtID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2017;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EmployeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1035;

--
-- AUTO_INCREMENT for table `ot`
--
ALTER TABLE `ot`
  MODIFY `OT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8020;

--
-- AUTO_INCREMENT for table `paymentstatus`
--
ALTER TABLE `paymentstatus`
  MODIFY `PaymentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5021;

--
-- AUTO_INCREMENT for table `promotionhistory`
--
ALTER TABLE `promotionhistory`
  MODIFY `EmployeeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1035;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `RoleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3024;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `TaskID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4013;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bonus`
--
ALTER TABLE `bonus`
  ADD CONSTRAINT `bonus_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bonus_ibfk_2` FOREIGN KEY (`AdminID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `deduction`
--
ALTER TABLE `deduction`
  ADD CONSTRAINT `deduction_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `deduction_ibfk_2` FOREIGN KEY (`AdminID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `department_ibfk_1` FOREIGN KEY (`HeadDeptID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employeeontask`
--
ALTER TABLE `employeeontask`
  ADD CONSTRAINT `employeeontask_ibfk_1` FOREIGN KEY (`TaskID`) REFERENCES `task` (`TaskID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employeeontask_ibfk_2` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ot`
--
ALTER TABLE `ot`
  ADD CONSTRAINT `ot_ibfk_1` FOREIGN KEY (`SupervisorID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ot_ibfk_2` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `paymentstatus`
--
ALTER TABLE `paymentstatus`
  ADD CONSTRAINT `paymentstatus_ibfk_1` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `paymentstatus_ibfk_2` FOREIGN KEY (`ApproveBy`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `promotionhistory`
--
ALTER TABLE `promotionhistory`
  ADD CONSTRAINT `promotionhistory_ibfk_1` FOREIGN KEY (`DprtID`) REFERENCES `department` (`DprtID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `promotionhistory_ibfk_2` FOREIGN KEY (`RoleID`) REFERENCES `role` (`RoleID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `promotionhistory_ibfk_3` FOREIGN KEY (`ApproveBy`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `promotionhistory_ibfk_4` FOREIGN KEY (`EmployeeID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`SupervisorID`) REFERENCES `employee` (`EmployeeID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
