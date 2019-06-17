-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 17 juin 2019 à 22:04
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `matcha`
--

-- --------------------------------------------------------

--
-- Structure de la table `fakeuser`
--

DROP TABLE IF EXISTS `fakeuser`;
CREATE TABLE IF NOT EXISTS `fakeuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fakeUser` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `fakeuser`
--

INSERT INTO `fakeuser` (`id`, `fakeUser`) VALUES
(32, 'metentis'),
(33, 'tyr'),
(34, 'test'),
(35, 'bouboule'),
(36, 'HH');

-- --------------------------------------------------------

--
-- Structure de la table `inlineuser`
--

DROP TABLE IF EXISTS `inlineuser`;
CREATE TABLE IF NOT EXISTS `inlineuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `inline` int(11) NOT NULL DEFAULT '0',
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `inlineuser`
--

INSERT INTO `inlineuser` (`id`, `user`, `inline`, `date`) VALUES
(1, 'metentis', 1, '2019-06-17 19:52:21'),
(2, 'jai', 0, '2019-06-12 14:20:28'),
(3, 'HH', 0, '2019-06-09 00:13:25'),
(4, 'tyr', 0, '2019-06-09 00:12:53'),
(5, 'bouboule', 0, '2019-06-12 14:10:16'),
(6, 'le roi des math', 0, '2019-06-09 00:13:39'),
(7, 'test5', 0, '2019-06-14 14:02:48'),
(8, 'test6', 0, '2019-06-14 14:00:55'),
(9, 'test9', 0, '2019-06-14 13:59:29'),
(10, 'test11', 0, '2019-06-13 11:09:52'),
(11, 'test12', 0, '2019-06-14 13:55:38'),
(12, 'test15', 0, '2019-06-13 11:16:12'),
(13, 'test16', 0, '2019-06-13 11:18:25'),
(14, 'test17', 0, '2019-06-14 14:05:00'),
(15, 'test18', 0, '2019-06-14 14:06:45'),
(16, 'test19', 0, '2019-06-14 14:09:54'),
(17, 'test20', 0, '2019-06-14 14:18:48'),
(18, 'test21', 0, '2019-06-14 14:19:29'),
(19, 'test25', 0, '2019-06-17 18:32:06'),
(20, 'test26', 0, '2019-06-17 18:35:21'),
(21, 'test27', 0, '2019-06-17 19:54:17'),
(22, 'test28', 0, '2019-06-17 19:54:55'),
(23, 'test29', 0, '2019-06-17 20:02:58'),
(24, 'test30', 1, '2019-06-17 21:20:11'),
(25, 'x', 0, '2019-06-17 21:21:06');

-- --------------------------------------------------------

--
-- Structure de la table `likeuser`
--

DROP TABLE IF EXISTS `likeuser`;
CREATE TABLE IF NOT EXISTS `likeuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `profilName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `likeUser` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `likeuser`
--

INSERT INTO `likeuser` (`id`, `userName`, `profilName`, `likeUser`) VALUES
(22, 'HH', 'metentis', 1),
(23, 'HH', 'jai', 1),
(24, 'HH', 'bouboule', -1),
(25, 'HH', 'tyr', -1),
(26, 'HH', 'le roi des math', 1),
(27, 'bouboule', 'HH', 1),
(28, 'bouboule', 'le roi des math', 1),
(29, 'bouboule', 'tyr', 1),
(30, 'bouboule', 'jai', -1),
(31, 'bouboule', 'metentis', 1),
(33, 'metentis', 'bouboule', -1),
(34, 'metentis', 'HH', -1),
(35, 'metentis', 'jai', 1),
(36, 'metentis', 'tyr', 1),
(37, 'metentis', 'le roi des math', 1),
(38, 'tyr', 'metentis', 1),
(39, 'tyr', 'jai', 1),
(40, 'tyr', 'bouboule', 1),
(41, 'tyr', 'le roi des math', 1),
(42, 'jai', 'metentis', 1),
(43, 'jai', 'bouboule', 1),
(44, 'jai', 'tyr', 1),
(45, 'jai', 'le roi des math', 1),
(46, 'jai', 'HH', 1),
(47, 'test3', 'jai', 1),
(48, 'bat test', 'metentis', 1),
(49, 'jai', 'bat test', -1),
(50, 'metentis', 'test', -1),
(51, 'metentis', 'test2', 1),
(52, 'metentis', 'test3', 1),
(53, 'metentis', 'test4', 1),
(54, 'test4', 'metentis', 1),
(55, 'metentis', 'x', 1),
(56, 'x', 'metentis', 1),
(57, 'test30', 'metentis', 1);

-- --------------------------------------------------------

--
-- Structure de la table `listblockprofil`
--

DROP TABLE IF EXISTS `listblockprofil`;
CREATE TABLE IF NOT EXISTS `listblockprofil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `blockProfil` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `listblockprofil`
--

