-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 04 juin 2019 à 22:08
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
  `fakeUser` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `fakeuser`
--

INSERT INTO `fakeuser` (`id`, `fakeUser`) VALUES
(1, 'HH');

-- --------------------------------------------------------

--
-- Structure de la table `inlineuser`
--

DROP TABLE IF EXISTS `inlineuser`;
CREATE TABLE IF NOT EXISTS `inlineuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `inline` int(11) NOT NULL DEFAULT '0',
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `inlineuser`
--

INSERT INTO `inlineuser` (`id`, `user`, `inline`, `date`) VALUES
(1, 'metentis', 1, '2019-06-04 22:08:58'),
(2, 'jainko', 0, '2019-06-04 22:18:25'),
(3, 'HH', 0, '2019-06-05 00:02:33'),
(4, 'tyran', 0, '2019-05-27 11:46:51'),
(5, 'bouboule', 0, '2019-05-27 11:46:51'),
(6, 'le roi des math', 0, '2019-05-27 11:46:51');

-- --------------------------------------------------------

--
-- Structure de la table `likeuser`
--

DROP TABLE IF EXISTS `likeuser`;
CREATE TABLE IF NOT EXISTS `likeuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `profilName` varchar(255) NOT NULL,
  `likeUser` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `likeuser`
--

INSERT INTO `likeuser` (`id`, `userName`, `profilName`, `likeUser`) VALUES
(22, 'HH', 'metentis', 1),
(23, 'HH', 'jainko', 1),
(24, 'HH', 'bouboule', -1),
(25, 'HH', 'tyran', -1),
(26, 'HH', 'le roi des math', 1),
(27, 'bouboule', 'HH', 1),
(28, 'bouboule', 'le roi des math', 1),
(29, 'bouboule', 'tyran', 1),
(30, 'bouboule', 'jainko', -1),
(31, 'bouboule', 'metentis', -1),
(33, 'metentis', 'bouboule', 1),
(34, 'metentis', 'HH', -1),
(35, 'metentis', 'jainko', -1),
(36, 'metentis', 'tyran', 1),
(37, 'metentis', 'le roi des math', 1),
(38, 'tyran', 'metentis', 1),
(39, 'tyran', 'jainko', 1),
(40, 'tyran', 'bouboule', 1),
(41, 'tyran', 'le roi des math', 1),
(42, 'jainko', 'metentis', 1),
(43, 'jainko', 'bouboule', 1),
(44, 'jainko', 'tyran', 1),
(45, 'jainko', 'le roi des math', 1),
(46, 'jainko', 'HH', 1);

-- --------------------------------------------------------

--
-- Structure de la table `listblockprofil`
--

DROP TABLE IF EXISTS `listblockprofil`;
CREATE TABLE IF NOT EXISTS `listblockprofil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `blockProfil` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fromUser` varchar(255) DEFAULT NULL,
  `toUser` varchar(255) DEFAULT NULL,
  `message` text,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `fromUser`, `toUser`, `message`, `date`) VALUES
(53, 'metentis', 'jainko', 'autiste', '2019-05-27 11:46:51'),
(54, 'jainko', 'metentis', 'test', '2019-05-27 12:16:14'),
(55, 'jainko', 'metentis', 'testons ca ', '2019-05-27 12:23:56');

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `notificationUser` varchar(255) NOT NULL,
  `notificationType` text NOT NULL,
  `notificationRead` int(11) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `notifications`
--

