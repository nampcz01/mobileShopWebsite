-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: chatbot
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cache_respond`
--

DROP TABLE IF EXISTS `cache_respond`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_respond` (
  `request_id` bigint NOT NULL AUTO_INCREMENT,
  `request` varchar(1000) DEFAULT NULL,
  `respond` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`request_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_respond`
--

LOCK TABLES `cache_respond` WRITE;
/*!40000 ALTER TABLE `cache_respond` DISABLE KEYS */;
INSERT INTO `cache_respond` VALUES (1,'\"Hi\"','Hello! How can I assist you today?'),(2,'\"I wanna buy a phone about 2000$\"','If you\'re looking to buy a phone for around $2000, you have a range of high-end options to choose from. Some of the top flagship phones within that price range include:\n\n1. iPhone 13 Pro Max: This phone offers advanced features, a powerful A15 Bionic chip, a high-quality camera system, and a stunning display.\n\n2. Samsung Galaxy Z Fold 3: This foldable phone combines the convenience of a smartphone with the versatility of a tablet. It features a large folding display, a Snapdragon 888 processor, and a triple camera setup.\n\n3. Google Pixel 6 Pro: Known for its exceptional camera capabilities, the Pixel 6 Pro offers a unique photography experience and runs on Google\'s latest software. It also comes with a powerful processor and a vibrant display.\n\n4. ASUS ROG Phone 5 Ultimate: If you\'re interested in gaming, this phone is designed specifically for enhanced mobile gaming experiences. It features a Snapdragon 888 chipset, a high-refresh'),(3,'\"tôi muốn mua một chiếc điện thoại tầm 10 triệu\"','Nếu bạn muốn mua một chiếc điện thoại tầm 10 triệu, bạn có thể xem xét các lựa chọn sau:\n\n1. iPhone SE (2020): Đây là một trong những chiếc điện thoại tốt nhất trong tầm giá. Nó có màn hình 4.7 inch, chip Apple A13 Bionic công nghệ 7nm, camera chất lượng cao và hỗ trợ iOS mới nhất. \n\n2. Samsung Galaxy A71: Điện thoại này có màn hình Super AMOLED 6.7 inch, chip Snapdragon 730, camera chính 64MP và pin dung lượng lớn. Nó cũng có giao diện người dùng One UI 2.0 dễ sử dụ'),(4,'\"tôi muốn mua một chiếc điện thoại tầm 5 triệu\"','Bạn có thể tìm hiểu và mua một số điện thoại trong tầm giá khoảng 5 triệu như: \n\n1. Xiaomi Redmi Note 9 Pro: Máy có màn hình 6.67 inch, camera chính 64 MP, pin 5020 mAh, giá thường rơi vào khoảng 4 - 5 triệu đồng.\n\n2. Realme 6 Pro: Máy có màn hình 6.6 inch, camera chính 64 MP, pin 4300 mAh, giá thường rơi vào khoảng 4 - 5 triệu đồng.\n\n3. Samsung Galaxy A51: Máy có màn hình 6.5 inch, camera chính 48 MP, pin 4000 mAh, giá thường rơi'),(5,'\"tôi muốn mua một chiếc điện thoại với chất lượng chụp hình tốt nhất\"','Khi bạn muốn mua một chiếc điện thoại với chất lượng chụp hình tốt nhất, hãy xem xét một số yếu tố sau:\n\n1. Độ phân giải camera: Lựa chọn điện thoại có độ phân giải camera cao để chụp hình sắc nét và chi tiết. Độ phân giải như 12MP trở lên được coi là tốt.\n\n2. Kích thước cảm biến: Cảm biến lớn hơn sẽ cho phép thu được nhiều ánh sáng hơn, cung cấp hình ảnh tốt hơn trong điều kiện ánh sáng thấp và tạo ra hiệu ứ'),(6,'\"tôi muốn mua một chiếc điện thoại với camera 64mpx\"','Nếu bạn muốn mua một chiếc điện thoại với camera 64MPx, bạn có thể tham khảo một số mẫu điện thoại sau đây:\n\n1. Samsung Galaxy S21 Ultra: Điện thoại cao cấp của Samsung với camera sau 108MPx.\n2. Xiaomi Mi 11 Ultra: Điện thoại cao cấp của Xiaomi với camera sau 50MPx và khả năng zoom 120x.\n3. Huawei P40 Pro+: Điện thoại cao cấp của Huawei với camera sau 50MPx và khả năng zoom quang học 10x.\n\nĐây chỉ là một số lựa chọn phổ biến, bạn cần xem xét thêm tính năng và giá cả để lựa chọn'),(7,'\"tôi muốn mua một chiếc điện thoại với giá khoảng 10 triệu\"','Bên dưới là một số gợi ý về các mẫu điện thoại với giá khoảng 10 triệu đồng:\n\n1. Samsung Galaxy A52: Một trong những mẫu điện thoại phổ thông của Samsung với màn hình 6.5 inch, camera chất lượng, hiệu năng ổn định và pin lâu.\n\n2. Xiaomi Redmi Note 10 Pro: Một mẫu điện thoại được đánh giá cao với màn hình AMOLED 6.67 inch, camera 64MP, hiệu năng mạnh mẽ và pin dung lượng lớn.\n\n3. Realme 8 Pro: Một mẫu điện thoại tầm trung với màn hình AMOLED '),(8,'\"tôi muốn mua một chiếc điện thoại khoảng 10 triệu\"','Bạn có thể xem xét một số điện thoại sau đây trong tầm giá 10 triệu đồng:\n\n1. Xiaomi Redmi Note 10 Pro: Đây là một trong những smartphone tầm trung tốt nhất trong tầm giá 10 triệu đồng. Nó có màn hình AMOLED 6.67 inch, chip Snapdragon 732G, RAM 6GB, ROM 64GB, camera chính 64MP và pin 5020mAh.\n\n2. Realme 8 Pro: Đây cũng là một lựa chọn tốt với màn hình Super AMOLED 6.4 inch, chip Snapdragon 720G, RAM 6GB, ROM 128GB, camera chính 108MP và pin 4500mAh.\n\n3. Samsung Galaxy');
/*!40000 ALTER TABLE `cache_respond` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-04 22:08:17
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: inventory
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `promotion` bigint DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg','Apple','iPhone 13 128GB | Chính hãng VN/A',18990000,10),(2,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png','Apple','iPhone 14 Pro Max 128GB | Chính hãng VN/A',29990000,10),(3,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_7.jpg','Apple','iPhone 13 Pro Max 128GB | Chính hãng VN/A',28990000,10),(4,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg','Apple','iPhone 11 64GB | Chính hãng VN/A',10390000,10),(5,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_252.jpg','Apple','iPhone 12 64GB | Chính hãng VN/A',15990000,10),(6,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-14-storage-select-202209-6-1inch-y889.jpg','Apple','iPhone 14 128GB | Chính hãng VN/A',22990000,10),(7,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/4/_/4_187_1.jpg','Apple','iPhone 11 128GB | Chính hãng VN/A',13990000,10),(8,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png','Apple','iPhone 14 128GB | Chính hãng VN/A',27990000,10),(9,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/_/2_241_2.jpg','Apple','iPhone 12 128GB | Chính hãng VN/A',17990000,10),(10,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_3.jpg','Apple','iPhone 13 Pro 128GB | Chính hãng VN/A',23990000,10),(11,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/h/photo_2022-09-28_21-58-51_4.jpg','Apple','iPhone 14 Plus 128GB | Chính hãng VN/A',24990000,10),(12,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_66_6_2_1_12.jpg','Apple','iPhone 13 Pro Max 256GB | Chính hãng VN/A',31990000,10),(13,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/1/11_3_12_2_1_6.jpg','Apple','iPhone 13 256GB | Chính hãng VN/A',21990000,10),(14,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/_/x_m_12.jpg','Apple','iPhone 12 Pro Max 512GB | Chính hãng VN/A',37990000,10),(15,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_251_3.jpg','Apple','iPhone 12 Pro 256GB | Chính hãng VN/A',28990000,10),(16,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/_/v_ng_20.png','Apple','iPhone 14 Pro Max 256GB | Chính hãng VN/A',32990000,10),(17,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/iphone-12-pro-max_3__9.jpg','Apple','iPhone 12 Pro 128GB | Chính hãng VN/A',26990000,10),(18,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_13.png','Apple','iPhone 14 Pro 256GB | Chính hãng VN/A',29990000,10),(19,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_10.jpg','Apple','iPhone 13 Pro Max 1TB I Chính hãng VN/A',35990000,10),(20,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_4.jpg','Apple','iPhone 13 Pro 256GB | Chính hãng VN/A',26990000,10),(21,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_365.jpg','Asus','ASUS ROG Phone 7 Ultimate 16GB 512GB',29990000,10),(22,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/s/asus-rog-phone-6-diablo.png','Asus','ASUS ROG Phone 6 Diablo 16GB 512GB',23990000,10),(23,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/a/s/asus-rog-phone-6-12gb-256gb_2.png','Asus','ASUS ROG Phone 6 16GB 512GB',21990000,10),(24,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/v/dvfdgty.jpg','Asus','ASUS ROG Phone 6 Batman 12GB 256GB',17990000,10),(25,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/b/g/bgf.png','Asus','ASUS ROG Phone 6 12GB 256GB',17990000,10),(26,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/g/dgtyi8899_.jpg','Nokia','Nokia G22 4GB 128GB',3420000,10),(27,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/n/o/nokia-c32_3_.png','Nokia','Nokia C32 4GB 128GB',2920000,10),(28,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_250_1.jpg','Nokia','Nokia C31 4GB 128GB',2890000,10),(29,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/n/o/nokia-c21-plus-600x600_2.jpg','Nokia','Nokia C21 Plus 3GB 32GB',2390000,10),(30,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/n/o/nokia-g11-plus-blue_2.jpg','Nokia','Nokia G11 Plus 3GB 32GB',2550000,10),(31,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/n/o/nokia-5701.jpg','Nokia','Nokia 5710 XpressAudio',2050000,10),(32,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/n/o/nokia-8210_4g-sand-front_back-int.png','Nokia','Nokia 8210 4G',1990000,10),(33,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/n/o/nokia-215-4g-600jpg-600x600.jpg','Nokia','Nokia 215 4G',1490000,10),(34,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/1/110-1.jpg','Nokia','Nokia 110 4G',1990000,10),(35,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/0/105.jpg','Nokia','Nokia 105 4G',1760000,10),(36,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/n/o/nokia-105-4g-pro_8_.png','Nokia','Nokia 105 4G Pro',1490000,10),(37,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/red-magic-7-1_7hxhmi7_1.jpg','Nubia','Nubia Red Magic 7 Pusar 16GB 256GB',18990000,10),(38,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/n/u/nubia-red-magic-6s-pro-black_1.png','Nubia','Nubia Red Magic 6s Pro Cyborg 16GB 256GB',18490000,10),(39,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/n/oneplus_11_-_black_-_rgb.jpg','Oneplus','OnePlus 11 5G 16GB 256GB',19690000,10),(40,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/n/oneplus_11_-_black_-_rgb_1.jpg','Oneplus','OnePlus 11 5G 8GB 128GB',18690000,10),(41,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/n/oneplus10tblack_1.jpg','Oneplus','Oneplus 10T 5G 8GB 128GB',17490000,10),(42,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/n/oneplus-nord-3.png','Oneplus','OnePlus Nord 3 5G 16GB 256GB',16490000,10),(43,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/e/d/edobfefy.jpg','Oneplus','OnePlus Nord CE 3 Lite',13990000,10),(44,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/realme-11-pro.png','Realme','Realme 11 Pro 8GB 256GB',11690000,10),(45,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/realme-11-vang-1.jpg','Realme','Realme 11 8GB 128GB',9690000,10),(46,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/realme-8-5g-blue-1-600x600_1.jpg','Realme','Realme 8 5G',7190000,10),(47,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/9/_/9_ro_plus.png','Realme','Realme 9 Pro Plus',5190000,10),(48,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/h/white-7e6a0f537b.png','Realme','Realme 10 8GB 256GBs',6290000,10),(49,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/g/rgrgrtyt6_1.jpg','Realme','Realme C55 8GB 256GB',5790000,10),(50,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/g/rgrgrtyt6.jpg','Realme','Realme C55 6GB 256GB',5390000,10),(51,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/s/1sdcsc_2.jpg','Realme','Realme C33 4GB 64GB',4890000,10),(52,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/s/1sdcsc.jpg','Realme','Realme C33 3GB 64GB',5290000,10),(53,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/realme-c30s-den-glr--009_3_3.jpg','Realme','Realme C30s 3GB 64GB',4790000,10),(54,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/realme-c30s-den-glr--009.jpg','Realme','Realme C30s 2GB 64GB',4990000,10),(55,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/a/galaxys23ultra_front_green_221122_2.jpg','Samsung','Samsung Galaxy S23 Ultra 256GB',31990000,10),(56,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/b/4/b48cd136-7366-4d01-8d58-8ee3d5dc93b7_1.jpg','Samsung','Samsung Galaxy Z Fold5 12GB 512GB',44990000,10),(57,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/4/d4a672c5-4709-4056-9f7f-72d6d70c2c1d_1.jpg','Samsung','Samsung Galaxy Z Flip5 512GB',29990000,10),(58,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_flip_m_i_2022-1_1.jpg','Samsung','Samsung Galaxy Z Flip4 128GB',23990000,10),(59,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_phantomblack_211119_2.jpg','Samsung','Samsung Galaxy S22 Ultra (12GB - 256GB)',33990000,10),(60,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-20-fe_4_.jpg','Samsung','Samsung Galaxy S20 FE 256GB',12490000,10),(61,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg','Samsung','Samsung Galaxy S22 Ultra (8GB - 128GB)',30990000,10),(62,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/l/b/lb-galaxy-m14-sm-m146-sm-m146bzbvmea-535834833.png','Samsung','Samsung Galaxy M14 5G 4GB 128GB',5290000,10),(63,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-a34_3_.jpg','Samsung','Samsung Galaxy A34 5G 8GB 128GB',8490000,10),(64,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/a/galaxys23ultra_front_green_221122_1.jpg','Samsung','Samsung Galaxy S23 Ultra 12GB 512GB',36990000,10),(65,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-g990_s21fe_backfront_lv.png','Samsung','Samsung Galaxy S21 FE 8GB 128GB',36990000,10),(66,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-a54_3_.jpg','Samsung','Samsung Galaxy A54 5G 8GB 128GB',10490000,10),(67,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_fold_4-7.jpg','Samsung','Samsung Galaxy Z Fold4 256GB',40990000,10),(68,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-a536_galaxy_a53_5g_awesome_peach004.jpg','Samsung','Samsung Galaxy A53 (5G)',9990000,10),(69,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/g/_global-version_-sm-s911_galaxys23_back_cream_221122.jpg','Samsung','Samsung Galaxy S23 8GB 256GB',24990000,10),(70,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-a14_1_.jpg','Samsung','Samsung Galaxy A14 5G',5190000,10),(71,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/g/_global_version_sm-s916_galaxys23plus_front_cream_221122.jpg','Samsung','Samsung Galaxy S23 Plus 8GB 256GB',26990000,10),(72,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/2/22_14.jpg','Samsung','Samsung Galaxy A23 5G',5990000,10),(73,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/4/d4a672c5-4709-4056-9f7f-72d6d70c2c1d_1.jpg','Samsung','Samsung Galaxy Z Flip5 256GB',25990000,10),(74,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung-galaxy-a14-4g.jpg','Samsung','Samsung Galaxy A14 4G',4490000,10),(75,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg','Xiaomi','Xiaomi Redmi Note 12 8GB 128GB',5790000,10),(76,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gtt_7766_3__1.jpg','Xiaomi','Xiaomi Redmi Note 12 4GB 128GB',4990000,10),(77,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/t/gtt_7766_3__1.jpg','Xiaomi','Xiaomi Redmi Note 12 Pro 5G',9490000,10),(78,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-den_1.jpg','Xiaomi','Xiaomi 12T 8GB 128GB',12490000,10),(79,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/redmi-note-12-pro-4g-1-den.jpg','Xiaomi','Xiaomi Redmi Note 12 Pro 4G 8GB 256GB',7990000,10),(80,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-12-pro_arenamobiles.jpg','Xiaomi','Xiaomi 12 Pro (5G)',27990000,10),(81,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-redmi-note-12s.jpg','Xiaomi','Xiaomi Redmi Note 12S',6690000,10),(82,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/p/m/pms_1670745783.80967984.png','Xiaomi','Xiaomi 13 8GB 256GB',22990000,10),(83,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/5/f5677.jpg','Xiaomi','Xiaomi Redmi 12C 4GB 64GB',3590000,10),(84,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/3/13_liteee.jpg','Xiaomi','Xiaomi 13 Lite',11490000,10),(85,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/7/d78000_6_.jpg','Xiaomi','Xiaomi POCO X5 Pro 5G 6GB 128GB',7690000,10),(86,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/7/d78000_6_.jpg','Xiaomi','Xiaomi POCO X5 Pro 5G 8GB 128GB',8690000,10),(87,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/8/0/800x800-640x640-5.png','Xiaomi','Xiaomi Redmi Note 11 128GB',4990000,10),(88,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/1/11-pro-plus-blue.jpg','Xiaomi','Xiaomi Redmi Note 11 Pro Plus 5G',9990000,10),(89,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-11-lite-5g-014_1.jpg','Xiaomi','Xiaomi 11 Lite 5G NE',9490000,10),(90,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi-mi-11-lite-5g-2_10.png','Xiaomi','Xiaomi Mi 11 Lite 5G',10490000,10),(91,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/7/d78000_2__1.jpg','Xiaomi','POCO X5 5G 6GB 128GB',6490000,10),(92,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/w/1/w1q1111c_.jpg','Xiaomi','Redmi A1',2190000,10),(93,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/x/i/xiaomi_redmi_note_.jpg_pro_5g_blanco_01_l.jpg','Xiaomi','Xiaomi Redmi Note 11 Pro 5G',8990000,10),(94,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/v/fvssxa_3.jpg','Xiaomi','Xiaomi POCO M5 6GB 128GB',4690000,10),(95,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/r/e/reno10_5g_-_combo_product_-_blue.png','Oppo','OPPO Reno10 5G 8GB 256GB',10990000,7),(96,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/p/oppo-reno8t-vang1-thumb-600x600.jpg','Oppo','OPPO Reno8 T 5G (8GB - 128GB)',9990000,7),(97,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/n/2/n2_flip_-_combo_product_-_black.png','Oppo','OPPO Find N2 Flip',9290000,6),(98,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_a78_-_black_-_rgb.jpg','Oppo','OPPO A78 4G (8GB 256GB)',8290000,11),(99,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/o/p/oppo-a58-4g-ra-mat-2.jpeg','Oppo','OPPO A58 4G 6GB 128GB',19990000,17),(100,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_product_-_reno8_5g_-_black.png','Oppo','OPPO Reno8 5G 8GB 256GB',18990000,16),(101,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_product_-_reno8_4g_-_gold.png','Oppo','OPPO Reno8',6490000,5),(102,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_a57_-_black.jpg','Oppo','OPPO A57 4GB 64GB',5490000,30),(103,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_a55_-_xanh_-_cmyk.jpg','Oppo','OPPO A55',4690000,11),(104,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_product_-_rainbow_spectrum_-_reno7_z.png','Oppo','OPPO Reno7 Z (5G)',4190000,5),(105,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/6/3/638106969904674603_oppo-reno8-t-4g-den-5.jpg','Oppo','OPPO Reno8 T 256GB',12490000,16),(106,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_a77s-_en_2.jpg','Oppo','OPPO A77s',11990000,42),(107,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_a57_-_black_3.jpg','Oppo','OPPO A57 4GB 128GB',7490000,41),(108,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_product_-_blue_-_reno7_5g.png','Oppo','OPPO Reno7 (5G)',6990000,9),(109,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_i_xu_ng_42__3.png','Oppo','OPPO Reno 7 Pro',3790000,8),(110,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_a17k_-_gold_-_cmyk.jpg','Oppo','OPPO A17K',3290000,35),(111,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/b/1/b1ppr0nazrpqahyt.jpg','Oppo','OPPO A17',3490000,0),(112,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/o/combo_a16k_-_black.jpg','Oppo','OPPO A16K',2990000,0),(113,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/9/1936effb41dd2f8c76ea03ce8896aed2-1469283732.jpg','Oppo','OPPO Find N2',7000000,0),(114,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/s/1srrrrrff_.jpg','Oppo','OPPO Find X6 Pro',6500000,0),(115,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/i/p/ip179999_00.jpg','Vivo','vivo V25 Pro 8GB 128GB',9990000,29),(116,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_i_xu_ng_23__4_6.png','Vivo','Vivo V27e 8GB 256GB',9490000,24),(117,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/i/vivo_v25_5g_8gb_128gb-removebg-preview_1.png','Vivo','vivo V25 5G 8GB 128GB',8990000,20),(118,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/i/vivov25e.png','Vivo','vivo V25e 8GB 128GB',8490000,5),(119,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/i/vivo-y36_2.jpg','Vivo','Vivo Y36',7990000,21),(120,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/_/2_282.jpg','Vivo','vivo Y35',7490000,35),(121,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/c/9/c91ba5bf721d5b2d4eae4f821b8e4ced.png','Vivo','vivo V23e',6790000,10),(122,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/2/f/2fd21c69b0cae924821762ec8270b62e.png','Vivo','vivo Y22S 8GB 128GB',6290000,17),(123,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/5/4/542434226_3.jpeg','Vivo','vivo Y22S 4GB 128GB',5990000,7),(124,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/i/vivo-y16-den.jpg','Vivo','vivo Y16 4GB 128GB',5490000,10),(125,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/1/t1x_01.png','Vivo','vivo T1X',5490000,10),(126,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/i/vivo-y02s-thumb-1-2-600x600_3.jpg','Vivo','vivo Y02s 3GB 64GB',4990000,18),(127,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/i/vivo-y02t.png','Vivo','Vivo Y02t 4GB 64GB',5490000,14),(128,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/d/_/d_nnen_4__1.jpg','Vivo','Vivo Y02A 3GB 32GB',4990000,0),(129,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/i/vivo-y02s-thumb-1-2-600x600.jpg','Vivo','vivo Y02s 3G 32GB',5390000,0),(130,'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/v/i/vivo-y02-002.jpg','Vivo','vivo Y02',4890000,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_detail`
--

DROP TABLE IF EXISTS `product_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_detail` (
  `product_id` bigint NOT NULL,
  `chipset` varchar(255) DEFAULT NULL,
  `back_cam` varchar(255) DEFAULT NULL,
  `battery` bigint DEFAULT NULL,
  `display_size` double NOT NULL,
  `display_type` varchar(255) DEFAULT NULL,
  `front_cam` varchar(255) DEFAULT NULL,
  `operating_system` varchar(255) DEFAULT NULL,
  `ram` bigint DEFAULT NULL,
  `rom` bigint DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_detail`
--

LOCK TABLES `product_detail` WRITE;
/*!40000 ALTER TABLE `product_detail` DISABLE KEYS */;
INSERT INTO `product_detail` VALUES (1,'Apple A15','Camera góc rộng: 12MP, f/1.6 Camera góc siêu rộng: 12MP, ƒ/2.4',3240,6.1,'Super Retina XDR OLED','12MP, f/2.2','iOS 15',4,128),(2,'Apple A16 Bionic 6 nhân','Camera chính: 48 MP, f/1.8, 24mm, 1.22µm, PDAF, OIS Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚, 1.4µm, PDAF Camera tele: 12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR',4323,6.7,'Super Retina XDR OLED','Camera selfie: 12 MP, f/1.9, 23mm, 1/3.6, PDAF','iOS 16',6,128),(3,'Apple A15','Camera góc rộng: 12MP, ƒ/1.5 Camera góc siêu rộng: 12MP, ƒ/1.8 Camera tele : 12MP, /2.8',4352,6.7,'Super Retina XDR OLED','12MP, ƒ/2.2','iOS 15',6,128),(4,'A13 Bionic','Camera kép 12MP: - Camera góc rộng: ƒ/1.8 aperture - Camera siêu rộng: ƒ/2.4 aperture',3110,6.1,'IPS LCD','12 MP, ƒ/2.2 aperture','iOS 13 hoặc cao hơn',4,64),(5,'Apple A14 Bionic (5 nm)','12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6',3110,6.1,'Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone','12 MP, f/2.2, 23mm (wide), 1/3.6 SL 3D, (depth/biometrics sensor)','iOS 13 hoặc cao hơn',4,64),(6,'Apple A15 Bionic 6 nhân','Camera góc rộng: 12MP Camera góc siêu rộng: 12MP',3279,6.1,'OLED','12MP, ƒ/1.9','iOS 16',6,128),(7,'A13 Bionic','Camera kép 12MP: - Camera góc rộng: ƒ/1.8 aperture - Camera siêu rộng: ƒ/2.4 aperture',3110,6.1,'IPS LCD','12 MP, ƒ/2.2 aperture','iOS 13 hoặc cao hơn',4,128),(8,'Apple A16 Bionic 6 nhân','Camera chính: 48 MP, f/1.8, 24mm, OIS Camera góc siêu rộng: 12 MP, f/2.2, 120˚, 1.4µm Camera tele: 12 MP, f/2.8, PDAF, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR',3200,6.1,'Super Retina XDR OLED','12 MP, ƒ/2.2 aperture','iOS 16',6,128),(9,'Apple A14 Bionic (5 nm)','12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6',3110,6.1,'Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone','12 MP, f/2.2, 23mm (wide), 1/3.6 SL 3D, (depth/biometrics sensor)','iOS 13 hoặc cao hơn',4,128),(10,' Apple A15 Bionic (5 nm)','3 Camera: 12MP + 12MP + 12MP + TOF 3D LiDAR',3110,6.1,'Super Retina XDR OLED, 120Hz','12 MP, f/2.2','iOS 15',4,128),(11,' Apple A15 Bionic','Camera chính: 12MP, 26 mm, ƒ/1.5 Camera góc siêu rộng: 12MP, 13 mm, ƒ/2.4, 120°',4325,6.7,'Super Retina XDR OLED','12MP khẩu độ f/1.9, Autofocus','iOS 16',6,128),(12,' Apple A15 Bionic','Camera góc rộng: 12MP, ƒ/1.5 Camera góc siêu rộng: 12MP, ƒ/1.8 Camera tele : 12MP, /2.8',4352,6.7,'Super Retina XDR OLED','12MP khẩu độ f/1.9, Autofocus','iOS 15',6,256),(13,' Apple A15 Bionic','Camera góc rộng: 12MP, f/1.6 Camera góc siêu rộng: 12MP, ƒ/2.4',3240,6.1,'Super Retina XDR OLED','12MP, f/2.2','iOS 15',4,256),(14,' Apple A14 Bionic (5 nm)','12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.0, 52mm (telephoto), 1/3.4, 1.0µm, PDAF, OIS, 2x optical zoom12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6TOF 3D LiDAR scanner (depth)',3240,6.7,'Super Retina XDR OLED','12 MP, f/2.2, 23mm (wide), 1/3.6 SL 3D, (depth/biometrics sensor)','iOS 14.1 hoặc cao hơn',6,512),(15,' Apple A14 Bionic (5 nm)','12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.0, 52mm (telephoto), 1/3.4, 1.0µm, PDAF, OIS, 2x optical zoom 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6 TOF 3D LiDAR scanner (depth)',3240,6.1,'Super Retina XDR OLED','12 MP, f/2.2, 23mm (wide), 1/3.6 SL 3D, (depth/biometrics sensor','iOS 14.1 hoặc cao hơn',6,256),(16,'Apple A16 Bionic 6 nhân','Camera chính: 48 MP, f/1.8, 24mm, 1.22µm, PDAF, OIS Camera góc siêu rộng: 12 MP, f/2.2, 13mm, 120˚, 1.4µm, PDAF Camera tele: 12 MP, f/2.8, 77mm (telephoto), PDAF, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR',4323,6.7,'Super Retina XDR OLED','Camera selfie: 12 MP, f/1.9, 23mm, 1/3.6, PDAF','iOS 16',6,256),(17,' Apple A14 Bionic (5 nm)','12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS 12 MP, f/2.0, 52mm (telephoto), 1/3.4, 1.0µm, PDAF, OIS, 2x optical zoom 12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6 TOF 3D LiDAR scanner (depth)',3240,6.1,'Super Retina XDR OLED','12 MP, f/2.2, 23mm (wide), 1/3.6 SL 3D, (depth/biometrics sensor','iOS 14.1 hoặc cao hơn',6,128),(18,' Apple A16 Bionic 6 nhân','Camera chính: 48 MP, f/1.8, 24mm, OIS Camera góc siêu rộng: 12 MP, f/2.2, 120˚, 1.4µm Camera tele: 12 MP, f/2.8, PDAF, OIS, 3x optical zoom Cảm biến độ sâu TOF 3D LiDAR',3200,6.1,'Super Retina XDR OLED','Camera selfie: 12 MP, f/1.9, 23mm, PDAF','iOS 14.1 hoặc cao hơn',6,256),(19,'Apple A15','Camera góc rộng: 12MP, ƒ/1.5 Camera góc siêu rộng: 12MP, ƒ/1.8 Camera tele : 12MP, /2.8',4352,6.7,'Super Retina XDR OLED','12MP, ƒ/2.2','iOS 15',6,1024),(20,' Apple A15 Bionic (5 nm)','3 Camera: 12MP + 12MP + 12MP + TOF 3D LiDAR',3110,6.1,'Super Retina XDR OLED, 120Hz','12 MP, f/2.2','iOS 15',4,256),(21,'Qualcomm Snapdragon 8 Gen2','Camera góc rộng: 50 MP, f/1.9 Camera góc siêu rộng: 13 MP Camera Macro: 5 MP',6000,6.78,'AMOLED','32 MP','Android 13',16,512),(22,'Snapdragon 8+ Gen 1','Camera góc rộng: 50.0 MP, ƒ/1.9, 1.00 µm Camera góc siêu rộng: 13.0 MP, ƒ/2.2 Camera Macro : 5.0 MP',6000,6.78,'AMOLED','12 MP','Android 12',16,512),(23,'Snapdragon 8+ Gen 1','Camera chính góc rộng: 50 MP, f/1.9, PDAF Camera góc siêu rộng:13 MP, f/2.2 Camera macro: 5 MP',6000,6.78,'AMOLED','12 MP','Android 12',16,512),(24,'Snapdragon 8+ Gen 1','Camera góc rộng: 50 MP, f/1.9, 24mm, 1/1.56, 1.0µm, PDAF Camera góc cực rộng: 13 MP, f/2.2, 13mm Camera macro: 5 MP',6000,6.78,'AMOLED','Camera góc rộng: 12 MP, 28mm','Android 12',12,256),(25,'Snapdragon 8+ Gen 1','Camera chính góc rộng: 50 MP, f/1.9, PDAF Camera góc siêu rộng:13 MP, f/2.2 Camera macro: 5 MP',6000,6.78,'AMOLED','12 MP','Android 12',12,256),(26,'Unisoc T606','Camera chính: 50 MP, f/1.8 Camera macro: 2 MP Camera đo độ sâu: 2 MP',5050,6.52,'TFT LCD','8 MP, FF f/2.0, 1.12µm CMOS','Android 12',4,128),(27,'Unisoc SC9863A (28nm)','Camera góc rộng: 50MP, AF Camera macro: 2 MP',5050,6.5,'IPS LCD','8 MP','Android 13',4,128),(28,'Unisoc 9863A','Camera sau: 13MP + 2MP độ sâu trường ảnh + 2MP macro, đèn flash',5050,6.7,'TFT LCD','5 MP','Android 12',4,128),(29,'Unisoc SC9863A','13 MP + 2 MPh',5050,6.52,'IPS LCD','5 MP','Android 11',3,32),(30,'Unisoc T606','Chính 50 MP & Phụ 2 MP',5000,6.51,'TFT LCD','8 MP, f/2.0','Android 12',3,32),(31,'Unisoc T107 (22 nm)','0.3 MP',1450,2.4,'TFT LCD','not support','S30+',1,128),(32,'Unisoc T606','0,3 MP',1450,2.8,'TFT LCD','not support','S30 +',1,128),(33,'Unisoc UMS9117','not support',1150,2.4,'TFT LCD','not support','S30 +',1,128),(34,'Unisoc UMS9117','not support',1020,2.4,'TFT LCD','not support','S30 +',1,128),(35,'Unisoc UMS9117','not support',1020,2.4,'TFT LCD','not support','S30 +',1,128),(36,'Unisoc UMS9117','not support',1020,2.4,'TFT LCD','not support','S30 +',1,128),(37,'Qualcomm SM8450 Snapdragon 8 Gen 1','Camera góc rộng: 64 MP, f/1.8, PDAF Camera góc siêu rộng: 8 MP, f/2.0 Camera macro: 2 MP, f/2.4',4500,6.8,'AMOLED','8 MP, f/2.0','Android 12, Redmagic 5.0',16,256),(38,'Qualcomm® Snapdragon™ 888+ 5G','Camera góc rộng: 64 MP, f/1.79, 26mm, PDAF Camera góc siêu rộng: 8 MP, f/2.0, 120˚ Camera cận cảnh: 2 MP, f/2.4',5050,6.8,'AMOLED','8 MP, f/2.0','Android 11, Redmagic 4.0',16,256),(39,'Snapdragon 8 Gen 2 (4 nm)','Camera góc rộng: 50MP, Laser AF, OIS Camera tele: 32MP, PDAF, OIS, zoom quang 2x Camera góc siêu rộng: 48MP, AF',5000,6.7,'Super Fluid AMOLED','Camera góc rộng: 16 MP, ƒ/2.45 hỗ trợ EIS','OxygenOS trên nền tảng Android™ 13',16,256),(40,'Snapdragon 8 Gen 2 (4 nm)','Camera góc rộng: 50MP, Laser AF, OIS Camera tele: 32MP, PDAF, OIS, zoom quang 2x Camera góc siêu rộng: 48MP, AF',5000,6.7,'Super Fluid AMOLED','Camera góc rộng: 16 MP, ƒ/2.45 hỗ trợ EIS','OxygenOS trên nền tảng Android™ 13',8,128),(41,'Qualcomm SM8450 Snapdragon 8+ gen 1 (4 nm)','Camera góc rộng: 50 MP, OIS Camera góc siêu rộng: 8MP Camera macro: 2 MP, f/2.4',4800,6.7,'Fluid AMOLED','Camera góc rộng: 16 MP, f/2.4','Android 12, OxygenOS 12.1',8,128),(42,'Mediatek MT6983 Dimensity 9000 (4 nm))','Camera góc rộng: 50 MP, f/1.9, PDAF, OIS Camera góc siêu rộng: 8 MP, f/2.3, 120˚ Camera cận cảnh: 2 MP, f/2.4',5000,6.74,'AMOLED','16 MP, f/2.5','Android 13',16,128),(43,'Snapdragon 695 5G','Camera góc rộng:108 MP, f/1.7, PDAF Camera macro: 2 MP, f/2.4 Camera cảm biến độ sâu: 2 MP, f/2.4',5000,6.72,'IPS LCD','Camera góc rộng:16 MP, f/2.4','Android 13',8,256),(44,'Mediatek Dimensity 7050 5G','Camera góc rộng: 100 MP, f/1.75, 26mm, PDAF, OIS Camera chiều sâu: 2 MP, f/2.4, 22mm',5000,6.7,'AMOLED','Camera góc rộng: 16 MP, f/2.5, 25mm','Android 13',8,256),(45,'Chip Helio G99','Chính Prolight 108MP + Chân dung 2MP',5000,6.4,'Super AMOLED','16MP','realme UI 4.0 Trên nền tảng Android 13',8,128),(46,'MediaTek Dimensity 700 5G 8 nhân','Chính 48 MP & Phụ 2 MP, 2 MP',5000,6.5,'Super AMOLED','16 MP, f/2.5, 1/3.0, 1.0µm','Android 11, Realme UI 2.0',8,128),(47,'MediaTek Dimensity 920 5G','Camera chính: 50MP, f/1.8 Camera macro: 2MP, f/2.4 Camera góc rộng: 8MP, 119°, f/2.2',4500,6.4,'Super AMOLED','16MP, f/2.4','UI 3.0, Android 12',8,128),(48,'Helio G99 (6nm)','Camera chính AI: 50MP, f/1.8 Camera chân dung: 2MP, f/2.4',5000,6.4,'Super AMOLED','16MP, f/2.5','UI 3.0, Android 12',8,256),(49,'Helio G88','Camera chính 64 MP Camera phụ 2 MP',5000,6.72,'Super AMOLED','8 MP, f/2.0','UI 3.0, Android 12',8,256),(50,'Helio G88','Camera chính 64 MP Camera phụ 2 MP',5000,6.72,'Super AMOLED','8 MP, f/2.0','UI 3.0, Android 12',6,256),(51,'Unisoc T612','Chính 50 MP & Phụ 0.3 MP',5000,6.72,'IPS LCD','5 MP','Android 12',4,64),(52,'Unisoc T612','Chính 50 MP & Phụ 0.3 MP',5000,6.72,'IPS LCD','5 MP','Android 12',3,64),(53,'Unisoc SC9863A1','8MP',5000,6.5,'IPS LCD','5 MP','realme UI Go Edition trên nền tảng Android 12',3,64),(54,'Unisoc SC9863A1','8MP',5000,6.5,'IPS LCD','5 MP','realme UI Go Edition trên nền tảng Android 12',2,64),(55,'Snapdragon 8 Gen 2 (4 nm)','Siêu rộng: 12MP F2.2 (Dual Pixel AF) Chính: 200MP F1.7 OIS ±3° (Super Quad Pixel AF) Tele 1: 10MP F4.9 (10X, Dual Pixel AF) OIS, Tele 2: 10MP F2.4 (3X, Dual Pixel AF) OIS Thu phóng chuẩn không gian 100X',5000,6.8,'Dynamic AMOLED 2X','12MP F2.2 (Dual Pixel AF)','Android 13',8,256),(56,'Snapdragon 8 Gen 2 for Galaxy (4nm) 8 nhân)','Camera siêu rộng: 12MP F2.2, 123°, 1.12μm Camera góc rộng: 50MP, F1.8, Dual Pixel AF, OIS, 2.0μm Camera Tele: 10 MP, F2.4, PDAF, OIS, 1.0μm, zoom 3X, zoom kỹ thuật số 30X',4400,7.6,'Dynamic AMOLED 2X','Camera bên ngoài:10 MP, f/2.2 Camera bên trong: 4 MP, F1.8','Android 13',12,512),(57,'Snapdragon 8 Gen 2 for Galaxy (4nm) 8 nhân)','Camera siêu rộng: 12MP, F2.2, 123°, 1.12 μm, FF Camera chính: 12MP, F1.8, Dual Pixel, 1.8μm, OIS',3700,6.7,'Dynamic AMOLED 2X','10MP, F2.4, 1.22μm','Android 13',8,512),(58,'Snapdragon 8+ Gen 1 8 nhân','Camera góc rộng: 12 MP, f/1.8, PDAF, OIS Camera góc siêu rộng: 12 MP, f/2.2, 123˚',3700,6.7,'Dynamic AMOLED 2X','10 MP, f/2.4','Android 13',8,128),(59,'Snapdragon 8 Gen 1 (4 nm)','108 MP, f/1.8 góc rộng 10 MP, f/4.9 10 MP, f/2.4 12 MP, f/2.2 góc siêu rộng',5000,6.8,'Dynamic AMOLED 2X','40 MP, f/2.2','Android 12, One UI 4.1',12,256),(60,'Exynos 990 (7 nm+)','Camera chính: 12 MP, f/1.8, 26mm, 1/1.76, 1.8µm, Dual Pixel PDAF, OIS Camera tele: 8 MP, f/2.0, 73mm, 1/4.5, 1.0µm, PDAF, OIS, zoom quang 3x Camera góc siêu rộng: 12 MP, f/2.2, 123˚, 13mm, 1/3.0, 1.12µm',4500,6.5,'Dynamic AMOLED 2X','32 MP, f/2.0, 26mm (wide), 1/2.74, 0.8µm, AF','Android 10, One UI 2.5',8,256),(61,'Snapdragon 8 Gen 1 (4 nm)','108 MP, f/1.8 góc rộng 10 MP, f/4.9 10 MP, f/2.4 12 MP, f/2.2 góc siêu rộng',5000,6.8,'Dynamic AMOLED 2X','40 MP, f/2.2','Android 12, One UI 4.1',8,128),(62,'Exynos 1330 (5nm)','Camera góc rộng: 50MP, f/1.8, PDAF Camera macro: 2 MP, f/2.4 Camera đo độ sâu: 2 MP, f/2.4',6000,6.6,'PLS LCD','13 MP, f/2.0','Android 12, One UI 4.1',4,128),(63,'Dimensity 1080 (5 nm)','Camera góc rộng: 48MP, f/1.8, 26mm , 1/2.0, 0.8µm, PDAF, OIS Camera góc siêu rộng: 8MP, f/2.2, 123, 1/4.0, 1.12µm Camera macro: 5MP, f/2.4',5000,6.6,'Super AMOLED','Camera góc rộng: 13MP, f/2.2, 1/3.1, 1.12µm','Android 12, One UI 4.1',8,128),(64,'Snapdragon 8 Gen 2 (4 nm)','Siêu rộng: 12MP F2.2 (Dual Pixel AF) Chính: 200MP F1.7 OIS ±3° (Super Quad Pixel AF) Tele 1: 10MP F4.9 (10X, Dual Pixel AF) OIS, Tele 2: 10MP F2.4 (3X, Dual Pixel AF) OIS Thu phóng chuẩn không gian 100X',5000,6.8,'Dynamic AMOLED 2X','12MP F2.2 (Dual Pixel AF)','Android 13',12,512),(65,'Exynos 2100 (5nm)','Camera góc rộng: 12 MP, f/1.8, PDAF, OIS Camera tele: 8 MP, f/2.4, 3x optical zoom Camera góc siêu rộng: 12 MP, f/2.2',4500,6.4,'Dynamic AMOLED 2X','32 MP, f/2.2','Android 12',8,128),(66,'Exynos 1380 (5 nm)','Camera góc rộng: 50 MP, f/1.8, PDAF, OIS Camera góc siêu rộng: 12MP, f/2.2, 123˚, 1.12µm Camera macro: 5MP, f/2.4',5000,6.4,'Super AMOLED','Camera góc rộng: 32 MP, f/2.2, 26mm, 1/2.8, 0.8µm','Android 12',8,128),(67,'Snapdragon 8 Plus Gen 1','Camera chính: 50MP Camera góc siêu rộng: 12MP Camera tele: 10MP (3x zoom)',4400,7.6,'AMOLED','10MP (bên ngoài) + 4MP (dưới màn hình)','Android 12, One UI 4.1.1',12,256),(68,'Exynos 1280 8 nhân','Camera chính góc rộng: 64 MP, f/1.8, PDAF, OIS Camera góc siêu rộng: 12 MP, f/2.2, 123˚ Camera macro: 5 MP, f/2.4 Cảm biến độ sâu: 5 MP, f/2.4',5000,6.5,'Super AMOLED','10MP (bên ngoài) + 4MP (dưới màn hình)','Android 12',82,128),(69,'Snapdragon 8 Gen 2','Chính 50 MP & Phụ 12 MP, 10 MP',3900,6.1,'Dynamic AMOLED 2X','12MP, f/2.2','Android 12',8,256),(70,'MediaTek Dimensity 700','Camera góc rộng: 50MP, f/1.8, 26mm, PDAF Camera macro: 2MP, f/2.4 Camera đo độ sâu: 2MP, f/2.4',5000,6.6,'IPS LCD','13MP','Android 13',4,128),(71,'Snapdragon 8 Gen 2','Camera chính góc rộng: 50 MP, f/1.8, Dual Pixel PDAF, OIS Camera tele: 10 MP, f/2, 3x optical zoom Camera góc siêu rộng:12 MP, f/2.2',4700,6.6,'Dynamic AMOLED 2X','12MP, f/2.2','Android 13',8,256),(72,'Snapdragon 695 5G (6 nm)','Camera góc rộng: 50 MP, f/1.8, PDAF, OIS Camera góc siêu rộng: 5 MP, f/2.2 Camera macro: 2 MP, f/2.4 Camera góc sâu: 2 MP, f/2.4',5000,6.6,'IPS LCD','Camera góc rộng: 8 MP, f/2.2','Android 12, One UI 4.1',4,128),(73,'Snapdragon 8 Gen 2 for Galaxy (4nm) 8 nhân)','Camera siêu rộng: 12MP, F2.2, 123°, 1.12 μm, FF Camera chính: 12MP, F1.8, Dual Pixel, 1.8μm, OIS',3700,6.7,'Dynamic AMOLED 2X','10MP, F2.4, 1.22μm','Android 13',8,256),(74,'Exynos 850 8 nhân','Chính 50 MP & Phụ 5 MP, 2 MP',5000,6.6,'IPS LCD','13MP','Android 13',4,128),(75,'Qualcomm Snapdragon 685','Camera chính: 50MP, f/1.8 Camera góc rộng: 8MP, f/2.2, 120° Camera Macro: 2MP, f/2.4',5000,6.67,'AMOLED','13MP, f/2.45','Android 12',8,128),(76,'Qualcomm Snapdragon 685','Camera chính: 50MP, f/1.8 Camera góc rộng: 8MP, f/2.2, 120° Camera Macro: 2MP, f/2.4',5000,6.67,'AMOLED','13MP, f/2.45','Android 12',4,128),(77,'MediaTek Dimensity 1080 8 nhân','Camera góc rộng: 50MP, f/1.9, PDAF, OIS Camera góc siêu rộng: 8 MP, f/1.9, 119˚ Camera macro: 2 MP, f/2.4',5000,6.67,'AMOLED','Camera góc rộng: 16 MP','Android 12',8,256),(78,'MediaTek Dimensity 8100 Ultra','108MP + 8MP + 2MP',5000,6.67,'OLED','20MP','Android 12, MIUI 13',8,256),(79,'Qualcomm SM7150 Snapdragon 732G (8 nm)','Camera chính: 108MP, f/1.9, 1/1.52 Camera góc siêu rộng: 8MP, f/2.2, FOV 120° Camera cận cảnh: 2MP, f/2.4 Camera chiều sâu: 2MP, f/2.4',5000,6.67,'AMOLED','16MP, f/2.45','Android 12, MIUI 13',8,256),(80,'MediaTek Dimensity 1080 8 nhân','Camera góc rộng: 50MP, f/1.9, PDAF, OIS Camera góc siêu rộng: 8 MP, f/1.9, 119˚ Camera macro: 2 MP, f/2.4',5000,6.67,'AMOLED','Camera góc rộng: 16 MP','Android 12',8,256),(81,'MediaTek Helio G96','Camera chính: 108MP, f/1.89 Camera góc siêu rộng: 8MP, f/2.2, FOV 118° Camera cận cảnh: 2MP, f/2.44',5000,6.43,'AMOLED','16MP, f/2.45','Android 13',8,256),(82,'Chip Snapdragon® 8 thế hệ thứ 2','Camera chính: 50MP, f/1.8, HyperOIS Camera tele của Leica: 10MP, f/2.0, OIS Camera góc siêu rộng Leica: 12MP, f/2.2,',4500,6.36,'AMOLED','Camera selfie trong màn hình 32MP, f/2.0','Android 13',8,256),(83,'Mediatek MT6769Z Helio G85 (12nm)','Camera góc rộng: 50MP, PDAF Camera đo độ sâu: 0.08MP',5000,6.36,'AMOLED','5 MP','Android 13',4,64),(84,'Chip Snapdragon 7 Gen 1 (4 nm)','Camera chính: 50 MP, f/1.8, PDAF Camera góc siêu rộng: 8 MP, f/2.2, 119˚ Camera macro: 2 MP, f/2.4',4500,6.55,'AMOLED','Camera góc siêu rộng: 32 MP, f/2.4 Camera cảm chân dung: 8 MP','Android 13',8,256),(85,'Snapdragon 778G 5G (6 nm)','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',5000,6.67,'AMOLED','Camera góc rộng: 16 MP, f/2.4','Android 13',6,128),(86,'Snapdragon 778G 5G (6 nm)','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',5000,6.67,'AMOLED','Camera góc rộng: 16 MP, f/2.4','Android 13',8,128),(87,'Snapdragon 680 8 nhân','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',5000,6.43,'AMOLED','13 MP, f/2.5','Android 13',4,128),(88,'MediaTek Dimensity 920 5G (6 nm)','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',4500,6.67,'AMOLED','16 MP','Android 13',8,256),(89,'Snapdragon™ 778G','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',4250,6.55,'AMOLED','20MP, f/2.24','Android 13',8,128),(90,'Snapdragon 780G','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',4250,6.55,'AMOLED','20MP, f/2.24','Android 11',8,128),(91,'Snapdragon 778G 5G (6 nm)','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',5000,6.67,'AMOLED','Camera góc rộng: 16 MP, f/2.4','MIUI 14 cho POCO',6,128),(92,'MediaTek Helio A22','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',5000,6.52,'AMOLED','5MP, f/2.2','Android 12 (Phiên bản Go)',6,128),(93,'Snapdragon® 695','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',5000,6.67,'AMOLED','16MP, f/2.4','MIUI 13, Android 11',6,128),(94,'Mediatek Helio G95 (12 nm)','Camera góc rộng: 108MP, f/1.9, PDAF Camera góc siêu rộng: 8MP, f/2.2, 118˚ Camera Macro: 2MP, f/2.4',5000,6.43,'AMOLED','16MP, f/2.4','MIUI 13, Android 11',6,128),(95,'MediaTek Dimensity 7050','Camera góc rộng: 64MP; f/1.7, PDAF Chụp Telephoto chân dung: 32 MP, f/2.0 Camera góc siêu rộng: 8 MP, f/2.2, Zoom quang lai 2X× và Xoom kỹ thuật số 20X',5000,6.7,'AMOLED','Camera góc rộng: 32 MP, f/2.4','Android 13',8,256),(96,'Snapdragon 695 5G 8 nhân','Chính 108 MP & Phụ 2 MP, 2 MP',4800,6.7,'AMOLED','32 MP','Coloros 13',8,128),(97,'MediaTek 9000+ (4nm)','Camera góc rộng: 50MP, f/1.8, 23mm, PDAF Camera góc siêu rộng 8MP, f/2.2, 112˚',4300,6.8,'AMOLED','Camera góc rộng: 32MP, f/2.4, 22mm, AF','Android 13',8,256),(98,'Qualcomm Snapdragon 680, tối đa 2.4GHz','50 MP (chính) + 2 MP (Xóa phông)',5000,6.4,'AMOLED','8 MP','ColorOS 13.1.1, nền tảng Android 13',8,256),(99,'Helio G85, tối đa 2.0GHz','50 MP,F/1.8 (chính) + 2 MP, F/2.4 (Xóa phông)',5000,6.72,'IPS LCD','8 MP, F/2.0','ColorOS 13.1, nền tảng Android 13',6,128),(100,'MediaTek Dimensity 1300 8 nhân','Camera chính: 50 MP, f/1.8 Camera phụ: 8 MP f/2.4 Camera Marco: 2 MP f/2.2',4500,6.4,'AMOLED','32 MP, f/2.4','Android 12',8,256),(101,'Qualcomm Snapdragon 680','Camera chính: 64MP, f/1.7 Camera Marco: 2MP, f/3.3 Bokeh: 2MP, f/2.4',4500,6.4,'AMOLED','32 MP, f/2.4','Android 12',8,256),(102,'MediaTek Helio G35','Camera gốc rộng: 13 MP, f/2.2, AF Camera cảm biến độ sâu: 2 MP, f/2.4',5000,6.56,'IPS LCD','Camera gốc rộng: 8 MP, f/2.0','ColorOS 12.1, nền tảng Android 12',4,64),(103,'MediaTek Helio G35','Camera góc rộng: 50 MP, f/2.2, 25mm 1/3.06, 1.12µm, PDAF  Camera cận cảnh: 2 MP, f/2.4 Camera xóa phông: 2 MP, f/2.4',5000,6.5,'IPS LCD','16 MP, f/2.0','Android 11, ColorOS 11.1',4,64),(104,'Snapdragon 695 5G 8 nhân','Camera chính: 64 MP, f/1.7; FOV 79°; ống kính 6P; AF Đơn sắc:2 MP, f/2.4; FOV 89°; ống kính 3P; FF Cận cảnh:2 MP, f/2.4; FOV 89°; ống kính 3P; FF',4500,6.43,'AMOLED','16MP, f/2.4; FOV 79°; ống kính: 5P','Android 11 - ColorOS 12',8,128),(105,'Helio G99, tối đa 2.2GHz','100MP (Chính) + 2MP (Kính hiển vi) + 2MP (Mono)',5000,6.4,'AMOLED','32MP','ColorOS 13, nền tảng Android 13',8,256),(106,'Snapdragon 680 4G','Camera góc rộng: 50 MP, f/1.8, PDAF Camera chân dung: 2 MP, f/2.4',5000,6.56,'IPS LCD','8 MP, f/2.0','Android 12',8,128),(107,'MediaTek Helio G35','Camera gốc rộng: 13 MP, f/2.2, AF Camera cảm biến độ sâu: 2 MP, f/2.4',5000,6.56,'IPS LCD','Camera gốc rộng: 8 MP, f/2.0','ColorOS 12.1, nền tảng Android 12',4,128),(108,'MediaTek Dimensity 900','Camera chính: 64 MP, f/1.7, PDAF Camera góc siêu rộng: 8 MP, f/2.25, 120˚ Camera macro: 2 MP, f/2.4',4500,6.43,'AMOLED','32MP f/2.4','Android 11, ColorOS 12',8,256),(109,'MediaTek Dimensity 1200 Max 8 nhân','Camera góc rộng: 50MP (IMX766) Camera góc siêu rộng: 8MP (IMX355) Camera macro: 2MP (OmniVision OV02B10)',4500,6.5,'AMOLED','32 MP, f/2.4','Android 11, ColorOS 12',12,256),(110,'MediaTek Helio G35 8 nhân','8 MP, f/2.0, FOV 78°',5000,6.56,'IPS LCD','5MP (f/2.2); FOV 76.8°','Android 12',3,64),(111,'MediaTek Helio G35 8 nhân','Camera Chính: 50MP, f/1.8, FOV 77°, ống kính 5P, AF 0.3 MP,f/2.8, FOV 60°',5000,6.56,'IPS LCD','5 MP, f/2.2','Android 12',4,64),(112,'MediaTek Helio G35 8 nhân','Camera chính: 13MP: f/2.2; FOV 80°; ống kính 5P; có hỗ trợ AF',4230,6.52,'IPS LCD','5MP : f/2.4, FOV: 76°, ống kính 3P','Android 11',3,32),(113,'Snapdragon 8+ Gen 1 (4 nm)','Camera góc rộng: 50 MP, f/1.8, PDAF, OIS Camera tele: 32 MP, f/2.0, 2x optical zoom, PDAF Camera góc siêu rộng: 48 MP, f/2.2,115˚',4520,7,'AMOLED','32 MP, f/2.4< Camera ở màn phụ: 32 MP, f/2.4','Android 13, ColorOS 13',12,256),(114,'Snapdragon 898','50 MP + 13 MP + 50 MP + 3 MP',4500,6.7,'AMOLED','32 MP','Android 12',12,256),(115,'MediaTek Dimensity 1300','Camera chính 64MP OIS + Góc Rộng 8MP + Siêu Cận 2MP',4830,6.56,'AMOLED','32MP AF, f/2.45','Android 12',8,128),(116,'Mediatek MT8781 Helio G99 (6nm)','Camera góc rộng: 64MP, f/1.8, PDAF, OIS Camera macro: 2MP, f/2.4 Camera đo độ sâu: 2MP, f/2.4',4600,6.62,'AMOLED','Trước 32MP','Funtouch OS 13',8,256),(117,'MediaTek Dimensity 900 5G','Chính 64 MP & Phụ 8 MP, 2 MP',4500,6.44,'AMOLED','50 MP','Android 12',8,128),(118,'MediaTek Helio G99','Camera chính: 64 MP Camera góc siêu rộng: 2 MP Camera Macro: 2 MP',4500,6.44,'AMOLED','32 MP','Android 12',8,128),(119,'Snapdragon 680 8 nhân','Camera chính: 50 MP, f/1.8 Camera phụ: 2 MP, f/2.4',5000,6.64,'IPS LCD','16 MP, f/2.45','Android 13',8,128),(120,'Qualcomm Snapdragon 680 6nm','Camera chính: 50MP, f/1.8 Camera Xoá Phôn: 2MP, f/2.4 Camera Siêu Cận: 2MP, f/2.4',5000,6.58,'IPS LCD','16MP, f/2.0','Android 12, Funtouch OS 12',8,128),(121,'MediaTek Helio G96','Camera chính: 64MP AF Camera góc siêu rộng: 8MP, f/2.2 Camera siêu cận: 2MP, f/2.4',4050,6.44,'AMOLED','50MP AF, f/2.0','Android 11',8,128),(122,'Qualcomm Snapdragon 680','Sau 50MP, f/1.8 + 2MP, f/2.4',5000,6.55,'IPS LCD','8MP, f/2.0','Funtouch OS 12',8,128),(123,'Qualcomm Snapdragon 680','Sau 50MP, f/1.8 + 2MP, f/2.4',5000,6.55,'IPS LCD','8MP, f/2.0','Funtouch OS 12',4,128),(124,'MediaTek Helio P35 8 nhân','Cảm biến chính 13 MP, khẩu độ f/2.2 Ống kính macro kiêm độ sâu 2 MP, khẩu độ f/2.4, đèn flash LED',5000,6.51,'IPS LCD','5 MP','Android 12 với giao diện FunTouch OS 12',4,128),(125,'Snapdragon 680','Camera chính: 50MP, f/1.8 Camera macro: 2 MP, f/2.4 Cảm biến độ sâu 2MP, f/2.4',5000,6.58,'IPS LCD','8 MP, f/2.0','Android 12, FunTouchOS 12',4,64),(126,'MediaTek Helio P35 8 nhân','8 MP, f/2.0',5000,6.51,'IPS LCD','5MP, f/2.2','Android 12',3,64),(127,'MediaTek Helio P35','8 MP, f/2.0',5000,6.51,'IPS LCD','5MP, f/2.2','Android 13',4,64),(128,'MediaTek Helio P35 8 nhân','8 MP, f/2.0',5000,6.51,'IPS LCD','5MP, f/2.2','Android 12',3,32),(129,'MediaTek Helio P35 8 nhân','8 MP',5000,6.51,'IPS LCD','5MP','Android 12',3,32),(130,'MediaTek Helio P22','8 MP',5000,6.51,'IPS LCD','5MP','Funtouch OS 12 (Android 12 Go edition)',2,32);
/*!40000 ALTER TABLE `product_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouse`
--

DROP TABLE IF EXISTS `warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouse` (
  `product_id` bigint NOT NULL,
  `amount` bigint DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouse`
--

LOCK TABLES `warehouse` WRITE;
/*!40000 ALTER TABLE `warehouse` DISABLE KEYS */;
INSERT INTO `warehouse` VALUES (1,50,'AVAILABLE'),(2,50,'AVAILABLE'),(3,50,'AVAILABLE'),(4,50,'AVAILABLE'),(5,50,'AVAILABLE'),(6,50,'AVAILABLE'),(7,50,'AVAILABLE'),(8,50,'AVAILABLE'),(9,50,'AVAILABLE'),(10,50,'AVAILABLE'),(11,50,'AVAILABLE'),(12,50,'AVAILABLE'),(13,50,'AVAILABLE'),(14,50,'AVAILABLE'),(15,50,'AVAILABLE'),(16,50,'AVAILABLE'),(17,50,'AVAILABLE'),(18,50,'AVAILABLE'),(19,50,'AVAILABLE'),(20,50,'AVAILABLE'),(21,50,'AVAILABLE'),(22,50,'AVAILABLE'),(23,50,'AVAILABLE'),(24,50,'AVAILABLE'),(25,50,'AVAILABLE'),(26,50,'AVAILABLE'),(27,50,'AVAILABLE'),(28,50,'AVAILABLE'),(29,50,'AVAILABLE'),(30,50,'AVAILABLE'),(31,50,'AVAILABLE'),(32,50,'AVAILABLE'),(33,50,'AVAILABLE'),(34,50,'AVAILABLE'),(35,50,'AVAILABLE'),(36,50,'AVAILABLE'),(37,50,'AVAILABLE'),(38,50,'AVAILABLE'),(39,50,'AVAILABLE'),(40,50,'AVAILABLE'),(41,50,'AVAILABLE'),(42,50,'AVAILABLE'),(43,50,'AVAILABLE'),(44,50,'AVAILABLE'),(45,50,'AVAILABLE'),(46,50,'AVAILABLE'),(47,50,'AVAILABLE'),(48,50,'AVAILABLE'),(49,50,'AVAILABLE'),(50,50,'AVAILABLE'),(51,50,'AVAILABLE'),(52,50,'AVAILABLE'),(53,50,'AVAILABLE'),(54,50,'AVAILABLE'),(55,50,'AVAILABLE'),(56,50,'AVAILABLE'),(57,50,'AVAILABLE'),(58,50,'AVAILABLE'),(59,50,'AVAILABLE'),(60,50,'AVAILABLE'),(61,50,'AVAILABLE'),(62,50,'AVAILABLE'),(63,50,'AVAILABLE'),(64,50,'AVAILABLE'),(65,50,'AVAILABLE'),(66,50,'AVAILABLE'),(67,50,'AVAILABLE'),(68,50,'AVAILABLE'),(69,50,'AVAILABLE'),(70,50,'AVAILABLE'),(71,50,'AVAILABLE'),(72,50,'AVAILABLE'),(73,50,'AVAILABLE'),(74,50,'AVAILABLE'),(75,50,'AVAILABLE'),(76,50,'AVAILABLE'),(77,50,'AVAILABLE'),(78,50,'AVAILABLE'),(79,50,'AVAILABLE'),(80,50,'AVAILABLE'),(81,50,'AVAILABLE'),(82,50,'AVAILABLE'),(83,50,'AVAILABLE'),(84,50,'AVAILABLE'),(85,50,'AVAILABLE'),(86,50,'AVAILABLE'),(87,50,'AVAILABLE'),(88,50,'AVAILABLE'),(89,50,'AVAILABLE'),(90,50,'AVAILABLE'),(91,50,'AVAILABLE'),(92,50,'AVAILABLE'),(93,50,'AVAILABLE'),(94,50,'AVAILABLE'),(95,50,'AVAILABLE'),(96,50,'AVAILABLE'),(97,50,'AVAILABLE'),(98,50,'AVAILABLE'),(99,50,'AVAILABLE'),(100,50,'AVAILABLE'),(101,50,'AVAILABLE'),(102,50,'AVAILABLE'),(103,50,'AVAILABLE'),(104,50,'AVAILABLE'),(105,50,'AVAILABLE'),(106,50,'AVAILABLE'),(107,50,'AVAILABLE'),(108,50,'AVAILABLE'),(109,50,'AVAILABLE'),(110,50,'AVAILABLE'),(111,50,'AVAILABLE'),(112,50,'AVAILABLE'),(113,50,'AVAILABLE'),(114,50,'AVAILABLE'),(115,50,'AVAILABLE'),(116,50,'AVAILABLE'),(117,50,'AVAILABLE'),(118,50,'AVAILABLE'),(119,50,'AVAILABLE'),(120,50,'AVAILABLE'),(121,50,'AVAILABLE'),(122,50,'AVAILABLE'),(123,50,'AVAILABLE'),(124,50,'AVAILABLE'),(125,50,'AVAILABLE'),(126,50,'AVAILABLE'),(127,50,'AVAILABLE'),(128,50,'AVAILABLE'),(129,50,'AVAILABLE'),(130,50,'AVAILABLE');
/*!40000 ALTER TABLE `warehouse` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-04 22:08:17
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: userdb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'admin123@gmail.com','admin','$2a$10$8FXYuQJDXXT0qe6h0DfpZePVxgQFrqjY5d7QWOt0aXhgwqvFaTp1m',NULL),(2,'admin123@gmail.com','admin1','$2a$10$GDWA.EqfTr2VB7jiIb/dkudYyXMpm0w0jjJp.wCvgsIm5ug7ukhpa',NULL),(3,'nampcv01@gmail.com','test','$2a$10$ZE8z0EHNaClx932qJL/ZHOQMt9oZxsIlkdNgXbwAc/K.d4kpt91Ba',NULL),(4,'admin123@gmail.com','admin2','$2a$10$DEiLs06YWMHjTql0KP3gMuAmTRB5S229XZFIKLdOA3vdxERf/zXp2',NULL),(5,'loanpcz01@gmail.com','admin001','$2a$10$bp3p/WdgHekEoqHqIfDWrOMXEwHBrncyFxsDV.9xkITNkTZr92ynS','CUSTOMER');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-04 22:08:17
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: paymentdb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `balance` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'HCM',100170000010,'SHOP','0987654321',1),(2,'HN',9839999990,'CUSTOMER1','0987654321',2),(3,'HCM',100000000000,'CUSTOMER4','0987654321',4);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` bigint DEFAULT NULL,
  `date_time` datetime(6) DEFAULT NULL,
  `from_id` bigint NOT NULL,
  `to_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fromID_account_idx` (`from_id`,`to_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,100000000000,'2023-07-09 09:34:27.424000',2,1),(2,10,'2023-07-09 20:04:51.863000',2,1),(3,96000000,'2023-07-09 20:08:25.363000',2,1),(4,64000000,'2023-07-10 19:51:14.912000',2,1),(5,0,'2023-08-16 08:11:47.157000',1,1);
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-04 22:08:18
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: orderdb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (10);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_table`
--

DROP TABLE IF EXISTS `order_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_table` (
  `id` bigint NOT NULL,
  `date_time` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_table`
--

LOCK TABLES `order_table` WRITE;
/*!40000 ALTER TABLE `order_table` DISABLE KEYS */;
INSERT INTO `order_table` VALUES (1,'2023-07-09 19:41:30.775000','COMPLETE',2),(4,'2023-07-10 19:47:52.064000','COMPLETE',2),(7,'2023-08-16 08:06:26.661000','COMPLETE',1);
/*!40000 ALTER TABLE `order_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_order`
--

DROP TABLE IF EXISTS `product_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_order` (
  `id` bigint NOT NULL,
  `order_id` bigint NOT NULL,
  `price` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `quantity` bigint NOT NULL,
  `image` varchar(255) NOT NULL,
  `productname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_order`
--

LOCK TABLES `product_order` WRITE;
/*!40000 ALTER TABLE `product_order` DISABLE KEYS */;
INSERT INTO `product_order` VALUES (3,1,32000000,3,3,'',''),(6,4,32000000,3,1,'test','Iphone 14 Pro'),(9,7,32000000,3,2,'test','Iphone 14 Pro');
/*!40000 ALTER TABLE `product_order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-04 22:08:18