INSERT INTO `listblockprofil` (`id`, `user`, `blockProfil`) VALUES
(70, 'x', 'bouboule'),
(71, 'x', 'tyr'),
(72, 'x', 'HH'),
(73, 'metentis', 'test30');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fromUser` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `toUser` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `message` text,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `fromUser`, `toUser`, `message`, `date`) VALUES
(65, 'metentis', 'jai', 'coucou', '2019-06-12 13:26:48'),
(66, 'metentis', 'jai', 'test', '2019-06-12 13:26:51'),
(67, 'metentis', 'jai', 'test\"\'', '2019-06-12 13:27:09'),
(68, 'metentis', 'x', 'coucou', '2019-06-17 21:29:44'),
(69, 'x', 'metentis', 'salut', '2019-06-17 21:30:20'),
(70, 'metentis', 'x', 'salut', '2019-06-17 21:32:04');

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `notificationUser` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `notificationType` text NOT NULL,
  `notificationRead` int(11) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=468 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `notifications`
--

INSERT INTO `notifications` (`id`, `notificationUser`, `notificationType`, `notificationRead`, `date`) VALUES
(339, 'HH', 'metentis visit you\'re profil', 0, '2019-06-12 10:42:12'),
(340, 'test4', 'metentis visit you\'re profil', 0, '2019-06-12 10:42:38'),
(341, 'test', 'metentis visit you\'re profil', 1, '2019-06-12 10:44:12'),
(342, 'test', 'metentis send you a like', 1, '2019-06-12 10:44:16'),
(343, 'test', 'metentis send you a like and you\'re like him before so this is a match', 1, '2019-06-12 10:44:16'),
(344, 'test2', 'metentis visit you\'re profil', 0, '2019-06-12 10:48:30'),
(345, 'test2', 'metentis send you a like', 0, '2019-06-12 10:48:32'),
(346, 'test2', 'metentis send you a like and you\'re like him before so this is a match', 0, '2019-06-12 10:48:32'),
(347, 'test', 'metentis visit you\'re profil', 0, '2019-06-12 10:53:16'),
(348, 'test', 'metentis send you a like', 0, '2019-06-12 10:53:21'),
(349, 'test', 'metentis send you a unlike', 0, '2019-06-12 10:53:29'),
(350, 'test', 'metentis doesn\'t like you anymore', 0, '2019-06-12 10:53:29'),
(351, 'test', 'metentis send you a like', 0, '2019-06-12 10:53:40'),
(352, 'test', 'metentis send you a like and you\'re like him before so this is a match', 0, '2019-06-12 10:53:40'),
(353, 'test', 'metentis send you a unlike', 0, '2019-06-12 10:53:49'),
(354, 'test', 'metentis doesn\'t like you anymore', 0, '2019-06-12 10:53:49'),
(355, 'test3', 'metentis visit you\'re profil', 0, '2019-06-12 10:56:53'),
(356, 'test3', 'metentis send you a like', 0, '2019-06-12 10:56:55'),
(357, 'test3', 'metentis send you a like and you\'re like him before so this is a match', 0, '2019-06-12 10:56:55'),
(358, 'test4', 'metentis visit you\'re profil', 0, '2019-06-12 10:58:35'),
(359, 'test4', 'metentis send you a like', 0, '2019-06-12 10:58:37'),
(360, 'metentis', 'test4 visit you\'re profil', 1, '2019-06-12 10:59:02'),
(361, 'metentis', 'test4 send you a like', 1, '2019-06-12 10:59:03'),
(362, 'metentis', 'test4 send you a like and you\'re like him before so this is a match', 1, '2019-06-12 10:59:03'),
(363, 'test5', 'test4 visit you\'re profil', 0, '2019-06-12 11:10:08'),
(364, 'test5', 'test4 visit you\'re profil', 0, '2019-06-12 11:10:10'),
(365, 'bouboule', 'test4 visit you\'re profil', 1, '2019-06-12 11:10:30'),
(366, 'jai', 'test4 visit you\'re profil', 1, '2019-06-12 11:10:31'),
(367, 'tyr', 'test4 visit you\'re profil', 0, '2019-06-12 11:10:32'),
(368, 'test5', 'test4 visit you\'re profil', 0, '2019-06-12 11:10:34'),
(369, 'test5', 'test4 visit you\'re profil', 0, '2019-06-12 11:10:34'),
(370, 'bat test', 'metentis visit you\'re profil', 0, '2019-06-12 13:08:28'),
(371, 'bat test', 'metentis visit you\'re profil', 0, '2019-06-12 13:13:31'),
(372, 'jai', 'metentis visit you\'re profil', 1, '2019-06-12 13:26:28'),
(373, 'jai', 'You are new message from metentis', 1, '2019-06-12 13:26:48'),
(374, 'jai', 'You are new message from metentis', 1, '2019-06-12 13:26:51'),
(375, 'jai', 'metentis visit you\'re profil', 1, '2019-06-12 13:26:57'),
(376, 'jai', 'You are new message from metentis', 1, '2019-06-12 13:27:09'),
(377, 'metentis', 'jai visit you\'re profil', 1, '2019-06-12 14:02:31'),
(378, 'tyr', 'jai visit you\'re profil', 0, '2019-06-12 14:02:38'),
(379, 'bouboule', 'jai visit you\'re profil', 1, '2019-06-12 14:02:40'),
(380, 'metentis', 'jai visit you\'re profil', 1, '2019-06-12 14:07:52'),
(381, 'bouboule', 'jai visit you\'re profil', 1, '2019-06-12 14:07:52'),
(382, 'tyr', 'jai visit you\'re profil', 0, '2019-06-12 14:11:27'),
(383, 'HH', 'jai visit you\'re profil', 0, '2019-06-12 14:11:28'),
(384, 'test2', 'jai visit you\'re profil', 0, '2019-06-12 14:11:30'),
(385, 'test3', 'jai visit you\'re profil', 0, '2019-06-12 14:13:04'),
(386, 'test3', 'jai visit you\'re profil', 0, '2019-06-12 14:13:05'),
(387, 'the man of steel', 'jai visit you\'re profil', 0, '2019-06-12 14:13:38'),
(388, 'tyr', 'jai visit you\'re profil', 0, '2019-06-12 14:16:42'),
(389, 'tyr', 'jai visit you\'re profil', 0, '2019-06-12 14:16:49'),
(390, 'HH', 'jai visit you\'re profil', 0, '2019-06-12 14:16:51'),
(391, 'tyr', 'jai visit you\'re profil', 0, '2019-06-12 14:16:52'),
(392, 'HH', 'jai visit you\'re profil', 0, '2019-06-12 14:16:54'),
(393, 'tyr', 'jai visit you\'re profil', 0, '2019-06-12 14:16:55'),
(394, 'le roi des math', 'jai visit you\'re profil', 0, '2019-06-12 14:17:08'),
(395, 'metentis', 'jai visit you\'re profil', 1, '2019-06-12 14:17:27'),
(396, 'bouboule', 'jai visit you\'re profil', 1, '2019-06-12 14:17:27'),
(397, 'le roi des math', 'jai visit you\'re profil', 0, '2019-06-12 14:17:28'),
(398, 'le roi des math', 'jai visit you\'re profil', 0, '2019-06-12 14:17:28'),
(399, 'test', 'jai visit you\'re profil', 0, '2019-06-12 14:17:29'),
(400, 'test2', 'jai visit you\'re profil', 0, '2019-06-12 14:17:30'),
(401, 'HH', 'jai visit you\'re profil', 0, '2019-06-12 14:17:31'),
(402, 'HH', 'jai visit you\'re profil', 0, '2019-06-12 14:17:31'),
(403, 'bouboule', 'jai visit you\'re profil', 1, '2019-06-12 14:17:32'),
(404, 'bouboule', 'jai visit you\'re profil', 1, '2019-06-12 14:19:16'),
(405, 'metentis', 'jai visit you\'re profil', 1, '2019-06-12 14:19:19'),
(406, 'tyr', 'jai visit you\'re profil', 0, '2019-06-12 14:19:20'),
(407, 'bouboule', 'jai visit you\'re profil', 1, '2019-06-12 14:19:21'),
(408, 'HH', 'jai visit you\'re profil', 0, '2019-06-12 14:19:21'),
(409, 'metentis', 'jai visit you\'re profil', 1, '2019-06-12 14:19:23'),
(410, 'test', 'jai visit you\'re profil', 0, '2019-06-12 14:19:24'),
(411, 'HH', 'jai visit you\'re profil', 0, '2019-06-12 14:19:25'),
(412, 'test4', 'metentis visit you\'re profil', 0, '2019-06-12 14:21:00'),
(413, 'test3', 'metentis visit you\'re profil', 0, '2019-06-12 14:24:29'),
(414, 'test4', 'metentis visit you\'re profil', 0, '2019-06-12 14:24:52'),
(415, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-12 14:28:44'),
(416, 'metentis', 'bouboule send you a like', 1, '2019-06-12 14:28:47'),
(417, 'metentis', 'bouboule send you a unlike', 1, '2019-06-12 14:28:52'),
(418, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-12 14:57:51'),
(419, 'metentis', 'bouboule send you a like', 1, '2019-06-12 14:57:53'),
(420, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-13 08:41:18'),
(421, 'x', 'metentis visit you\'re profil', 1, '2019-06-17 21:28:00'),
(422, 'x', 'metentis visit you\'re profil', 1, '2019-06-17 21:28:01'),
(423, 'x', 'metentis send you a like', 1, '2019-06-17 21:28:49'),
(424, 'metentis', 'x visit you\'re profil', 1, '2019-06-17 21:29:20'),
(425, 'metentis', 'x send you a like', 1, '2019-06-17 21:29:24'),
(426, 'metentis', 'x send you a like and you\'re like him before so this is a match', 1, '2019-06-17 21:29:24'),
(427, 'x', 'You are new message from metentis', 1, '2019-06-17 21:29:44'),
(428, 'metentis', 'You are new message from x', 1, '2019-06-17 21:30:20'),
(429, 'metentis', 'x visit you\'re profil', 1, '2019-06-17 21:30:51'),
(430, 'bouboule', 'x visit you\'re profil', 0, '2019-06-17 21:33:02'),
(431, 'tyr', 'x visit you\'re profil', 0, '2019-06-17 21:33:09'),
(432, 'HH', 'x visit you\'re profil', 0, '2019-06-17 21:33:12'),
(433, 'test4', 'x visit you\'re profil', 0, '2019-06-17 21:33:14'),
(434, 'le roi des math', 'x visit you\'re profil', 0, '2019-06-17 21:33:16'),
(435, 'coucou', 'x visit you\'re profil', 0, '2019-06-17 21:33:17'),
(436, 'the man of steel', 'x visit you\'re profil', 0, '2019-06-17 21:33:18'),
(437, 'metentis', 'x visit you\'re profil', 1, '2019-06-17 21:33:20'),
(438, 'jai', 'x visit you\'re profil', 0, '2019-06-17 21:33:22'),
(439, 'le roi des math', 'x visit you\'re profil', 0, '2019-06-17 21:33:23'),
(440, 'le roi des math', 'x visit you\'re profil', 0, '2019-06-17 21:33:23'),
(441, 'test4', 'x visit you\'re profil', 0, '2019-06-17 21:33:35'),
(442, 'test2', 'x visit you\'re profil', 0, '2019-06-17 21:33:37'),
(443, 'test3', 'x visit you\'re profil', 0, '2019-06-17 21:33:39'),
(444, 'test4', 'x visit you\'re profil', 0, '2019-06-17 21:33:40'),
(445, 'test16', 'x visit you\'re profil', 0, '2019-06-17 21:33:41'),
(446, 'test21', 'x visit you\'re profil', 0, '2019-06-17 21:33:44'),
(447, 'test30', 'x visit you\'re profil', 1, '2019-06-17 21:33:49'),
(448, 'test18', 'x visit you\'re profil', 0, '2019-06-17 21:34:08'),
(449, 'test30', 'metentis visit you\'re profil', 1, '2019-06-17 23:16:01'),
(450, 'metentis', 'test30 visit you\'re profil', 1, '2019-06-17 23:16:42'),
(451, 'metentis', 'test30 send you a like', 1, '2019-06-17 23:16:45'),
(452, 'metentis', 'test30 send you a like', 1, '2019-06-17 23:16:46'),
(453, 'test30', 'metentis visit you\'re profil', 0, '2019-06-17 23:17:04'),
(454, 'x', 'metentis visit you\'re profil', 0, '2019-06-17 23:17:29'),
(455, 'test30', 'metentis visit you\'re profil', 0, '2019-06-17 23:17:30'),
(456, 'test30', 'metentis send you a like', 0, '2019-06-17 23:17:33'),
(457, 'test30', 'metentis send you a like and you\'re like him before so this is a match', 0, '2019-06-17 23:17:33'),
(458, 'x', 'metentis visit you\'re profil', 0, '2019-06-17 23:17:53'),
(459, 'test30', 'metentis visit you\'re profil', 0, '2019-06-17 23:19:17'),
(460, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-17 23:20:06'),
(461, 'HH', 'metentis visit you\'re profil', 0, '2019-06-17 23:20:08'),
(462, 'le roi des math', 'metentis visit you\'re profil', 0, '2019-06-17 23:20:14'),
(463, 'HH', 'metentis visit you\'re profil', 0, '2019-06-17 23:20:15'),
(464, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-17 23:20:18'),
(465, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-17 23:20:20'),
(466, 'HH', 'metentis visit you\'re profil', 0, '2019-06-17 23:20:23'),
(467, 'le roi des math', 'metentis visit you\'re profil', 0, '2019-06-17 23:20:25');

-- --------------------------------------------------------

--
-- Structure de la table `picturesusers`
--

DROP TABLE IF EXISTS `picturesusers`;
CREATE TABLE IF NOT EXISTS `picturesusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `picture` longtext CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=199 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `picturesusers`
--

