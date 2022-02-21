-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2022 at 11:35 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `handservices`
--



-- --------------------------------------------------------

--
-- Table structure for table `handservices`
--
   DROP DATABASE if exists handservices;
   CREATE DATABASE handservices;
   USE handservices;

CREATE TABLE `customers` (
  `custID` int(8) NOT NULL,
  `custFName` varchar(20) DEFAULT NULL,
  `custLName` varchar(20) DEFAULT NULL,
  `custHouseNumber` int(8) DEFAULT NULL,
  `custStreetName` varchar(20) DEFAULT NULL,
  `custSuburb` varchar(20) DEFAULT NULL,
  `custCity` varchar(20) DEFAULT NULL,
  `custZipCode` int(8) DEFAULT NULL,
  `custContactNo` int(10) DEFAULT NULL,
  `custEmail` varchar(20) DEFAULT NULL,
  `custPassword` varchar(15) DEFAULT NULL,
  `userType` varchar(15) NOT NULL DEFAULT 'customer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`custID`, `custFName`, `custLName`, `custHouseNumber`, `custStreetName`, `custSuburb`, `custCity`, `custZipCode`, `custContactNo`, `custEmail`, `custPassword`, `userType`) VALUES
(1, 'RAY', 'SKOSANA', 19, 'GORDINS', 'MODEL PARK', 'EMALAHLENI', 1034, 820416547, 'rjmas@gmail.com', 'R@12345!', 'provider'),
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(3, 'karabo Mashele', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'pkmashele@gmail.com', '$2y$10$dHgLKkUL', ''),
(4, 'karabo', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'pkm@gmail.com', '$2y$10$b03QyozW', ''),
(5, 'karabo', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'jkjh1@javahx.com', '$2y$10$7L05J.JC', ''),
(6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'priya@gmail.com', '$2y$10$1Wy3pvIG', ''),
(7, 'kk', '12', 0, 'kk', 'kk', '1034', 825452462, 0, 'kk@gmail.com', '12345', 'customer'),
(8, 'kk', 'kk', NULL, NULL, NULL, NULL, NULL, NULL, 'kar@gmail.com', '$2y$10$cdMhnHEI', ''),
(9, 'tgtg', 'hthtth', NULL, NULL, NULL, NULL, NULL, NULL, 'pk@gmail.com', '$2y$10$8d./j83t', ''),
(10, 'rr', 'rr', 12, 'rr', 'rr', 'rr ', 123, 325246147, 'rrt@gmail.com', '$2y$10$Sc8Z0Us1', ''),
(11, 'hrj', 'hr', 12, 'fkmfk', 'njfnvk', 'fnkf ', 123, 983443381, 'ddfr@gmail.com', '$2y$10$CbQ4.mZa', ''),
(12, 'tfdwt', 'rfrfr', 123, 'jhfrui', 'fjnoir', 'dkf', 3253, 2147483647, 'rt@gmail.com', '$2y$10$Q65HSYYF', ''),
(13, 'rp', 'rp', 12, 'gfihok', 'njjjl', 'njkjii', 0, 2147483647, 'rp@gmail.com', '$2y$10$0uxVI1T4', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `cust_serv`
--

CREATE TABLE `cust_serv` (
  `servID` int(8) NOT NULL,
  `custID` int(8) NOT NULL,
  `custServDate` date DEFAULT NULL,
  `custServStatus` varchar(10) DEFAULT NULL,
  `custServAddress` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cust_serv`
--

INSERT INTO `cust_serv` (`servID`, `custID`, `custServDate`, `custServStatus`, `custServAddress`) VALUES
(1, 1, '2021-11-30', 'request', ''),
(2, 3, '2022-01-20', 'request', 'bvrtf7gd5rfh8yg7'),
(4, 2, '2022-01-20', 'Declined', 'lmufygvfgcrdcf');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedbackNo` int(8) NOT NULL,
  `feedbackDate` date DEFAULT NULL,
  `feedbackTime` time DEFAULT NULL,
  `servProvID` int(8) DEFAULT NULL,
  `servID` int(8) DEFAULT NULL,
  `custID` int(8) DEFAULT NULL,
  `feedbackData` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedbackNo`, `feedbackDate`, `feedbackTime`, `servProvID`, `servID`, `custID`, `feedbackData`) VALUES
(1, '2021-11-30', '05:19:00', 1, 1, 1, ''),
(2, '0000-00-00', '00:00:00', NULL, NULL, NULL, 'feedbackData');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `servID` int(8) NOT NULL,
  `servType` varchar(30) DEFAULT NULL,
  `servProvID` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`servID`, `servType`, `servProvID`) VALUES
(1, 'PLUMBER', 1),
(2, 'programmer', 4),
(3, 'electrician', 2),
(4, 'gardener', 3),
(11, 'cleaner', 3);

-- --------------------------------------------------------

--
-- Table structure for table `serviceprovider`
--

CREATE TABLE `serviceprovider` (
  `servProvID` int(8) NOT NULL,
  `servProvName` varchar(20) DEFAULT NULL,
  `servProvSurname` varchar(20) DEFAULT NULL,
  `servProvCity` varchar(20) DEFAULT NULL,
  `servProvContactNo` int(10) DEFAULT NULL,
  `servProvEmail` varchar(20) DEFAULT NULL,
  `servProvPassword` varchar(15) DEFAULT NULL,
  `userType` varchar(15) NOT NULL DEFAULT 'serviceProvider'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `serviceprovider`
--

INSERT INTO `serviceprovider` (`servProvID`, `servProvName`, `servProvSurname`, `servProvCity`, `servProvContactNo`, `servProvEmail`, `servProvPassword`, `userType`) VALUES
(1, 'RAY2', 'skosana2', 'EMALAHLENI', 788533426, 'rjsr@gmail.com', 'r@123!', 'serviceProvider'),
(2, 'kkmk', 'mkok', 'kok', 1234, 'rj@gmail.com', '$2y$10$zH2K5M9m', 'serviceProvider'),
(3, 'fdtgufg', 'giuhiu', 'hjguuhiu', 123324656, 'gt@gmail.com', '$2y$10$H7mMP2XF', 'serviceProvider'),
(4, 'm', 'm', 'k', 2147483647, 'g@ya.co', '$2y$10$UkAt.SgI', 'serviceProvider');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `transID` int(8) NOT NULL,
  `transType` varchar(20) DEFAULT NULL,
  `transAmount` int(10) DEFAULT NULL,
  `transTime` time DEFAULT NULL,
  `transDate` date DEFAULT NULL,
  `custID` int(8) DEFAULT NULL,
  `servID` int(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`transID`, `transType`, `transAmount`, `transTime`, `transDate`, `custID`, `servID`) VALUES
(1, '0', 15000, '15:30:00', '2021-11-30', 1, 1),
(16, 'finalPayment', 123, '18:12:00', '2022-01-19', 1, 1),
(22, 'deposit', 1234, '21:58:00', '2022-01-19', 1, 1),
(24, 'deposit', 2345, '20:27:00', '2022-01-20', 1, 1),
(25, 'deposit', 2345, '20:27:00', '2022-01-20', 1, 1),
(26, 'deposit', 2345, '20:27:00', '2022-01-20', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`custID`);

--
-- Indexes for table `cust_serv`
--
ALTER TABLE `cust_serv`
  ADD PRIMARY KEY (`servID`,`custID`),
  ADD KEY `custID` (`custID`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedbackNo`),
  ADD KEY `servProvID` (`servProvID`),
  ADD KEY `servID` (`servID`),
  ADD KEY `custID` (`custID`),
  ADD KEY `feedback_ibfk_2` (`servID`,`custID`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`servID`),
  ADD KEY `servProvID` (`servProvID`);

--
-- Indexes for table `serviceprovider`
--
ALTER TABLE `serviceprovider`
  ADD PRIMARY KEY (`servProvID`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transID`),
  ADD KEY `custID` (`custID`),
  ADD KEY `servID` (`servID`),
  ADD KEY `transaction_ibfk_1` (`servID`,`custID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `custID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedbackNo` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `servID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `serviceprovider`
--
ALTER TABLE `serviceprovider`
  MODIFY `servProvID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `transID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cust_serv`
--
ALTER TABLE `cust_serv`
  ADD CONSTRAINT `cust_serv_ibfk_1` FOREIGN KEY (`servID`) REFERENCES `service` (`servID`),
  ADD CONSTRAINT `cust_serv_ibfk_2` FOREIGN KEY (`custID`) REFERENCES `customers` (`custID`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`servProvID`) REFERENCES `serviceprovider` (`servProvID`),
  ADD CONSTRAINT `feedback_ibfk_2` FOREIGN KEY (`servID`,`custID`) REFERENCES `cust_serv` (`servID`, `custID`);

--
-- Constraints for table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `service_ibfk_1` FOREIGN KEY (`servProvID`) REFERENCES `serviceprovider` (`servProvID`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`servID`,`custID`) REFERENCES `cust_serv` (`servID`, `custID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
