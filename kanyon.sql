-- phpMyAdmin SQL Dump

-- version 5.1.1

-- https://www.phpmyadmin.net/

--

-- Máy chủ: 127.0.0.1:3306

-- Thời gian đã tạo: Th3 14, 2023 lúc 06:25 PM

-- Phiên bản máy phục vụ: 5.7.36

-- Phiên bản PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!40101 SET NAMES utf8mb4 */

;

--

-- Cơ sở dữ liệu: `kanyon`

--

-- --------------------------------------------------------

--

-- Cấu trúc bảng cho bảng `users`

--

DROP TABLE IF EXISTS `users`;

CREATE TABLE
    IF NOT EXISTS `users` (
        `id_user` int(11) NOT NULL AUTO_INCREMENT,
        `Fullname` varchar(255) DEFAULT NULL,
        `DayOfBirth` varchar(255) DEFAULT NULL,
        `Email` varchar(255) NOT NULL,
        `Phone` varchar(255) DEFAULT NULL,
        `password` varchar(255) NOT NULL,
        PRIMARY KEY (`id_user`)
    ) ENGINE = MyISAM AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8;

--

-- Đang đổ dữ liệu cho bảng `users`

--

INSERT INTO
    `users` (
        `id_user`,
        `Fullname`,
        `DayOfBirth`,
        `Email`,
        `Phone`,
        `password`
    )
VALUES (
        1,
        'Ngô Quốc Duy',
        '1997-01-27',
        'ngoduy270197@gmail.com',
        '0917914496',
        'a12345'
    ), (
        2,
        'Kanyon Digital',
        '2023-03-15',
        'contact@kyanon.digital',
        '(+84) 283 5171 080',
        'a12345'
    );

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;