INSERT INTO `picturesusers` (`id`, `userId`, `picture`) VALUES
(179, '128', 'image3.jpg'),
(180, '128', 'image.jpeg'),
(181, '128', 'image2.jpeg'),
(183, '128', 'download.jpeg'),
(184, '129', 'image4.jpg'),
(185, '141', 'image4.jpg'),
(186, '142', 'FR.jpg'),
(187, '143', 'FR.TR.jpg'),
(188, '142', 'FR.jpg'),
(189, '142', 'CD.jpg'),
(190, '137', 'image3.jpg'),
(191, '136', 'image2.jpeg'),
(192, '135', 'image4.jpg'),
(193, '134', 'download.jpeg'),
(194, '128', 'image4.jpg'),
(195, '130', 'image4.jpg'),
(196, '165', 'FR.jpg'),
(197, '165', 'FR.TR.jpg'),
(198, '164', 'folder.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `profil`
--

DROP TABLE IF EXISTS `profil`;
CREATE TABLE IF NOT EXISTS `profil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `lastName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `firstName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `confirmKey` bigint(20) NOT NULL,
  `confirmKeyOk` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `profil`
--

INSERT INTO `profil` (`id`, `userName`, `password`, `email`, `lastName`, `firstName`, `confirmKey`, `confirmKeyOk`) VALUES
(128, 'metentis', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'sylvain.boeuf@orange.fr', 'boeuf', 'sylvain', 8394950248921, 1),
(129, 'jai', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'florent.boeuf@free.fr', 'boeuf', 'florent', 6923653259421, 1),
(130, 'bouboule', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'audrey.boeuf@free.fr', 'boeuf', 'audrey', 7772988799848, 1),
(131, 'tyr', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'amandine.richard@free.fr', 'Richard', 'amandine', 9971396599816, 1),
(132, 'HH', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'dimitri.richard@free.fr', 'richard', 'dimitri', 2200237506864, 1),
(133, 'le roi des math', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'bruno.chatelain@free.fr', 'chatelin', 'bruno', 7136743763158, 1),
(134, 'test', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test@gmail.com', 'test', 'test', 3454300560392, 1),
(135, 'test2', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test2@gmail.com', 'test2', 'test2', 1677337025450, 1),
(136, 'test3', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test3@gmail.fr', 'test3', 'test3', 2376701668198, 1),
(137, 'test4', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test4@gmail.com', 'test4', 'test4', 6037373664254, 1),
(139, 'coucou', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'coucoucou@gmail.com', 'coucou', 'coucou', 6981057521520, 1),
(142, 'bat test', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'sylvain.boeuf@gmail.fr', 'Wayne', 'Bruce', 7960381791630, 1),
(143, 'the man of steel', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'sylvain.boeuf@free.fr', 'kent', 'Clark', 8318236214024, 1),
(144, 'test5', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test5@gmail.com', 'test5', 'test5', 7566931969138, 1),
(145, 'test6', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test6@gmail.com', 'test6', 'test6', 582266724213, 1),
(146, 'test9', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test9@gmail.com', 'test9', 'test9', 3488552820732, 1),
(147, 'test10', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test10@gmail.com', 'test10', 'test10', 7358031551689, 0),
(148, 'test11', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test11@gmail.fr', 'test11', 'test11', 9736868538874, 1),
(149, 'test12', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test12@gmail.fr', 'test12', 'test12', 4021348015825, 1),
(150, 'test13', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test13@gmail.fr', 'test13', 'test13', 6033169455479, 0),
(151, 'test14', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test14@gmail.com', 'test14', 'test14', 6190844112524, 0),
(152, 'test15', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test15@gmail.com', 'test15', 'test15', 5783414770008, 1),
(153, 'test16', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test16@gmail.com', 'test16', 'test16', 2569539059679, 1),
(154, 'test17', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test17@gmail.com', 'test17', 'test17', 9559486991302, 1),
(155, 'test18', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test18@gmail.com', 'test18', 'test18', 8335081320354, 1),
(156, 'test19', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test19@gmail.com', 'test19', 'test19', 7533706907012, 1),
(157, 'test20', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test20@gmail.fr', 'test20', 'test20', 8699907264766, 1),
(158, 'test21', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test21@gmail.com', 'test21', 'test21', 9861767162669, 1),
(159, 'test25', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test25@gmail.com', 'test25', 'test25', 8279664659955, 1),
(160, 'test26', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test26@gmail.com', 'test26', 'test26', 1559224598050, 1),
(161, 'test27', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test27@gmail.com', 'test27', 'test27', 3505394069835, 1),
(162, 'test28', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test28@gmail.com', 'test28', 'test28', 3001966743280, 1),
(163, 'test29', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test29@gmail.com', 'test29', 'test29', 5287304086401, 1),
(164, 'test30', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test30@gmail.com', 'test30', 'test30', 914499620047, 1),
(165, 'x', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'xavier@hotmail.free', 'boeuf', 'xa', 318246101647, 1);

-- --------------------------------------------------------

--
-- Structure de la table `profilmatch`
--

DROP TABLE IF EXISTS `profilmatch`;
CREATE TABLE IF NOT EXISTS `profilmatch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstPerson` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `secondPerson` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `profilmatch`
--

INSERT INTO `profilmatch` (`id`, `firstPerson`, `secondPerson`) VALUES
(12, 'tyr', 'bouboule'),
(14, 'jai', 'tyr'),
(15, 'jai', 'HH'),
(16, 'metentis', 'jai'),
(20, 'test3', 'jai'),
(22, 'metentis', 'x');

-- --------------------------------------------------------

--
-- Structure de la table `userinfos`
--

DROP TABLE IF EXISTS `userinfos`;
CREATE TABLE IF NOT EXISTS `userinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `age` int(11) DEFAULT NULL,
  `biography` text,
  `gender` text,
  `orientation` text,
  `listInterest` text,
  `userLocation` text,
  `userApproximateLocation` text,
  `userAddress` text,
  `userApproximateCity` text,
  `populareScore` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `userinfos`
--

INSERT INTO `userinfos` (`id`, `userName`, `age`, `biography`, `gender`, `orientation`, `listInterest`, `userLocation`, `userApproximateLocation`, `userAddress`, `userApproximateCity`, `populareScore`) VALUES
(1, 'metentis', 27, 'plus maintenannt', 'Femme', 'Homme', 'null#Movie#data processing#NigthParty#Sport#Manga', '48.80799184533588 , 2.2395570507480613', '48.81206000000003, 2.2377800000000434', '2-6 Rue Servien, 92190, Meudon, Hauts-de-Seine, Île-de-France, FRA', 'Meudon, Hauts-de-Seine, Île-de-France', 100),
(2, 'jai', 22, 'jcavjlerabv', 'Male', 'Homme', 'null#Movie#Manga#Sport', '48.80921180000001, 2.2395904', '48.8574, 2.3795', '89A Rue de Paris, 92190 Meudon, France', 'Paris', 60),
(3, 'bouboule', 29, 'vhkrueiubv', 'Male', 'Femme', 'null#data processing#NigthParty#Sport', '48.8079933, 2.2396035999999997', '48.8574, 2.3795', '2bis Rue Servien, 92190 Meudon, France', 'Paris', 0),
(6, 'tyr', 23, 'vsdvhuy', 'Male', 'Femme', 'null#Movie#Manga#Sport#NigthParty#data processing', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon', 0),
(7, 'HH', 30, 'null', 'Male', 'Homme', 'null#Manga#Sport', '48.8042, 2.2810200000000123', '48.8138, 2.235', '46 Rue Jean Jaurès, 92320 Châtillon, France', 'Meudon', 0),
(8, 'le roi des math', 39, 'ewfthyeg', 'Male', 'Homme', 'null#data processing#NigthParty#Sport#Manga#Movie', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon', 0),
(9, 'test', 50, 'ca bug', 'Femme', 'Femme', 'null#Sport#NigthParty', '48.8964, 2.3184499999999844', '48.8574, 2.3795', '96 Boulevard Bessières, Paris 17e Arrondissement, France', 'Paris', -100),
(10, 'test2', 60, 'testtsetsets', 'Male', 'Femme', 'null#Manga#NigthParty', '48.8079933, 2.2396035999999997', '48.8574, 2.3795', '2bis Rue Servien, 92190 Meudon, France', 'Paris', 100),
(12, 'test3', 70, '', 'Femme', 'Femme', 'null', NULL, '48.8574, 2.3795', NULL, 'Paris', 100),
(13, 'test4', 10, 'htrhdghjydnjuyrj', 'Male', 'Bisexuelle', 'null#Manga#Sport', '48.8079933, 2.2396035999999997', '48.8574, 2.3795', '2bis Rue Servien, 92190 Meudon, France', 'Paris', 100),
(15, 'coucou', 46, '', 'Male', 'Femme', 'null#Sport', '48.812498899999994, 2.24694', '48.8138, 2.235', '12BIS Rue du Docteur Vuillième, 92190 Meudon, France', 'Meudon', 0),
(18, 'bat test', 0, 'null', 'Male', 'Femme', 'null#Sport#data processing#NigthParty', '48.80921180000001, 2.2395904', '48.8138, 2.235', '89A Rue de Paris, 92190 Meudon, France', 'Meudon', -100),
(19, 'the man of steel', 35, 'im superman yeah !!!', 'Femme', 'Homme', 'null#Manga#Sport#Movie', '48.8127305, 2.2468664', '48.8138, 2.235', '8 Rue du Docteur Vuillième, 92190 Meudon, France', 'Meudon', 0),
(20, 'test5', NULL, NULL, NULL, NULL, NULL, '48.8967101, 2.3183450999999997', '48.8763,2.3183', '96 Boulevard Bessières, 75017, 17e Arrondissement, Paris, Île-de-France, FRA', 'Paris, Ile-de-France, France', 0),
(21, 'test6', NULL, NULL, NULL, NULL, NULL, '48.8966685, 2.3183566', '48.8763,2.3183', '96 Boulevard Bessières, 75017, 17e Arrondissement, Paris, Île-de-France, FRA', 'Paris, Ile-de-France, France', 0),
(22, 'test9', NULL, NULL, NULL, NULL, NULL, '48.8966946, 2.3183746999999997', '48.8763,2.3183', '96 Boulevard Bessières, 75017, 17e Arrondissement, Paris, Île-de-France, FRA', 'Paris, Ile-de-France, France', 0),
(25, 'test12', NULL, NULL, NULL, NULL, NULL, '48.8966338, 2.3183534', '48.8763,2.3183', '96 Boulevard Bessières, 75017, 17e Arrondissement, Paris, Île-de-France, FRA', 'Paris, Ile-de-France, France', 0),
(29, 'test16', NULL, NULL, NULL, NULL, NULL, '48.8967101, 2.3183359', '48.8574, 2.3795', '96 Boulevard Bessières, 75017 Paris, France', 'Paris', 0),
(30, 'test17', NULL, NULL, NULL, NULL, NULL, '48.8967113, 2.3183545999999997', '48.8763,2.3183', '96 Boulevard Bessières, 75017, 17e Arrondissement, Paris, Île-de-France, FRA', 'Paris, Ile-de-France, France', 0),
(31, 'test18', NULL, NULL, NULL, NULL, NULL, '48.8966505, 2.3183648999999997', '48.8763,2.3183', '96 Boulevard Bessières, 75017, 17e Arrondissement, Paris, Île-de-France, FRA', 'Paris, Ile-de-France, France', 0),
(32, 'test19', NULL, NULL, NULL, NULL, NULL, '48.8966505, 2.3183648999999997', '48.8763,2.3183', '96 Boulevard Bessières, 75017, 17e Arrondissement, Paris, Île-de-France, FRA', 'Paris, Ile-de-France, France', 0),
(33, 'test20', NULL, NULL, NULL, NULL, NULL, '48.8966583, 2.3183534', '48.8574, 2.3795', '96 Boulevard Bessières, 75017, 17e Arrondissement, Paris, Île-de-France, FRA', 'Paris, France', 0),
(34, 'test21', NULL, NULL, NULL, NULL, NULL, '48.8966583, 2.3183534', '48.8574, 2.3795', '96 Boulevard Bessières, 75017, 17e Arrondissement, Paris, Île-de-France, FRA', 'Paris, France', 0),
(35, 'test25', NULL, NULL, NULL, NULL, NULL, '48.80799184533588 , 2.2395570507480613', '48.8138, 2.235', '2-6 Rue Servien, 92190, Meudon, Hauts-de-Seine, Île-de-France, FRA', 'Meudon, France', 0),
(36, 'test26', NULL, NULL, NULL, NULL, NULL, '48.80799184533588 , 2.2395570507480613', '48.8138, 2.235', '2-6 Rue Servien, 92190, Meudon, Hauts-de-Seine, Île-de-France, FRA', 'Meudon, France', 0),
(37, 'test27', NULL, NULL, NULL, NULL, NULL, '48.8125933694097 , 2.2471824262798554', '48.8138, 2.235', '12B Rue du Docteur Vuillième, 92190, Meudon, Hauts-de-Seine, Île-de-France, FRA', 'Meudon, France', 0),
(38, 'test28', NULL, NULL, NULL, NULL, NULL, '48.8125933694097 , 2.2471824262798554', '48.8138, 2.235', '12B Rue du Docteur Vuillième, 92190, Meudon, Hauts-de-Seine, Île-de-France, FRA', 'Meudon, France', 0),
(39, 'test29', NULL, NULL, NULL, NULL, NULL, '48.80799184533588 , 2.2395570507480613', '48.8138, 2.235', '2-6 Rue Servien, 92190, Meudon, Hauts-de-Seine, Île-de-France, FRA', 'Meudon, France', 0),
(40, 'test30', 40, '', 'null', 'null', 'null', '48.80799184533588 , 2.2395570507480613', '48.81206000000003, 2.2377800000000434', '2-6 Rue Servien, 92190, Meudon, Hauts-de-Seine, Île-de-France, FRA', 'Meudon, Hauts-de-Seine, Île-de-France', 100),
(41, 'x', 40, 'bonjour, les amis', 'null', 'Femme', 'null#Movie', '48.812541380518205, 2.2472115401061767', '48.81206000000003, 2.2377800000000434', '12 Rue du Docteur Vuillième, 92190, Meudon, Hauts-de-Seine, Île-de-France', 'Meudon, Hauts-de-Seine, Île-de-France', 100);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
