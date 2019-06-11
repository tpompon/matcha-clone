-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 10 juin 2019 à 23:47
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `fakeuser`
--

INSERT INTO `fakeuser` (`id`, `fakeUser`) VALUES
(1, 'HH'),
(2, 'tyr');

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `inlineuser`
--

INSERT INTO `inlineuser` (`id`, `user`, `inline`, `date`) VALUES
(1, 'metentis', 1, '2019-06-09 17:54:36'),
(2, 'jai', 0, '2019-06-09 17:06:08'),
(3, 'HH', 0, '2019-06-09 00:13:25'),
(4, 'tyr', 0, '2019-06-09 00:12:53'),
(5, 'bouboule', 0, '2019-06-07 13:41:25'),
(6, 'le roi des math', 0, '2019-06-09 00:13:39');

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
(23, 'HH', 'jai', 1),
(24, 'HH', 'bouboule', -1),
(25, 'HH', 'tyr', -1),
(26, 'HH', 'le roi des math', 1),
(27, 'bouboule', 'HH', 1),
(28, 'bouboule', 'le roi des math', 1),
(29, 'bouboule', 'tyr', 1),
(30, 'bouboule', 'jai', -1),
(31, 'bouboule', 'metentis', -1),
(33, 'metentis', 'bouboule', 1),
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
(46, 'jai', 'HH', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `listblockprofil`
--

INSERT INTO `listblockprofil` (`id`, `user`, `blockProfil`) VALUES
(3, 'jai', 'tyr'),
(4, 'jai', 'le roi des math'),
(5, 'jai', 'test'),
(6, 'jai', 'metentis');

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
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `fromUser`, `toUser`, `message`, `date`) VALUES
(53, 'metentis', 'jai', 'autiste', '2019-05-27 11:46:51'),
(54, 'jai', 'metentis', 'test', '2019-05-27 12:16:14'),
(55, 'jai', 'metentis', 'testons ca ', '2019-05-27 12:23:56'),
(56, 'jai', 'tyr', 'test', '2019-06-05 13:08:52'),
(57, 'jai', 'tyr', 'perfect', '2019-06-05 13:09:00'),
(58, 'jai', 'HH', 'voyons voir ca', '2019-06-05 14:08:03'),
(59, 'HH', 'jai', 'ca marche au poil', '2019-06-05 14:08:11'),
(60, 'metentis', 'jai', 'cdhsziu', '2019-06-09 17:05:06'),
(61, 'jai', 'metentis', 'coucou', '2019-06-09 17:05:50');

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
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `notifications`
--

