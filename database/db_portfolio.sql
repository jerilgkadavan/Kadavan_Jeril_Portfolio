-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 04, 2018 at 03:45 AM
-- Server version: 5.7.21
-- PHP Version: 7.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gallery`
--

DROP TABLE IF EXISTS `tbl_gallery`;
CREATE TABLE IF NOT EXISTS `tbl_gallery` (
  `gallery_id` tinyint(2) UNSIGNED NOT NULL AUTO_INCREMENT,
  `gallery_name` varchar(100) NOT NULL,
  `gallery_descripation` varchar(250) NOT NULL,
  `gallery_image` varchar(50) NOT NULL,
  `gallery_thumb_image` varchar(50) NOT NULL,
  PRIMARY KEY (`gallery_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_gallery`
--

INSERT INTO `tbl_gallery` (`gallery_id`, `gallery_name`, `gallery_descripation`, `gallery_image`, `gallery_thumb_image`) VALUES
(1, 'gallery image 1', 'WEB DEVELOPMENT', 'img_1.png', 'imgThumb_1.png'),
(2, 'gallery image 2', '3D MODELING', 'img_2.png', 'imgThumb_2.png'),
(3, 'gallery image 3', 'BRANDING & LOGO', 'img_3.png', 'imgThumb_3.png'),
(4, 'gallery image 4', 'INFOGRAPHIC', 'img_4.png', 'imgThumb_4.png'),
(5, 'gallery image 5', 'BRANDING MASHUP', 'img_5.png', 'imgThumb_5.png'),
(6, 'gallery image 6', 'BRANDING', 'img_6.png', 'imgThumb_6.png'),
(7, 'gallery image 7', 'DIGITAL PAINTING', 'img_7.png', 'imgThumb_7.png'),
(8, 'gallery image 8', 'WEB DEVELOPMENT', 'img_8.png', 'imgThumb_8.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
