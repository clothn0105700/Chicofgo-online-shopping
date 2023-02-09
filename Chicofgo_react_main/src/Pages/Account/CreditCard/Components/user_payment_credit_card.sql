-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023 年 02 月 08 日 17:04
-- 伺服器版本： 10.4.25-MariaDB
-- PHP 版本： 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `project_chicofgo`
--

-- --------------------------------------------------------

--
-- 資料表結構 `user_payment_credit_card`
--

CREATE TABLE `user_payment_credit_card` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `cardholder_name` int(11) DEFAULT NULL,
  `card_number` int(11) DEFAULT NULL,
  `mmyy` int(11) DEFAULT NULL,
  `cvc` int(11) DEFAULT NULL,
  `valid` int(11) DEFAULT NULL,
  `change_time` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `created_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `user_payment_credit_card`
--
ALTER TABLE `user_payment_credit_card`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_payment_credit_card`
--
ALTER TABLE `user_payment_credit_card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