INSERT INTO `notifications` (`id`, `notificationUser`, `notificationType`, `notificationRead`, `date`) VALUES
(63, 'jai', 'You are new message from metentis', 1, '2019-05-27 11:46:51'),
(64, 'metentis', 'You are new message from jainko', 1, '2019-05-27 12:16:14'),
(65, 'metentis', 'You are new message from jainko', 1, '2019-05-27 12:23:56'),
(66, 'le roi des math', 'metentis visit youre profil', 0, '2019-05-27 12:25:01'),
(67, 'jai', 'metentis visit youre profil', 1, '2019-05-27 12:34:53'),
(68, 'tyr', 'jainko visit youre profil', 0, '2019-05-27 13:35:25'),
(69, 'tyr', 'jainko visit youre profil', 0, '2019-05-27 13:36:12'),
(70, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 13:42:14'),
(71, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 13:42:40'),
(72, 'bouboule', 'jainko visit youre profil', 0, '2019-05-27 13:42:42'),
(73, 'tyr', 'jainko visit youre profil', 0, '2019-05-27 13:42:43'),
(74, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 13:42:44'),
(75, 'bouboule', 'jainko visit youre profil', 0, '2019-05-27 13:51:33'),
(76, 'tyr', 'jainko visit youre profil', 0, '2019-05-27 13:51:35'),
(77, 'HH', 'jainko visit youre profil', 1, '2019-05-27 13:51:36'),
(78, 'le roi des math', 'jainko visit youre profil', 0, '2019-05-27 13:51:36'),
(79, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 13:51:38'),
(80, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 13:52:39'),
(81, 'jai', 'metentis visit youre profil', 1, '2019-05-27 13:53:08'),
(82, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 13:53:37'),
(83, 'jai', 'metentis visit youre profil', 1, '2019-05-27 13:55:25'),
(84, 'jai', 'metentis visit youre profil', 1, '2019-05-27 14:09:54'),
(85, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 14:16:26'),
(86, 'bouboule', 'jainko visit youre profil', 0, '2019-05-27 14:16:42'),
(87, 'tyr', 'jainko visit youre profil', 0, '2019-05-27 14:17:55'),
(88, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 14:20:00'),
(89, 'bouboule', 'jainko visit youre profil', 0, '2019-05-27 14:20:04'),
(90, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 14:21:17'),
(91, 'jai', 'metentis visit youre profil', 1, '2019-05-27 14:21:29'),
(92, 'jai', 'metentis send you a unlike', 1, '2019-05-27 14:21:31'),
(93, 'jai', 'metentis doesnt like you anymore', 1, '2019-05-27 14:21:31'),
(94, 'jai', 'metentis send you a like', 1, '2019-05-27 14:21:40'),
(95, 'jai', 'metentis send you a like and youre like him before so this is a match', 1, '2019-05-27 14:21:40'),
(96, 'jai', 'metentis visit youre profil', 1, '2019-05-27 14:39:57'),
(97, 'jai', 'metentis send you a unlike', 1, '2019-05-27 14:39:58'),
(98, 'jai', 'metentis doesnt like you anymore', 1, '2019-05-27 14:39:58'),
(99, 'jai', 'metentis visit youre profil', 1, '2019-05-27 14:40:12'),
(100, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 14:40:21'),
(101, 'bouboule', 'jainko visit youre profil', 0, '2019-05-27 14:41:11'),
(102, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 14:41:12'),
(103, 'tyr', 'metentis visit youre profil', 0, '2019-05-27 16:51:26'),
(104, 'jai', 'metentis visit youre profil', 1, '2019-05-27 16:52:03'),
(105, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:04:02'),
(106, 'bouboule', 'metentis visit youre profil', 0, '2019-05-27 17:04:24'),
(107, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:04:25'),
(108, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:05:15'),
(109, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:05:50'),
(110, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:06:33'),
(111, 'bouboule', 'metentis visit youre profil', 0, '2019-05-27 17:08:38'),
(112, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:10:58'),
(113, 'tyr', 'metentis visit youre profil', 0, '2019-05-27 17:11:00'),
(114, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:11:01'),
(115, 'le roi des math', 'metentis visit youre profil', 0, '2019-05-27 17:11:01'),
(116, 'tyr', 'metentis visit youre profil', 0, '2019-05-27 17:11:02'),
(117, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:11:02'),
(118, 'jai', 'metentis visit youre profil', 1, '2019-05-27 17:24:42'),
(119, 'jai', 'metentis visit youre profil', 1, '2019-05-27 17:51:51'),
(120, 'jai', 'metentis visit youre profil', 1, '2019-05-27 17:56:15'),
(121, 'bouboule', 'metentis visit youre profil', 0, '2019-05-27 17:57:02'),
(122, 'bouboule', 'metentis visit youre profil', 0, '2019-05-27 18:01:35'),
(123, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:12:29'),
(124, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:12:58'),
(125, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:13:46'),
(126, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:14:26'),
(127, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:15:49'),
(128, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:16:30'),
(129, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:17:11'),
(130, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:18:24'),
(131, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:08:37'),
(132, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 11:08:38'),
(133, 'tyr', 'metentis visit youre profil', 0, '2019-06-04 11:08:38'),
(134, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:17:01'),
(135, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 11:17:02'),
(136, 'tyr', 'metentis visit youre profil', 0, '2019-06-04 11:17:03'),
(137, 'HH', 'metentis visit youre profil', 1, '2019-06-04 11:17:04'),
(138, 'le roi des math', 'metentis visit youre profil', 0, '2019-06-04 11:17:04'),
(139, 'HH', 'metentis visit youre profil', 1, '2019-06-04 11:17:05'),
(140, 'tyr', 'metentis visit youre profil', 0, '2019-06-04 11:17:05'),
(141, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 11:17:06'),
(142, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:17:08'),
(143, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 11:30:57'),
(144, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 11:32:29'),
(145, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 11:32:58'),
(146, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 11:37:24'),
(147, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:38:36'),
(148, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 11:39:21'),
(149, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:45:39'),
(150, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 11:45:56'),
(151, 'jai', 'metentis visit youre profil', 1, '2019-06-04 12:35:09'),
(152, 'HH', 'metentis visit youre profil', 1, '2019-06-04 12:47:12'),
(153, 'test3', 'metentis visit youre profil', 0, '2019-06-04 12:56:14'),
(154, 'test2', 'metentis visit youre profil', 0, '2019-06-04 12:56:16'),
(155, 'test3', 'metentis visit youre profil', 0, '2019-06-04 12:56:18'),
(156, 'jai', 'metentis visit youre profil', 1, '2019-06-04 12:56:21'),
(157, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 12:56:30'),
(158, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 12:56:35'),
(159, 'tyr', 'metentis visit youre profil', 0, '2019-06-04 14:18:10'),
(160, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 14:18:11'),
(161, 'HH', 'metentis visit youre profil', 1, '2019-06-04 14:18:12'),
(162, 'bouboule', 'metentis visit youre profil', 0, '2019-06-04 14:19:13'),
(163, 'le roi des math', 'metentis visit youre profil', 0, '2019-06-04 19:54:42'),
(164, 'bouboule', 'jainko visit you\'re profil', 0, '2019-06-05 12:53:49'),
(165, 'bouboule', 'jainko visit you\'re profil', 0, '2019-06-05 12:53:51'),
(166, 'bouboule', 'jainko visit you\'re profil', 0, '2019-06-05 12:55:52'),
(167, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 12:58:37'),
(168, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:00:05'),
(169, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:01:20'),
(170, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:01:48'),
(171, 'bouboule', 'jainko visit you\'re profil', 0, '2019-06-05 13:01:48'),
(172, 'tyr', 'jainko visit you\'re profil', 0, '2019-06-05 13:01:49'),
(173, 'le roi des math', 'jainko visit you\'re profil', 0, '2019-06-05 13:01:49'),
(174, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:01:51'),
(175, 'tyr', 'You are new message from jainko', 0, '2019-06-05 13:08:52'),
(176, 'tyr', 'You are new message from jainko', 0, '2019-06-05 13:09:00'),
(177, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:20:59'),
(178, 'bouboule', 'jainko visit you\'re profil', 0, '2019-06-05 13:21:06'),
(179, 'tyr', 'jainko visit you\'re profil', 0, '2019-06-05 13:21:09'),
(180, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:21:12'),
(181, 'tyr', 'jainko visit you\'re profil', 0, '2019-06-05 13:21:13'),
(182, 'HH', 'You are new message from jainko', 1, '2019-06-05 14:08:03'),
(183, 'jai', 'You are new message from HH', 1, '2019-06-05 14:08:11'),
(184, 'jai', 'HH visit you\'re profil', 1, '2019-06-05 14:09:21'),
(185, 'metentis', 'HH visit you\'re profil', 1, '2019-06-05 14:09:38'),
(186, 'tyr', 'jainko visit you\'re profil', 0, '2019-06-05 14:10:50'),
(187, 'jai', 'HH visit you\'re profil', 1, '2019-06-05 14:11:09'),
(188, 'HH', 'jainko visit you\'re profil', 1, '2019-06-05 14:11:14'),
(189, 'jai', 'HH visit you\'re profil', 1, '2019-06-05 14:11:20'),
(190, 'jai', 'metentis visit you\'re profil', 1, '2019-06-07 09:54:45'),
(191, 'jai', 'metentis visit you\'re profil', 1, '2019-06-07 10:21:04'),
(192, 'jai', 'metentis visit you\'re profil', 1, '2019-06-07 10:26:15'),
(193, 'jai', 'metentis visit you\'re profil', 1, '2019-06-07 10:27:25'),
(194, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-07 10:27:27'),
(195, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-07 10:27:28'),
(196, 'HH', 'metentis visit you\'re profil', 1, '2019-06-07 10:27:28'),
(197, 'metentis', 'metentis visit you\'re profil', 1, '2019-06-07 10:27:30'),
(198, 'jai', 'metentis visit you\'re profil', 1, '2019-06-09 17:02:41'),
(199, 'jai', 'metentis visit you\'re profil', 1, '2019-06-09 17:04:37'),
(200, 'jai', 'metentis send you a like', 1, '2019-06-09 17:04:47'),
(201, 'jai', 'metentis send you a like and you\'re like him before so this is a match', 1, '2019-06-09 17:04:48'),
(202, 'jai', 'You are new message from metentis', 1, '2019-06-09 17:05:06'),
(203, 'metentis', 'You are new message from jai', 1, '2019-06-09 17:05:50'),
(204, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-09 17:06:23'),
(205, 'jai', 'metentis visit you\'re profil', 1, '2019-06-09 17:06:33'),
(206, 'test3', 'metentis visit you\'re profil', 0, '2019-06-09 17:49:27'),
(207, 'test3', 'metentis visit you\'re profil', 0, '2019-06-09 17:49:28'),
(208, 'test3', 'metentis visit you\'re profil', 0, '2019-06-09 17:49:29'),
(209, 'test2', 'metentis visit you\'re profil', 0, '2019-06-09 17:49:51'),
(210, 'tyr', 'jai visit you\'re profil', 0, '2019-06-09 17:54:48'),
(211, 'le roi des math', 'jai visit you\'re profil', 0, '2019-06-09 17:54:51'),
(212, 'test', 'jai visit you\'re profil', 0, '2019-06-09 17:54:54'),
(213, 'metentis', 'jai visit you\'re profil', 0, '2019-06-09 17:55:02'),
(214, 'undefined', 'metentis visit you\'re profil', 0, '2019-06-09 22:26:15'),
(215, 'metentis', 'metentis visit you\'re profil', 0, '2019-06-09 22:34:08'),
(216, 'metentis', 'metentis visit you\'re profil', 0, '2019-06-09 22:38:25'),
(217, 'jai', 'metentis visit you\'re profil', 0, '2019-06-09 22:39:22'),
(218, 'test3', 'metentis visit you\'re profil', 0, '2019-06-09 23:06:10'),
(219, 'jai', 'metentis visit you\'re profil', 0, '2019-06-09 23:10:48'),
(220, 'jai', 'metentis visit you\'re profil', 0, '2019-06-10 11:11:22'),
(221, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-10 11:11:23'),
(222, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 22:53:36'),
(223, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 22:53:38'),
(224, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 22:53:38'),
(225, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 22:53:39'),
(226, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 23:18:38'),
(227, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 23:18:38'),
(228, 'test4', 'metentis visit you\'re profil', 0, '2019-06-10 23:18:50'),
(229, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 23:18:52'),
(230, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-10 23:19:02'),
(231, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-10 23:19:03'),
(232, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-10 23:32:18');

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
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `picturesusers`
--

INSERT INTO `picturesusers` (`id`, `userId`, `picture`) VALUES
(179, '128', 'FR.jpg'),
(180, '128', 'CD.jpg'),
(181, '128', 'image2.jpeg'),
(183, '128', 'download.jpeg'),
(184, '129', 'image4.jpg');

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
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `profil`
--

INSERT INTO `profil` (`id`, `userName`, `password`, `email`, `lastName`, `firstName`, `confirmKey`, `confirmKeyOk`) VALUES
(128, 'metentis', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'sylvain.boeuf@free.fr', 'boeuf', 'sylvain', 8394950248921, 1),
(129, 'jai', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'florent.boeuf@free.fr', 'boeuf', 'florent', 6923653259421, 1),
(130, 'bouboule', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'audrey.boeuf@free.fr', 'boeuf', 'audrey', 7772988799848, 1),
(131, 'tyr', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'amandine.richard@free.fr', 'Richard', 'amandine', 9971396599816, 1),
(132, 'HH', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'dimitri.richard@free.fr', 'richard', 'dimitri', 2200237506864, 1),
(133, 'le roi des math', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'bruno.chatelain@free.fr', 'chatelin', 'bruno', 7136743763158, 1),
(134, 'test', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test@gmail.com', 'test', 'test', 3454300560392, 1),
(135, 'test2', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test2@gmail.com', 'test2', 'test2', 1677337025450, 1),
(136, 'test3', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test3@gmail.fr', 'test3', 'test3', 2376701668198, 1),
(137, 'test4', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'test4@gmail.com', 'test4', 'test4', 6037373664254, 1),
(139, 'coucou', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'coucoucou@gmail.com', 'coucou', 'coucou', 6981057521520, 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `profilmatch`
--

INSERT INTO `profilmatch` (`id`, `firstPerson`, `secondPerson`) VALUES
(11, 'tyr', 'metentis'),
(12, 'tyr', 'bouboule'),
(14, 'jai', 'tyr'),
(15, 'jai', 'HH'),
(16, 'metentis', 'jai');

-- --------------------------------------------------------

--
-- Structure de la table `userinfos`
--

DROP TABLE IF EXISTS `userinfos`;
CREATE TABLE IF NOT EXISTS `userinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `biography` text,
  `gender` varchar(255) NOT NULL DEFAULT 'Male',
  `orientation` varchar(255) NOT NULL DEFAULT 'Bisexuelle',
  `listInterest` text,
  `userLocation` text,
  `userApproximateLocation` text,
  `userAddress` text,
  `userApproximateCity` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `userinfos`
--

INSERT INTO `userinfos` (`id`, `userName`, `age`, `biography`, `gender`, `orientation`, `listInterest`, `userLocation`, `userApproximateLocation`, `userAddress`, `userApproximateCity`) VALUES
(1, 'metentis', 27, 'plus maintenannt', 'Femme', 'Homme', 'null#Movie#data processing#NigthParty#Sport#Manga', '48.80921180000001, 2.2395904', '48.8138, 2.235', '89A Rue de Paris, 92190 Meudon, France', 'Meudon'),
(2, 'jai', 22, 'jcavjlerabv', 'Male', 'Homme', 'null#Movie#Manga#Sport', '48.812461000000006, 2.246998', '48.8138, 2.235', '12BIS Rue du Docteur Vuillième, 92190 Meudon, France', 'Meudon'),
(3, 'bouboule', 29, 'vhkrueiubv', 'Male', 'Femme', 'null#data processing#NigthParty#Sport', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon'),
(6, 'tyr', 23, 'vsdvhuy', 'Male', 'Femme', 'null#Movie#Manga#Sport#NigthParty#data processing', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon'),
(7, 'HH', 30, 'null', 'Male', 'Homme', 'null#Manga#Sport', '48.8042, 2.2810200000000123', '48.8138, 2.235', '46 Rue Jean Jaurès, 92320 Châtillon, France', 'Meudon'),
(8, 'le roi des math', 39, 'ewfthyeg', 'Male', 'Homme', 'null#data processing#NigthParty#Sport#Manga#Movie', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon'),
(9, 'test', 50, 'ca bug', 'Femme', 'Femme', 'null#Sport#NigthParty', '48.8964, 2.3184499999999844', '48.8138, 2.235', '96 Boulevard Bessières, Paris 17e Arrondissement, France', 'Meudon'),
(10, 'test2', 60, 'testtsetsets', 'Male', 'Femme', 'null#Manga#NigthParty', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon'),
(12, 'test3', 70, NULL, 'Male', 'Bisexuelle', NULL, '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon'),
(13, 'test4', 10, 'htrhdghjydnjuyrj', 'Male', 'Bisexuelle', 'null#Manga#Sport', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon'),
(15, 'coucou', 46, NULL, 'Male', 'Bisexuelle', NULL, '48.812550200000004, 2.2469897999999997', '48.8138, 2.235', '12BIS Rue du Docteur Vuillième, 92190 Meudon, France', 'Meudon');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