INSERT INTO `notifications` (`id`, `notificationUser`, `notificationType`, `notificationRead`, `date`) VALUES
(63, 'jainko', 'You are new message from metentis', 1, '2019-05-27 11:46:51'),
(64, 'metentis', 'You are new message from jainko', 1, '2019-05-27 12:16:14'),
(65, 'metentis', 'You are new message from jainko', 1, '2019-05-27 12:23:56'),
(66, 'le roi des math', 'metentis visit you\'re profil', 0, '2019-05-27 12:25:01'),
(67, 'jainko', 'metentis visit you\'re profil', 1, '2019-05-27 12:34:53'),
(68, 'tyran', 'jainko visit you\'re profil', 0, '2019-05-27 13:35:25'),
(69, 'tyran', 'jainko visit you\'re profil', 0, '2019-05-27 13:36:12'),
(70, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 13:42:14'),
(71, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 13:42:40'),
(72, 'bouboule', 'jainko visit you\'re profil', 0, '2019-05-27 13:42:42'),
(73, 'tyran', 'jainko visit you\'re profil', 0, '2019-05-27 13:42:43'),
(74, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 13:42:44'),
(75, 'bouboule', 'jainko visit you\'re profil', 0, '2019-05-27 13:51:33'),
(76, 'tyran', 'jainko visit you\'re profil', 0, '2019-05-27 13:51:35'),
(77, 'HH', 'jainko visit you\'re profil', 0, '2019-05-27 13:51:36'),
(78, 'le roi des math', 'jainko visit you\'re profil', 0, '2019-05-27 13:51:36'),
(79, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 13:51:38'),
(80, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 13:52:39'),
(81, 'jainko', 'metentis visit you\'re profil', 1, '2019-05-27 13:53:08'),
(82, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 13:53:37'),
(83, 'jainko', 'metentis visit you\'re profil', 1, '2019-05-27 13:55:25'),
(84, 'jainko', 'metentis visit you\'re profil', 1, '2019-05-27 14:09:54'),
(85, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 14:16:26'),
(86, 'bouboule', 'jainko visit you\'re profil', 0, '2019-05-27 14:16:42'),
(87, 'tyran', 'jainko visit you\'re profil', 0, '2019-05-27 14:17:55'),
(88, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 14:20:00'),
(89, 'bouboule', 'jainko visit you\'re profil', 0, '2019-05-27 14:20:04'),
(90, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 14:21:17'),
(91, 'jainko', 'metentis visit you\'re profil', 1, '2019-05-27 14:21:29'),
(92, 'jainko', 'metentis send you a unlike', 1, '2019-05-27 14:21:31'),
(93, 'jainko', 'metentis doesn\'t like you anymore', 1, '2019-05-27 14:21:31'),
(94, 'jainko', 'metentis send you a like', 1, '2019-05-27 14:21:40'),
(95, 'jainko', 'metentis send you a like and you\'re like him before so this is a match', 1, '2019-05-27 14:21:40'),
(96, 'jainko', 'metentis visit you\'re profil', 1, '2019-05-27 14:39:57'),
(97, 'jainko', 'metentis send you a unlike', 1, '2019-05-27 14:39:58'),
(98, 'jainko', 'metentis doesn\'t like you anymore', 1, '2019-05-27 14:39:58'),
(99, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 14:40:12'),
(100, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 14:40:21'),
(101, 'bouboule', 'jainko visit you\'re profil', 0, '2019-05-27 14:41:11'),
(102, 'metentis', 'jainko visit you\'re profil', 1, '2019-05-27 14:41:12'),
(103, 'tyran', 'metentis visit you\'re profil', 0, '2019-05-27 16:51:26'),
(104, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 16:52:03'),
(105, 'HH', 'metentis visit you\'re profil', 0, '2019-05-27 17:04:02'),
(106, 'bouboule', 'metentis visit you\'re profil', 0, '2019-05-27 17:04:24'),
(107, 'HH', 'metentis visit you\'re profil', 0, '2019-05-27 17:04:25'),
(108, 'HH', 'metentis visit you\'re profil', 0, '2019-05-27 17:05:15'),
(109, 'HH', 'metentis visit you\'re profil', 0, '2019-05-27 17:05:50'),
(110, 'HH', 'metentis visit you\'re profil', 0, '2019-05-27 17:06:33'),
(111, 'bouboule', 'metentis visit you\'re profil', 0, '2019-05-27 17:08:38'),
(112, 'HH', 'metentis visit you\'re profil', 0, '2019-05-27 17:10:58'),
(113, 'tyran', 'metentis visit you\'re profil', 0, '2019-05-27 17:11:00'),
(114, 'HH', 'metentis visit you\'re profil', 0, '2019-05-27 17:11:01'),
(115, 'le roi des math', 'metentis visit you\'re profil', 0, '2019-05-27 17:11:01'),
(116, 'tyran', 'metentis visit you\'re profil', 0, '2019-05-27 17:11:02'),
(117, 'HH', 'metentis visit you\'re profil', 0, '2019-05-27 17:11:02'),
(118, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 17:24:42'),
(119, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 17:51:51'),
(120, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 17:56:15'),
(121, 'bouboule', 'metentis visit you\'re profil', 0, '2019-05-27 17:57:02'),
(122, 'bouboule', 'metentis visit you\'re profil', 0, '2019-05-27 18:01:35'),
(123, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 18:12:29'),
(124, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 18:12:58'),
(125, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 18:13:46'),
(126, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 18:14:26'),
(127, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 18:15:49'),
(128, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 18:16:30'),
(129, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 18:17:11'),
(130, 'jainko', 'metentis visit you\'re profil', 0, '2019-05-27 18:18:24'),
(131, 'jainko', 'metentis visit you\'re profil', 0, '2019-06-04 11:08:37'),
(132, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 11:08:38'),
(133, 'tyran', 'metentis visit you\'re profil', 0, '2019-06-04 11:08:38'),
(134, 'jainko', 'metentis visit you\'re profil', 0, '2019-06-04 11:17:01'),
(135, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 11:17:02'),
(136, 'tyran', 'metentis visit you\'re profil', 0, '2019-06-04 11:17:03'),
(137, 'HH', 'metentis visit you\'re profil', 0, '2019-06-04 11:17:04'),
(138, 'le roi des math', 'metentis visit you\'re profil', 0, '2019-06-04 11:17:04'),
(139, 'HH', 'metentis visit you\'re profil', 0, '2019-06-04 11:17:05'),
(140, 'tyran', 'metentis visit you\'re profil', 0, '2019-06-04 11:17:05'),
(141, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 11:17:06'),
(142, 'jainko', 'metentis visit you\'re profil', 0, '2019-06-04 11:17:08'),
(143, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 11:30:57'),
(144, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 11:32:29'),
(145, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 11:32:58'),
(146, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 11:37:24'),
(147, 'jainko', 'metentis visit you\'re profil', 0, '2019-06-04 11:38:36'),
(148, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 11:39:21'),
(149, 'jainko', 'metentis visit you\'re profil', 0, '2019-06-04 11:45:39'),
(150, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 11:45:56'),
(151, 'jainko', 'metentis visit you\'re profil', 0, '2019-06-04 12:35:09'),
(152, 'HH', 'metentis visit you\'re profil', 0, '2019-06-04 12:47:12'),
(153, 'test3', 'metentis visit you\'re profil', 0, '2019-06-04 12:56:14'),
(154, 'test2', 'metentis visit you\'re profil', 0, '2019-06-04 12:56:16'),
(155, 'test3', 'metentis visit you\'re profil', 0, '2019-06-04 12:56:18'),
(156, 'jainko', 'metentis visit you\'re profil', 0, '2019-06-04 12:56:21'),
(157, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 12:56:30'),
(158, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 12:56:35'),
(159, 'tyran', 'metentis visit you\'re profil', 0, '2019-06-04 14:18:10'),
(160, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 14:18:11'),
(161, 'HH', 'metentis visit you\'re profil', 0, '2019-06-04 14:18:12'),
(162, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-04 14:19:13'),
(163, 'le roi des math', 'metentis visit you\'re profil', 0, '2019-06-04 19:54:42');

-- --------------------------------------------------------

--
-- Structure de la table `picturesusers`
--

DROP TABLE IF EXISTS `picturesusers`;
CREATE TABLE IF NOT EXISTS `picturesusers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(255) NOT NULL,
  `picture` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=175 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `picturesusers`
--

INSERT INTO `picturesusers` (`id`, `userId`, `picture`) VALUES
(171, '132', 'HH/20170813_235411.jpg'),
(172, '132', 'HH/20170814_001657.jpg'),
(173, '132', 'HH/20171002_211639.jpg'),
(174, '128', 'metentis/20170814_142546.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `profil`
--

DROP TABLE IF EXISTS `profil`;
CREATE TABLE IF NOT EXISTS `profil` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `confirmKey` bigint(20) NOT NULL,
  `confirmKeyOk` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `profil`
--

INSERT INTO `profil` (`id`, `userName`, `password`, `email`, `lastName`, `firstName`, `confirmKey`, `confirmKeyOk`) VALUES
(128, 'metentis', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'sylvain.boeuf@free.fr', 'boeuf', 'sylvain', 8394950248921, 1),
(129, 'jainko', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'florent.boeuf@free.fr', 'boeuf', 'florent', 6923653259421, 1),
(130, 'bouboule', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'audrey.boeuf@free.fr', 'boeuf', 'audrey', 7772988799848, 1),
(131, 'tyran', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'amandine.richard@free.fr', 'Richard', 'amandine', 9971396599816, 1),
(132, 'HH', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'dimitri.richard@free.fr', 'richard', 'dimitri', 2200237506864, 1),
(133, 'le roi des math', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'bruno.chatelain@free.fr', 'chatelin', 'bruno', 7136743763158, 1),
(134, 'test', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test@gmail.com', 'test', 'test', 3454300560392, 1),
(135, 'test2', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test2@gmail.com', 'test2', 'test2', 1677337025450, 1),
(136, 'test3', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test3@gmail.fr', 'test3', 'test3', 2376701668198, 1),
(137, 'test4', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test4@gmail.com', 'test4', 'test4', 6037373664254, 1);

-- --------------------------------------------------------

--
-- Structure de la table `profilmatch`
--

DROP TABLE IF EXISTS `profilmatch`;
CREATE TABLE IF NOT EXISTS `profilmatch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstPerson` varchar(255) NOT NULL,
  `secondPerson` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `profilmatch`
--

INSERT INTO `profilmatch` (`id`, `firstPerson`, `secondPerson`) VALUES
(11, 'tyran', 'metentis'),
(12, 'tyran', 'bouboule'),
(14, 'jainko', 'tyran'),
(15, 'jainko', 'HH');

-- --------------------------------------------------------

--
-- Structure de la table `userinfos`
--

DROP TABLE IF EXISTS `userinfos`;
CREATE TABLE IF NOT EXISTS `userinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `biography` text,
  `gender` varchar(255) NOT NULL DEFAULT 'Male',
  `orientation` varchar(255) NOT NULL DEFAULT 'Bisexuelle',
  `listInterest` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `userinfos`
--

INSERT INTO `userinfos` (`id`, `userName`, `biography`, `gender`, `orientation`, `listInterest`) VALUES
(1, 'metentis', 'cedfgenfyh', 'Femme', 'Homme', 'null#Movie#Manga#data processing#NigthParty'),
(2, 'jainko', 'jcavjlerabv', 'Male', 'Homme', 'null#Movie#Manga#Sport'),
(3, 'bouboule', 'vhkrueiubv', 'Male', 'Femme', 'null#data processing#NigthParty#Sport'),
(6, 'tyran', 'vsdvhuy', 'Male', 'Femme', 'null#Movie#Manga#Sport#NigthParty#data processing'),
(7, 'HH', NULL, 'Male', 'Homme', NULL),
(8, 'le roi des math', 'ewfthyeg', 'Male', 'Homme', 'null#data processing#NigthParty#Sport#Manga#Movie'),
(9, 'test', 'ca bug', 'Femme', 'Femme', 'null#Sport#NigthParty'),
(10, 'test2', 'testtsetsets', 'Male', 'Femme', 'null#Manga#NigthParty'),
(12, 'test3', NULL, 'Male', 'Bisexuelle', NULL),
(13, 'test4', 'htrhdghjydnjuyrj', 'Male', 'Bisexuelle', 'null#Manga#Sport');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
