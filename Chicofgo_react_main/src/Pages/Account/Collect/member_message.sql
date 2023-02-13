-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023 年 02 月 12 日 17:23
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
-- 資料表結構 `member_message`
--

CREATE TABLE `member_message` (
  `id` int(11) NOT NULL,
  `message_rating` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `speak` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message_with_products_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `member_message`
--

INSERT INTO `member_message` (`id`, `message_rating`, `message_time`, `speak`, `message_with_products_id`, `member_id`, `order_id`) VALUES
(1, '5', '2023-02-06 11:16:00', '「鰻魚三吃名古屋備長」將名古屋的美食——鰻魚三吃原封不動帶來東京！不同於東京江戶前鰻魚的料理方式，名古屋流的鰻魚不經蒸烤程序，而是直接以大火烘烤，將香味牢牢鎖住。想在東京品嚐到正宗的鰻魚三吃料理嗎？務必前來「鰻魚三吃名古屋備長」滿足您的味蕾', '4', 10, 0),
(2, '4', '2023-02-06 11:16:00', '當天婦羅遇上香檳，擦撞出獨特新吃法！天婦羅銀座ONODERA東銀座店提供現點現炸的新鮮海鮮及蔬菜，搭配店內侍酒師嚴選各種不同風味的香檳酒，香檳的細緻氣泡不但能解除油膩，更能提升風味、突顯食材鮮甜。', '3', 10, 0),
(3, '3', '2023-02-06 11:16:00', 'FunNow獨有的地圖功能更是旅客的好幫手，打開App，就能看到知名景點周遭可預訂的餐廳，方便自由行旅客隨興安排行程，根據接下來想去的地方。', '4', 10, 0),
(4, '2', '2023-02-06 11:16:00', '女僕咖啡店也是不少旅客到日本會前往踩點的景點，榮獲Tripadvisor 2019「年度卓越獎」，是女僕人數最多、日本規模No.1首選的女僕咖啡廳「Maidreamin」。', '2', 10, 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `member_message`
--
ALTER TABLE `member_message`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member_message`
--
ALTER TABLE `member_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
