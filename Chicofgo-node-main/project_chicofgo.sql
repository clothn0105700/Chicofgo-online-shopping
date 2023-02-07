-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-02-06 12:09:49
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
-- 資料表結構 `coupon_category`
--

CREATE TABLE `coupon_category` (
  `id` int(11) NOT NULL,
  `category` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `coupon_list`
--

CREATE TABLE `coupon_list` (
  `id` int(11) NOT NULL,
  `coupon_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `coupon_category_id` int(11) NOT NULL,
  `send_type_id` int(11) NOT NULL,
  `discount_type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount_of_money` float NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_date` date NOT NULL,
  `coupon_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `coupon_logs`
--

CREATE TABLE `coupon_logs` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `recevie_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `used_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `coupon_recevie`
--

CREATE TABLE `coupon_recevie` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `get_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` int(11) NOT NULL,
  `recevie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `coupon_send_type`
--

CREATE TABLE `coupon_send_type` (
  `id` int(11) NOT NULL,
  `send_type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `member_message`
--

CREATE TABLE `member_message` (
  `id` int(11) NOT NULL,
  `message_rating` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message_time` datetime NOT NULL,
  `speak` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message_with_products_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `member_message`
--

INSERT INTO `member_message` (`id`, `message_rating`, `message_time`, `speak`, `message_with_products_id`) VALUES
(1, '5', '2023-02-06 11:16:00', '「鰻魚三吃名古屋備長」將名古屋的美食——鰻魚三吃原封不動帶來東京！不同於東京江戶前鰻魚的料理方式，名古屋流的鰻魚不經蒸烤程序，而是直接以大火烘烤，將香味牢牢鎖住。想在東京品嚐到正宗的鰻魚三吃料理嗎？務必前來「鰻魚三吃名古屋備長」滿足您的味蕾', '4'),
(2, '4', '2023-02-06 11:16:00', '當天婦羅遇上香檳，擦撞出獨特新吃法！天婦羅銀座ONODERA東銀座店提供現點現炸的新鮮海鮮及蔬菜，搭配店內侍酒師嚴選各種不同風味的香檳酒，香檳的細緻氣泡不但能解除油膩，更能提升風味、突顯食材鮮甜。', '3'),
(3, '3', '2023-02-06 11:16:00', 'FunNow獨有的地圖功能更是旅客的好幫手，打開App，就能看到知名景點周遭可預訂的餐廳，方便自由行旅客隨興安排行程，根據接下來想去的地方。', '4'),
(4, '2', '2023-02-06 11:16:00', '女僕咖啡店也是不少旅客到日本會前往踩點的景點，榮獲Tripadvisor 2019「年度卓越獎」，是女僕人數最多、日本規模No.1首選的女僕咖啡廳「Maidreamin」。', '2');

-- --------------------------------------------------------

--
-- 資料表結構 `order_list`
--

CREATE TABLE `order_list` (
  `id` int(11) NOT NULL,
  `time` date NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `mail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(11) NOT NULL,
  `pay` int(11) NOT NULL,
  `pay_info` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `send_information` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `arrival_time` date NOT NULL,
  `bill_id` int(11) NOT NULL,
  `bill_number` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `freight_discount` int(11) NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `order_payment_method`
--

CREATE TABLE `order_payment_method` (
  `id` int(11) NOT NULL,
  `payment_method` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `order_payment_method`
--

INSERT INTO `order_payment_method` (`id`, `payment_method`) VALUES
(1, '信用卡'),
(2, 'LINE PAY'),
(3, '超商貨到付款'),
(4, '銀行轉帳');

-- --------------------------------------------------------

--
-- 資料表結構 `product_list`
--

CREATE TABLE `product_list` (
  `id` int(11) NOT NULL,
  `brand` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `introduction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `place_of_orgin` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `package` int(11) NOT NULL,
  `style` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `sugar_level` int(11) NOT NULL,
  `roast` int(11) NOT NULL,
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `launched_date` date NOT NULL,
  `discontinued_date` date NOT NULL,
  `created_at` date NOT NULL,
  `valid` int(11) NOT NULL,
  `rating` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `product_list`
--

INSERT INTO `product_list` (`id`, `brand`, `name`, `introduction`, `place_of_orgin`, `type`, `price`, `package`, `style`, `weight`, `sugar_level`, `roast`, `detail`, `launched_date`, `discontinued_date`, `created_at`, `valid`, `rating`) VALUES
(1, '', '即期品【STARBUCKS 星巴克】特選即溶焦糖瑪奇朵/卡布奇諾咖啡 任選(罐裝)', 'SCA國際咖啡烘焙師精心調配<br>深度烘焙帶出醇厚炭燒風味<br>如同絲綢般柔順口感', 0, 0, 500, 0, 0, 0, 0, 0, '1.商品組合/規格：Casa卡薩黃金曼特寧咖啡豆454g<br>2.商品品名：Casa卡薩黃金曼特寧咖啡豆454g<br>3.商品重(容)量：454g<br>4.內容物名稱(成分)：100%咖啡豆<br>5.食品添加物名稱：無<br>6.原產地(國)：台灣<br>7.製造廠商或國內負責廠商名稱：桔揚股份有限公司<br>8.製造廠商或國內負責廠商地址：新北市237三峽區溪東路31號<br>9.製造廠商或國內負責廠商電話：0800-000-671<br>10.以消費者收受日算起 至少距有效日期前?日以上：146<br>11.食品業者登錄字號：H-123778072-00001-2<br>12.投保產品責任險字號：明台產物保險股份有限公司0104PDT00188<br>備註欄：無<br>', '0000-00-00', '0000-00-00', '0000-00-00', 0, 5),
(2, '', '【龍火鮮烘咖啡】oceanrich歐新力奇S2單人手沖機+女僕(膠囊)', '日本原裝進口\r\n無糖更加健康無負擔！\r\n獨家專利萃取技術', 0, 0, 1234, 0, 0, 0, 0, 0, '有效期限:：一年\r\n適用年齡：適合各年齡層\r\n食用方式：熱水沖泡\r\n保存方式： 低溫or常溫配送商品\r\n原產地(國家)：台灣\r\n廠商廠商或國內負責廠商：優仕咖啡股份有限公司\r\n食品添加物名稱：無\r\n食品業者登錄字號：A-101187025-00000-2', '0000-00-00', '0000-00-00', '0000-00-00', 0, 4),
(3, '', '【龍火鮮烘咖啡】oceanrich歐新力奇S2單人手沖機+衣索比亞水洗冠軍咖啡半磅(咖啡豆+水洗冠軍天婦羅1/2磅)', '使用頂級造粒技術<br>極品咖啡感受，行家首選<br>無蔗糖添加保留原始<br>', 0, 0, 499, 0, 0, 0, 0, 0, '1.商品組合/規格：21g/100入/盒<br>2.商品品名：西雅圖貝瑞斯塔二合一<br>3.商品重(容)量：2300g/盒<br>4.內容物成分(如含有豬、牛成分請加註國別)：奶精粉【葡萄糖漿、氫化棕櫚核仁油、乳清粉、乾酪素鈉、乳化劑(脂肪酸甘油酯、乳酸硬脂酸鈉)、碳酸氫鈉、二氧化矽、檸檬酸鈉、濃縮乳清蛋白】、即溶咖啡粉、香料(牛奶香料、麥芽糊精)<br>5.食品添加物名稱：請詳見外盒包裝說明<br>6.原產地(國)：台灣<br>7.製造廠商或國內負責廠商名稱：馥餘實業股份有限公司<br>8.製造廠商或國內負責廠商地址：台北市內湖區環山路一段28巷15號1樓<br>9.製造廠商或國內負責廠商電話：消費者服務專線:0800-081-398<br>10.以消費者收受日算起，至少距有效日期前?日以上：30日<br>11.食品業者登錄字號：食品業者登錄字號:A-116852172-00000-0<br>12.投保產品責任險字號：\"富邦產物產品責任保險 0525字第21AML0000074號\"<br>', '0000-00-00', '0000-00-00', '0000-00-00', 0, 5),
(4, '', '【江鳥咖啡】鴻兔大展．50入濾掛咖啡禮盒(10gX50入;鳥嶼公益款；1/3號陸續出貨)(鰻魚,FUN)', '嚴選高品質咖啡豆 (含阿拉比卡\r\n附神奇可可粉\r\n澳洲原裝進口', 0, 0, 1000, 0, 0, 0, 0, 0, '1.商品組合/規格：10入/盒,合計6盒組<br>2.商品品名：雀巢咖啡雲朵 卡布奇諾/焦糖風味拿鐵 口味任選<br>3.商品重(容)量：請見外包裝<br>4.內容物成分(如含有豬、牛成分請加註國別)：請見外包裝<br>5.食品添加物名稱：請見外包裝<br>6.原產地(國)：台灣<br>7.製造廠商或國內負責廠商名稱：台灣雀巢股份有限公司<br>8.製造廠商或國內負責廠商地址：台北市內湖區瑞光路399號8樓之1<br>9.製造廠商或國內負責廠商電話：(02)2773-9910<br>10.以消費者收受日算起，至少距有效日期前?日以上：60<br>11.食品業者登錄字號：A-120683002-00000-9<br>12.投保產品責任險字號：70-107--0842446400001-CGL<br>備註欄：消費者專線 0800-000-338<br>', '0000-00-00', '0000-00-00', '0000-00-00', 0, 4),
(5, '', '【伯朗咖啡】特濃湖鹽咖啡/榛果風味奶茶10入/盒(任選4盒)', '湖鹽咖啡：微鹹的湖鹽香醇咖啡<br>榛果奶茶：榛果香氣與奶茶融合<br>豐富的濃厚滋味', 0, 0, 78, 0, 0, 0, 0, 0, '品名:伯朗特濃湖鹽咖啡三合一<br>成分:砂糖、奶精粉(葡萄糖漿、氫化棕櫚仁油、乾酪素鈉、乳化劑(脂肪酸甘油酯、單及雙脂肪酸甘油二乙醯酒石酸酯)、檸檬酸鉀、二氧化矽、鹽)、即溶咖啡粉、全脂奶粉、湖鹽<br>咖啡因:113毫克/每份(30公克)<br>淨重:30公克x10包<br>沖調方式:<br>將伯朗特濃湖鹽咖啡三合一倒入杯中 以180-200毫升之85度C以下熱水沖泡 即可享用一杯香醇的特濃湖鹽咖啡三合一。<br>有效日期:24個月(西曆年、月、日)標示於外盒。<br><br>品名:伯朗特濃榛果風味奶茶三合一<br>成分:奶精粉(葡萄糖漿、氫化棕櫚仁油、乾酪素鈉、乳化劑(脂肪酸甘油酯、單及雙脂肪酸甘油二乙醯酒石酸酯)、檸檬酸鉀、二氧化矽、鹽)、砂糖、脫脂奶粉、即溶茶粉、香料<br>咖啡因:83毫克/每份(30公克)<br>淨重:30公克x10包<br>沖調方式:<br>將伯朗特濃榛果風味奶茶三合一倒入杯中 以180-200毫升之75度C以下熱水沖泡 即可享用一杯香醇的特濃榛果風味奶茶。<br>有效日期:24個月(西曆年、月、日)標示於外盒。<br>', '0000-00-00', '0000-00-00', '0000-00-00', 0, 4),
(6, '', '【RORISTA_自由選】4磅組新鮮烘焙咖啡豆(450gX4包)', '30年老師傅專業烘焙<br>國際咖啡師定期杯測<br>嚴選G1等級咖啡豆', 0, 0, 455, 0, 0, 0, 0, 0, '1.商品組合/規格：依規格組合所示<br>2.商品品名：依規格組合所示<br>3.商品重(容)量：450g/包X4<br>4.內容物名稱(成分)：咖啡豆<br>5.食品添加物名稱：無<br>6.原產地(國)：台灣(烘焙)<br>7.製造廠商或國內負責廠商名稱：晴友國際有限公司<br>8.製造廠商或國內負責廠商地址：235新北市中和區秀峰街115號1樓<br>9.製造廠商或國內負責廠商電話：02-86689835<br>10.以消費者收受日算起 至少距有效日期前?日以上：91天<br>11.食品業者登錄字號：A-153948476-00000-4<br>12.投保產品責任險字號：明台產險0885-05PDT00302<br>備註欄：基於食品衛生安全 開封後非產品瑕疵恕無法退貨!<br>', '0000-00-00', '0000-00-00', '0000-00-00', 0, 5),
(7, '', '【G7】三合一即溶咖啡(16g*50包-新包裝*3組)', '口感滑順、濃郁香醇不苦澀<br>法式咖啡特有的奶油香氣<br>保證不添加人工香料調味', 0, 0, 99, 0, 0, 0, 0, 0, '成份:糖 奶精(葡萄糖漿 棕櫚油 品質改良劑)(磷酸氫二鉀 磷酸鈉 二氧化矽)<br>乳化劑(脂肪酸甘油酯 酒石酸甘油酯) 即溶咖啡(13%) 麥芽糊精 鹽<br>重量:800公克(16公克*50包)<br>保存期限:24個月<br>產地:越南<br>', '0000-00-00', '0000-00-00', '0000-00-00', 0, 4),
(8, '', '【WeWell】+鈣白咖啡二合一/三合一(25gx20入;有機通路銷售20年)', '馬來西亞原裝進口<br>添加鈣 維生素D3 B12<br>優質植物性大豆奶', 0, 0, 677, 0, 0, 0, 0, 0, '1.商品組合/規格：25gX20包/盒*1<br>2.商品品名：+鈣白咖啡-無甜/低甜(20入/盒)<br>3.商品重(容)量：25gX20包/盒*1<br>4.內容物名稱(成分)：白咖啡、植物性大豆奶精、碳酸鈣、維生素B12<br>5.食品添加物名稱：<br>6.原產地(國)：馬來西亞<br>7.製造廠商或國內負責廠商名稱：源昶國際股份有限公司<br>8.製造廠商或國內負責廠商地址：台北市松山區復興北路333號7樓之4<br>9.製造廠商或國內負責廠商電話：02-27192885<br>10.以消費者收受日算起 至少距有效日期前?日以上：商品保存期限1/2以上<br>11.食品業者登錄字號：A-180270835-00000-1<br>12.投保產品責任險字號：有<br>備註欄：請放置於通風陰涼處 開封後請儘速食用完畢<br>', '0000-00-00', '0000-00-00', '0000-00-00', 0, 4);

-- --------------------------------------------------------

--
-- 資料表結構 `product_package`
--

CREATE TABLE `product_package` (
  `id` tinyint(4) NOT NULL,
  `package` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_package`
--

INSERT INTO `product_package` (`id`, `package`) VALUES
(1, '罐裝'),
(2, '袋裝'),
(3, '盒裝'),
(4, '箱裝'),
(5, '瓶裝'),
(6, '禮盒'),
(7, '隨手包'),
(8, '1入'),
(9, '2入'),
(10, '35入'),
(11, '6~10入'),
(12, '11~30入'),
(13, '31~50入'),
(14, '51~100入'),
(15, '101~200入');

-- --------------------------------------------------------

--
-- 資料表結構 `product_place_of_orgin`
--

CREATE TABLE `product_place_of_orgin` (
  `id` tinyint(4) NOT NULL,
  `place` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_place_of_orgin`
--

INSERT INTO `product_place_of_orgin` (`id`, `place`) VALUES
(1, '台灣'),
(2, '日本'),
(3, '韓國'),
(4, '中國大陸'),
(5, '泰國'),
(6, '土耳其'),
(7, '緬甸'),
(8, '印尼'),
(9, '越南'),
(10, '馬來西亞'),
(11, '新加坡'),
(12, '美國'),
(13, '墨西哥'),
(14, '祕魯'),
(15, '巴西'),
(16, '加拿大'),
(17, '巴拿馬'),
(18, '法國'),
(19, '德國'),
(20, '西班牙'),
(21, '義大利'),
(22, '英國'),
(23, '瑞士'),
(24, '比利時'),
(25, '奧地利'),
(26, '荷蘭'),
(27, '葡萄牙'),
(28, '波蘭'),
(29, '丹麥'),
(30, '哥倫比亞'),
(31, '澳洲'),
(32, '紐西蘭'),
(33, '印度'),
(34, '南非'),
(35, '肯亞'),
(36, '其他'),
(37, '非洲'),
(38, '美洲'),
(39, '歐洲'),
(40, '亞洲'),
(41, '大洋洲');

-- --------------------------------------------------------

--
-- 資料表結構 `product_review`
--

CREATE TABLE `product_review` (
  `id` int(11) NOT NULL,
  `order_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `star` int(11) NOT NULL,
  `review` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product_roast`
--

CREATE TABLE `product_roast` (
  `id` tinyint(4) NOT NULL,
  `roast` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_roast`
--

INSERT INTO `product_roast` (`id`, `roast`) VALUES
(1, '生豆(無烘焙)'),
(2, '極淺焙'),
(3, '淺焙'),
(4, '中淺焙'),
(5, '中焙'),
(6, '中深焙'),
(7, '城市烘焙'),
(8, '深焙'),
(9, '法式烘焙'),
(10, '重焙');

-- --------------------------------------------------------

--
-- 資料表結構 `product_style`
--

CREATE TABLE `product_style` (
  `id` tinyint(4) NOT NULL,
  `style` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_style`
--

INSERT INTO `product_style` (`id`, `style`) VALUES
(1, '義式'),
(2, '藍山'),
(3, '曼巴'),
(4, '美式'),
(5, '曼特寧'),
(6, '哥斯大黎加'),
(7, '耶加雪菲'),
(8, '摩卡'),
(9, '牙買加純藍山'),
(10, '巴西'),
(11, '麝香貓咖啡'),
(12, '哥倫比亞'),
(13, '肯亞AA'),
(14, '馬拉威'),
(15, '盧安達'),
(16, '尚比亞'),
(17, '薩爾瓦多'),
(18, '巴拿馬'),
(19, '夏威夷Kona'),
(20, '葉門馬他利'),
(21, '安提瓜 花神'),
(22, '綜合豆(配方豆)'),
(23, '瓜地馬拉'),
(24, '日曬'),
(25, '藝伎Geisha'),
(26, '衣索比亞'),
(27, '尼加拉瓜'),
(28, '宏都拉斯'),
(29, '祕魯'),
(30, '西達摩'),
(31, '黃金曼特寧'),
(32, '印尼'),
(33, '巴拿馬'),
(34, '水洗'),
(35, '蜜處理'),
(36, '黑色'),
(37, '白色'),
(38, '黃色'),
(39, '綠色'),
(40, '藍色'),
(41, '棕色/咖啡色'),
(42, '膚色'),
(43, '銀色'),
(44, '粉紅色'),
(45, '多色'),
(46, '美式咖啡'),
(47, '黑咖啡'),
(48, '單品咖啡'),
(49, '義式咖啡'),
(50, '拿鐵'),
(51, '其他');

-- --------------------------------------------------------

--
-- 資料表結構 `product_sugar_level`
--

CREATE TABLE `product_sugar_level` (
  `id` tinyint(4) NOT NULL,
  `sugar_level` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_sugar_level`
--

INSERT INTO `product_sugar_level` (`id`, `sugar_level`) VALUES
(1, '無添加糖'),
(2, '無甜度'),
(3, '微甜'),
(4, '正常');

-- --------------------------------------------------------

--
-- 資料表結構 `product_type`
--

CREATE TABLE `product_type` (
  `id` tinyint(4) NOT NULL,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_type`
--

INSERT INTO `product_type` (`id`, `type`) VALUES
(1, '咖啡豆'),
(2, '濾掛式/茶包式'),
(3, '即溶咖啡'),
(4, '咖啡膠囊'),
(5, '咖啡粉'),
(6, '咖啡機'),
(7, '冰滴壺'),
(8, '奶泡機'),
(9, '奶精'),
(10, '即飲咖啡');

-- --------------------------------------------------------

--
-- 資料表結構 `product_weight`
--

CREATE TABLE `product_weight` (
  `id` tinyint(4) NOT NULL,
  `weight` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_weight`
--

INSERT INTO `product_weight` (`id`, `weight`) VALUES
(1, '0g~200g'),
(2, '201g~400g'),
(3, '401g~600g'),
(4, '601g~800g'),
(5, '801g~1000g'),
(6, '1001g~1500g'),
(7, '1501g~2000g'),
(8, '2001g~2500g'),
(9, '2501g~3000g'),
(10, '3000g以上'),
(11, '7g以下'),
(12, '8g'),
(13, '9g'),
(14, '10g'),
(15, '11g'),
(16, '12g以上'),
(17, '1~20g');

-- --------------------------------------------------------

--
-- 資料表結構 `shopping_cart`
--

CREATE TABLE `shopping_cart` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `member` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `user_address_county`
--

CREATE TABLE `user_address_county` (
  `id` int(11) NOT NULL,
  `county` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `user_address_county`
--

INSERT INTO `user_address_county` (`id`, `county`) VALUES
(1, '基隆市'),
(2, '台北市'),
(3, '新北市'),
(4, '桃園市'),
(5, '新竹市'),
(6, '新竹縣'),
(7, '苗栗縣'),
(8, '台中市'),
(9, '彰化縣'),
(10, '南投縣'),
(11, '雲林縣'),
(12, '\"嘉義市'),
(13, '嘉義縣'),
(14, '台南市'),
(15, '高雄市'),
(16, '屏東縣'),
(17, '台東縣'),
(18, '花蓮縣'),
(19, '宜蘭縣'),
(20, '澎湖縣'),
(21, '金門縣'),
(22, '連江縣');

-- --------------------------------------------------------

--
-- 資料表結構 `user_address_district`
--

CREATE TABLE `user_address_district` (
  `id` int(11) NOT NULL,
  `district` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `user_address_district`
--

INSERT INTO `user_address_district` (`id`, `district`) VALUES
(1, '板橋區'),
(2, '三重區'),
(3, '中和區'),
(4, '永和區'),
(5, '新莊區'),
(6, '新店區'),
(7, '樹林區'),
(8, '鶯歌區'),
(9, '三峽區'),
(10, '淡水區'),
(11, '汐止區'),
(12, '瑞芳區'),
(13, '土城區'),
(14, '蘆洲區'),
(15, '五股區'),
(16, '泰山區'),
(17, '林口區'),
(18, '深坑區'),
(19, '石碇區'),
(20, '坪林區'),
(21, '三芝區'),
(22, '石門區'),
(23, '八里區'),
(24, '平溪區'),
(25, '雙溪區'),
(26, '貢寮區'),
(27, '金山區'),
(28, '萬里區'),
(29, '烏來區'),
(30, '松山區'),
(31, '信義區'),
(32, '大安區'),
(33, '中山區'),
(34, '中正區'),
(35, '大同區'),
(36, '萬華區'),
(37, '文山區'),
(38, '南港區'),
(39, '內湖區'),
(40, '士林區'),
(41, '北投區'),
(42, '桃園區'),
(43, '中壢區'),
(44, '大溪區'),
(45, '楊梅區'),
(46, '蘆竹區'),
(47, '大園區'),
(48, '龜山區'),
(49, '八德區'),
(50, '龍潭區'),
(51, '平鎮區'),
(52, '新屋區'),
(53, '觀音區'),
(54, '復興區'),
(55, '中區'),
(56, '東區'),
(57, '南區'),
(58, '西區'),
(59, '北區'),
(60, '西屯區'),
(61, '南屯區'),
(62, '北屯區'),
(63, '豐原區'),
(64, '東勢區'),
(65, '大甲區'),
(66, '清水區'),
(67, '沙鹿區'),
(68, '梧棲區'),
(69, '后里區'),
(70, '神岡區'),
(71, '潭子區'),
(72, '大雅區'),
(73, '新社區'),
(74, '石岡區'),
(75, '外埔區'),
(76, '大安區'),
(77, '烏日區'),
(78, '大肚區'),
(79, '龍井區'),
(80, '霧峰區'),
(81, '太平區'),
(82, '大里區'),
(83, '和平區'),
(84, '新營區'),
(85, '鹽水區'),
(86, '白河區'),
(87, '柳營區'),
(88, '後壁區'),
(89, '東山區'),
(90, '麻豆區'),
(91, '下營區'),
(92, '六甲區'),
(93, '官田區'),
(94, '大內區'),
(95, '佳里區'),
(96, '學甲區'),
(97, '西港區'),
(98, '七股區'),
(99, '將軍區'),
(100, '北門區'),
(101, '新化區'),
(102, '善化區'),
(103, '新市區'),
(104, '安定區'),
(105, '山上區'),
(106, '玉井區'),
(107, '楠西區'),
(108, '南化區'),
(109, '左鎮區'),
(110, '仁德區'),
(111, '歸仁區'),
(112, '關廟區'),
(113, '龍崎區'),
(114, '永康區'),
(115, '東區'),
(116, '南區'),
(117, '北區'),
(118, '安南區'),
(119, '安平區'),
(120, '中西區'),
(121, '鹽埕區'),
(122, '鼓山區'),
(123, '左營區'),
(124, '楠梓區'),
(125, '三民區'),
(126, '新興區'),
(127, '前金區'),
(128, '苓雅區'),
(129, '前鎮區'),
(130, '旗津區'),
(131, '小港區'),
(132, '鳳山區'),
(133, '林園區'),
(134, '大寮區'),
(135, '大樹區'),
(136, '大社區'),
(137, '仁武區'),
(138, '鳥松區'),
(139, '岡山區'),
(140, '橋頭區'),
(141, '燕巢區'),
(142, '田寮區'),
(143, '阿蓮區'),
(144, '路竹區'),
(145, '湖內區'),
(146, '茄萣區'),
(147, '永安區'),
(148, '彌陀區'),
(149, '梓官區'),
(150, '旗山區'),
(151, '美濃區'),
(152, '六龜區'),
(153, '甲仙區'),
(154, '杉林區'),
(155, '內門區'),
(156, '茂林區'),
(157, '桃源區'),
(158, '那瑪夏區'),
(159, '中正區'),
(160, '七堵區'),
(161, '暖暖區'),
(162, '仁愛區'),
(163, '中山區'),
(164, '安樂區'),
(165, '信義區'),
(166, '東區'),
(167, '北區'),
(168, '香山區'),
(169, '東區'),
(170, '西區'),
(171, '宜蘭市'),
(172, '羅東鎮'),
(173, '蘇澳鎮'),
(174, '頭城鎮'),
(175, '礁溪鄉'),
(176, '壯圍鄉'),
(177, '員山鄉'),
(178, '冬山鄉'),
(179, '五結鄉'),
(180, '三星鄉'),
(181, '大同鄉'),
(182, '南澳鄉'),
(183, '竹北市'),
(184, '關西鎮'),
(185, '新埔鎮'),
(186, '竹東鎮'),
(187, '湖口鄉'),
(188, '橫山鄉'),
(189, '新豐鄉'),
(190, '芎林鄉'),
(191, '寶山鄉'),
(192, '北埔鄉'),
(193, '峨眉鄉'),
(194, '尖石鄉'),
(195, '五峰鄉'),
(196, '苗栗市'),
(197, '頭份市'),
(198, '苑裡鎮'),
(199, '通霄鎮'),
(200, '竹南鎮'),
(201, '後龍鎮'),
(202, '卓蘭鎮'),
(203, '大湖鄉'),
(204, '公館鄉'),
(205, '銅鑼鄉'),
(206, '南庄鄉'),
(207, '頭屋鄉'),
(208, '三義鄉'),
(209, '西湖鄉'),
(210, '造橋鄉'),
(211, '三灣鄉'),
(212, '獅潭鄉'),
(213, '泰安鄉'),
(214, '彰化市'),
(215, '員林市'),
(216, '鹿港鎮'),
(217, '和美鎮'),
(218, '北斗鎮'),
(219, '溪湖鎮'),
(220, '田中鎮'),
(221, '二林鎮'),
(222, '線西鄉'),
(223, '伸港鄉'),
(224, '福興鄉'),
(225, '秀水鄉'),
(226, '花壇鄉'),
(227, '芬園鄉'),
(228, '大村鄉'),
(229, '埔鹽鄉'),
(230, '埔心鄉'),
(231, '永靖鄉'),
(232, '社頭鄉'),
(233, '二水鄉'),
(234, '田尾鄉'),
(235, '埤頭鄉'),
(236, '芳苑鄉'),
(237, '大城鄉'),
(238, '竹塘鄉'),
(239, '溪州鄉'),
(240, '南投市'),
(241, '埔里鎮'),
(242, '草屯鎮'),
(243, '竹山鎮'),
(244, '集集鎮'),
(245, '名間鄉'),
(246, '鹿谷鄉'),
(247, '中寮鄉'),
(248, '魚池鄉'),
(249, '國姓鄉'),
(250, '水里鄉'),
(251, '信義鄉'),
(252, '仁愛鄉'),
(253, '斗六市'),
(254, '斗南鎮'),
(255, '虎尾鎮'),
(256, '西螺鎮'),
(257, '土庫鎮'),
(258, '北港鎮'),
(259, '古坑鄉'),
(260, '大埤鄉'),
(261, '莿桐鄉'),
(262, '林內鄉'),
(263, '二崙鄉'),
(264, '崙背鄉'),
(265, '麥寮鄉'),
(266, '東勢鄉'),
(267, '褒忠鄉'),
(268, '臺西鄉'),
(269, '元長鄉'),
(270, '四湖鄉'),
(271, '口湖鄉'),
(272, '水林鄉'),
(273, '太保市'),
(274, '朴子市'),
(275, '布袋鎮'),
(276, '大林鎮'),
(277, '民雄鄉'),
(278, '溪口鄉'),
(279, '新港鄉'),
(280, '六腳鄉'),
(281, '東石鄉'),
(282, '義竹鄉'),
(283, '鹿草鄉'),
(284, '水上鄉'),
(285, '中埔鄉'),
(286, '竹崎鄉'),
(287, '梅山鄉'),
(288, '番路鄉'),
(289, '大埔鄉'),
(290, '阿里山鄉'),
(291, '屏東市'),
(292, '潮州鎮'),
(293, '東港鎮'),
(294, '恆春鎮'),
(295, '萬丹鄉'),
(296, '長治鄉'),
(297, '麟洛鄉'),
(298, '九如鄉'),
(299, '里港鄉'),
(300, '鹽埔鄉'),
(301, '高樹鄉'),
(302, '萬巒鄉'),
(303, '內埔鄉'),
(304, '竹田鄉'),
(305, '新埤鄉'),
(306, '枋寮鄉'),
(307, '新園鄉'),
(308, '崁頂鄉'),
(309, '林邊鄉'),
(310, '南州鄉'),
(311, '佳冬鄉'),
(312, '琉球鄉'),
(313, '車城鄉'),
(314, '滿州鄉'),
(315, '枋山鄉'),
(316, '三地門鄉'),
(317, '霧臺鄉'),
(318, '瑪家鄉'),
(319, '泰武鄉'),
(320, '來義鄉'),
(321, '春日鄉'),
(322, '獅子鄉'),
(323, '牡丹鄉'),
(324, '臺東市'),
(325, '成功鎮'),
(326, '關山鎮'),
(327, '卑南鄉'),
(328, '大武鄉'),
(329, '太麻里鄉'),
(330, '東河鄉'),
(331, '長濱鄉'),
(332, '鹿野鄉'),
(333, '池上鄉'),
(334, '綠島鄉'),
(335, '延平鄉'),
(336, '海端鄉'),
(337, '達仁鄉'),
(338, '金峰鄉'),
(339, '蘭嶼鄉'),
(340, '花蓮市'),
(341, '鳳林鎮'),
(342, '玉里鎮'),
(343, '新城鄉'),
(344, '吉安鄉'),
(345, '壽豐鄉'),
(346, '光復鄉'),
(347, '豐濱鄉'),
(348, '瑞穗鄉'),
(349, '富里鄉'),
(350, '秀林鄉'),
(351, '萬榮鄉'),
(352, '卓溪鄉'),
(353, '馬公市'),
(354, '湖西鄉'),
(355, '白沙鄉'),
(356, '西嶼鄉'),
(357, '望安鄉'),
(358, '七美鄉'),
(359, '金城鎮'),
(360, '金湖鎮'),
(361, '金沙鎮'),
(362, '金寧鄉'),
(363, '烈嶼鄉'),
(364, '烏坵鄉'),
(365, '南竿鄉'),
(366, '北竿鄉'),
(367, '莒光鄉'),
(368, '東引鄉');

-- --------------------------------------------------------

--
-- 資料表結構 `user_admin`
--

CREATE TABLE `user_admin` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `account` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `user_business`
--

CREATE TABLE `user_business` (
  `id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `account` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(10) NOT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_date` date NOT NULL,
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `user_member`
--

CREATE TABLE `user_member` (
  `id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `account` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(97) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `gender` int(11) NOT NULL,
  `email` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_date` date NOT NULL DEFAULT current_timestamp(),
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rank` int(11) NOT NULL,
  `valid` int(11) NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `coupon_category`
--
ALTER TABLE `coupon_category`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `coupon_list`
--
ALTER TABLE `coupon_list`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `coupon_logs`
--
ALTER TABLE `coupon_logs`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `coupon_recevie`
--
ALTER TABLE `coupon_recevie`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `coupon_send_type`
--
ALTER TABLE `coupon_send_type`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `member_message`
--
ALTER TABLE `member_message`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `order_list`
--
ALTER TABLE `order_list`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `order_payment_method`
--
ALTER TABLE `order_payment_method`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_list`
--
ALTER TABLE `product_list`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_package`
--
ALTER TABLE `product_package`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_place_of_orgin`
--
ALTER TABLE `product_place_of_orgin`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_review`
--
ALTER TABLE `product_review`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_roast`
--
ALTER TABLE `product_roast`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_style`
--
ALTER TABLE `product_style`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_sugar_level`
--
ALTER TABLE `product_sugar_level`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_weight`
--
ALTER TABLE `product_weight`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `shopping_cart`
--
ALTER TABLE `shopping_cart`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user_address_county`
--
ALTER TABLE `user_address_county`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user_address_district`
--
ALTER TABLE `user_address_district`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user_admin`
--
ALTER TABLE `user_admin`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user_business`
--
ALTER TABLE `user_business`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user_member`
--
ALTER TABLE `user_member`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_category`
--
ALTER TABLE `coupon_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_list`
--
ALTER TABLE `coupon_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_logs`
--
ALTER TABLE `coupon_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_recevie`
--
ALTER TABLE `coupon_recevie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon_send_type`
--
ALTER TABLE `coupon_send_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member_message`
--
ALTER TABLE `member_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_list`
--
ALTER TABLE `order_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_payment_method`
--
ALTER TABLE `order_payment_method`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_list`
--
ALTER TABLE `product_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_package`
--
ALTER TABLE `product_package`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_place_of_orgin`
--
ALTER TABLE `product_place_of_orgin`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_review`
--
ALTER TABLE `product_review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_roast`
--
ALTER TABLE `product_roast`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_style`
--
ALTER TABLE `product_style`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_sugar_level`
--
ALTER TABLE `product_sugar_level`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_type`
--
ALTER TABLE `product_type`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_weight`
--
ALTER TABLE `product_weight`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `shopping_cart`
--
ALTER TABLE `shopping_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_address_county`
--
ALTER TABLE `user_address_county`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_address_district`
--
ALTER TABLE `user_address_district`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=369;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_admin`
--
ALTER TABLE `user_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_business`
--
ALTER TABLE `user_business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_member`
--
ALTER TABLE `user_member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
