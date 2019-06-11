-- phpMyAdmin SQL Dump
-- version 4.5.5.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost:3306
-- Généré le :  Mar 11 Juin 2019 à 05:17
-- Version du serveur :  5.6.29
-- Version de PHP :  5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

CREATE TABLE `fakeuser` (
  `id` int(11) NOT NULL,
  `fakeUser` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `fakeuser`
--

INSERT INTO `fakeuser` (`id`, `fakeUser`) VALUES
(1, 'HH'),
(2, 'tyr');

-- --------------------------------------------------------

--
-- Structure de la table `inlineuser`
--

CREATE TABLE `inlineuser` (
  `id` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `inline` int(11) NOT NULL DEFAULT '0',
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `inlineuser`
--

INSERT INTO `inlineuser` (`id`, `user`, `inline`, `date`) VALUES
(1, 'metentis', 0, '2019-06-11 13:57:19'),
(2, 'jai', 0, '2019-06-09 17:06:08'),
(3, 'HH', 0, '2019-06-09 00:13:25'),
(4, 'tyr', 0, '2019-06-09 00:12:53'),
(5, 'bouboule', 1, '2019-06-11 10:23:36'),
(6, 'le roi des math', 0, '2019-06-09 00:13:39');

-- --------------------------------------------------------

--
-- Structure de la table `likeuser`
--

CREATE TABLE `likeuser` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `profilName` varchar(255) NOT NULL,
  `likeUser` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `likeuser`
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
(46, 'jai', 'HH', 1);

-- --------------------------------------------------------

--
-- Structure de la table `listblockprofil`
--

CREATE TABLE `listblockprofil` (
  `id` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `blockProfil` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `listblockprofil`
--

INSERT INTO `listblockprofil` (`id`, `user`, `blockProfil`) VALUES
(3, 'jai', 'tyr'),
(4, 'jai', 'le roi des math'),
(5, 'jai', 'test'),
(6, 'jai', 'metentis'),
(8, 'metentis', 'bouboule');

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `fromUser` varchar(255) DEFAULT NULL,
  `toUser` varchar(255) DEFAULT NULL,
  `message` text,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `messages`
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

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `notificationUser` varchar(255) NOT NULL,
  `notificationType` text NOT NULL,
  `notificationRead` int(11) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `notifications`
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
(72, 'bouboule', 'jainko visit youre profil', 1, '2019-05-27 13:42:42'),
(73, 'tyr', 'jainko visit youre profil', 0, '2019-05-27 13:42:43'),
(74, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 13:42:44'),
(75, 'bouboule', 'jainko visit youre profil', 1, '2019-05-27 13:51:33'),
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
(86, 'bouboule', 'jainko visit youre profil', 1, '2019-05-27 14:16:42'),
(87, 'tyr', 'jainko visit youre profil', 0, '2019-05-27 14:17:55'),
(88, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 14:20:00'),
(89, 'bouboule', 'jainko visit youre profil', 1, '2019-05-27 14:20:04'),
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
(101, 'bouboule', 'jainko visit youre profil', 1, '2019-05-27 14:41:11'),
(102, 'metentis', 'jainko visit youre profil', 1, '2019-05-27 14:41:12'),
(103, 'tyr', 'metentis visit youre profil', 0, '2019-05-27 16:51:26'),
(104, 'jai', 'metentis visit youre profil', 1, '2019-05-27 16:52:03'),
(105, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:04:02'),
(106, 'bouboule', 'metentis visit youre profil', 1, '2019-05-27 17:04:24'),
(107, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:04:25'),
(108, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:05:15'),
(109, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:05:50'),
(110, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:06:33'),
(111, 'bouboule', 'metentis visit youre profil', 1, '2019-05-27 17:08:38'),
(112, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:10:58'),
(113, 'tyr', 'metentis visit youre profil', 0, '2019-05-27 17:11:00'),
(114, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:11:01'),
(115, 'le roi des math', 'metentis visit youre profil', 0, '2019-05-27 17:11:01'),
(116, 'tyr', 'metentis visit youre profil', 0, '2019-05-27 17:11:02'),
(117, 'HH', 'metentis visit youre profil', 1, '2019-05-27 17:11:02'),
(118, 'jai', 'metentis visit youre profil', 1, '2019-05-27 17:24:42'),
(119, 'jai', 'metentis visit youre profil', 1, '2019-05-27 17:51:51'),
(120, 'jai', 'metentis visit youre profil', 1, '2019-05-27 17:56:15'),
(121, 'bouboule', 'metentis visit youre profil', 1, '2019-05-27 17:57:02'),
(122, 'bouboule', 'metentis visit youre profil', 1, '2019-05-27 18:01:35'),
(123, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:12:29'),
(124, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:12:58'),
(125, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:13:46'),
(126, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:14:26'),
(127, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:15:49'),
(128, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:16:30'),
(129, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:17:11'),
(130, 'jai', 'metentis visit youre profil', 1, '2019-05-27 18:18:24'),
(131, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:08:37'),
(132, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 11:08:38'),
(133, 'tyr', 'metentis visit youre profil', 0, '2019-06-04 11:08:38'),
(134, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:17:01'),
(135, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 11:17:02'),
(136, 'tyr', 'metentis visit youre profil', 0, '2019-06-04 11:17:03'),
(137, 'HH', 'metentis visit youre profil', 1, '2019-06-04 11:17:04'),
(138, 'le roi des math', 'metentis visit youre profil', 0, '2019-06-04 11:17:04'),
(139, 'HH', 'metentis visit youre profil', 1, '2019-06-04 11:17:05'),
(140, 'tyr', 'metentis visit youre profil', 0, '2019-06-04 11:17:05'),
(141, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 11:17:06'),
(142, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:17:08'),
(143, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 11:30:57'),
(144, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 11:32:29'),
(145, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 11:32:58'),
(146, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 11:37:24'),
(147, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:38:36'),
(148, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 11:39:21'),
(149, 'jai', 'metentis visit youre profil', 1, '2019-06-04 11:45:39'),
(150, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 11:45:56'),
(151, 'jai', 'metentis visit youre profil', 1, '2019-06-04 12:35:09'),
(152, 'HH', 'metentis visit youre profil', 1, '2019-06-04 12:47:12'),
(153, 'test3', 'metentis visit youre profil', 0, '2019-06-04 12:56:14'),
(154, 'test2', 'metentis visit youre profil', 0, '2019-06-04 12:56:16'),
(155, 'test3', 'metentis visit youre profil', 0, '2019-06-04 12:56:18'),
(156, 'jai', 'metentis visit youre profil', 1, '2019-06-04 12:56:21'),
(157, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 12:56:30'),
(158, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 12:56:35'),
(159, 'tyr', 'metentis visit youre profil', 0, '2019-06-04 14:18:10'),
(160, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 14:18:11'),
(161, 'HH', 'metentis visit youre profil', 1, '2019-06-04 14:18:12'),
(162, 'bouboule', 'metentis visit youre profil', 1, '2019-06-04 14:19:13'),
(163, 'le roi des math', 'metentis visit youre profil', 0, '2019-06-04 19:54:42'),
(164, 'bouboule', 'jainko visit you\'re profil', 1, '2019-06-05 12:53:49'),
(165, 'bouboule', 'jainko visit you\'re profil', 1, '2019-06-05 12:53:51'),
(166, 'bouboule', 'jainko visit you\'re profil', 1, '2019-06-05 12:55:52'),
(167, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 12:58:37'),
(168, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:00:05'),
(169, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:01:20'),
(170, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:01:48'),
(171, 'bouboule', 'jainko visit you\'re profil', 1, '2019-06-05 13:01:48'),
(172, 'tyr', 'jainko visit you\'re profil', 0, '2019-06-05 13:01:49'),
(173, 'le roi des math', 'jainko visit you\'re profil', 0, '2019-06-05 13:01:49'),
(174, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:01:51'),
(175, 'tyr', 'You are new message from jainko', 0, '2019-06-05 13:08:52'),
(176, 'tyr', 'You are new message from jainko', 0, '2019-06-05 13:09:00'),
(177, 'metentis', 'jainko visit you\'re profil', 1, '2019-06-05 13:20:59'),
(178, 'bouboule', 'jainko visit you\'re profil', 1, '2019-06-05 13:21:06'),
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
(194, 'bouboule', 'metentis visit you\'re profil', 1, '2019-06-07 10:27:27'),
(195, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-07 10:27:28'),
(196, 'HH', 'metentis visit you\'re profil', 1, '2019-06-07 10:27:28'),
(197, 'metentis', 'metentis visit you\'re profil', 1, '2019-06-07 10:27:30'),
(198, 'jai', 'metentis visit you\'re profil', 1, '2019-06-09 17:02:41'),
(199, 'jai', 'metentis visit you\'re profil', 1, '2019-06-09 17:04:37'),
(200, 'jai', 'metentis send you a like', 1, '2019-06-09 17:04:47'),
(201, 'jai', 'metentis send you a like and you\'re like him before so this is a match', 1, '2019-06-09 17:04:48'),
(202, 'jai', 'You are new message from metentis', 1, '2019-06-09 17:05:06'),
(203, 'metentis', 'You are new message from jai', 1, '2019-06-09 17:05:50'),
(204, 'bouboule', 'metentis visit you\'re profil', 1, '2019-06-09 17:06:23'),
(205, 'jai', 'metentis visit you\'re profil', 1, '2019-06-09 17:06:33'),
(206, 'test3', 'metentis visit you\'re profil', 0, '2019-06-09 17:49:27'),
(207, 'test3', 'metentis visit you\'re profil', 0, '2019-06-09 17:49:28'),
(208, 'test3', 'metentis visit you\'re profil', 0, '2019-06-09 17:49:29'),
(209, 'test2', 'metentis visit you\'re profil', 0, '2019-06-09 17:49:51'),
(210, 'tyr', 'jai visit you\'re profil', 0, '2019-06-09 17:54:48'),
(211, 'le roi des math', 'jai visit you\'re profil', 0, '2019-06-09 17:54:51'),
(212, 'test', 'jai visit you\'re profil', 0, '2019-06-09 17:54:54'),
(213, 'metentis', 'jai visit you\'re profil', 1, '2019-06-09 17:55:02'),
(214, 'undefined', 'metentis visit you\'re profil', 0, '2019-06-09 22:26:15'),
(215, 'metentis', 'metentis visit you\'re profil', 1, '2019-06-09 22:34:08'),
(216, 'metentis', 'metentis visit you\'re profil', 1, '2019-06-09 22:38:25'),
(217, 'jai', 'metentis visit you\'re profil', 0, '2019-06-09 22:39:22'),
(218, 'test3', 'metentis visit you\'re profil', 0, '2019-06-09 23:06:10'),
(219, 'jai', 'metentis visit you\'re profil', 0, '2019-06-09 23:10:48'),
(220, 'jai', 'metentis visit you\'re profil', 0, '2019-06-10 11:11:22'),
(221, 'bouboule', 'metentis visit you\'re profil', 1, '2019-06-10 11:11:23'),
(222, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 22:53:36'),
(223, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 22:53:38'),
(224, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 22:53:38'),
(225, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 22:53:39'),
(226, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 23:18:38'),
(227, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 23:18:38'),
(228, 'test4', 'metentis visit you\'re profil', 0, '2019-06-10 23:18:50'),
(229, 'test', 'metentis visit you\'re profil', 0, '2019-06-10 23:18:52'),
(230, 'bouboule', 'metentis visit you\'re profil', 1, '2019-06-10 23:19:02'),
(231, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-10 23:19:03'),
(232, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-10 23:32:18'),
(233, 'test', 'metentis visit you\'re profil', 0, '2019-06-11 10:07:47'),
(234, 'bouboule', 'metentis visit you\'re profil', 1, '2019-06-11 10:10:24'),
(235, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-11 10:10:29'),
(236, 'HH', 'metentis visit you\'re profil', 0, '2019-06-11 10:10:31'),
(237, 'le roi des math', 'metentis visit you\'re profil', 0, '2019-06-11 10:10:32'),
(238, 'le roi des math', 'metentis visit you\'re profil', 0, '2019-06-11 10:11:08'),
(239, 'bouboule', 'metentis visit you\'re profil', 1, '2019-06-11 10:12:49'),
(240, 'HH', 'metentis visit you\'re profil', 0, '2019-06-11 10:13:19'),
(241, 'le roi des math', 'metentis visit you\'re profil', 0, '2019-06-11 10:13:26'),
(242, 'test', 'metentis visit you\'re profil', 0, '2019-06-11 10:14:34'),
(243, 'test', 'metentis visit you\'re profil', 0, '2019-06-11 10:14:34'),
(244, 'bouboule', 'metentis visit you\'re profil', 1, '2019-06-11 10:15:10'),
(245, 'test2', 'metentis visit you\'re profil', 0, '2019-06-11 10:15:39'),
(246, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-11 10:16:45'),
(247, 'bouboule', 'metentis visit you\'re profil', 1, '2019-06-11 10:16:45'),
(248, 'bouboule', 'metentis visit you\'re profil', 1, '2019-06-11 10:17:35'),
(249, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-11 10:21:01'),
(250, 'jai', 'metentis visit you\'re profil', 0, '2019-06-11 10:21:37'),
(251, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-11 10:21:38'),
(252, 'bouboule', 'metentis send you a like', 0, '2019-06-11 10:21:40'),
(253, 'bouboule', 'metentis send you a like and you\'re like him before so this is a match', 0, '2019-06-11 10:21:40'),
(254, 'bouboule', 'metentis send you a unlike', 0, '2019-06-11 10:21:55'),
(255, 'bouboule', 'metentis doesn\'t like you anymore', 0, '2019-06-11 10:21:55'),
(256, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-11 10:22:32'),
(257, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-11 10:22:54'),
(258, 'HH', 'metentis visit you\'re profil', 0, '2019-06-11 10:23:02'),
(259, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-11 10:23:10'),
(260, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-11 10:23:23'),
(261, 'tyr', 'bouboule visit you\'re profil', 0, '2019-06-11 10:23:33'),
(262, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-11 10:29:07'),
(263, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-11 10:29:44'),
(264, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-11 10:30:24'),
(265, 'jai', 'metentis visit you\'re profil', 0, '2019-06-11 10:31:49'),
(266, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-11 10:31:49'),
(267, 'tyr', 'metentis visit you\'re profil', 0, '2019-06-11 11:01:32'),
(268, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-11 11:02:54'),
(269, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-11 11:03:10'),
(270, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 11:03:49'),
(271, 'metentis', 'bouboule send you a like', 1, '2019-06-11 11:03:51'),
(272, 'metentis', 'bouboule send you a like and you\'re like him before so this is a match', 1, '2019-06-11 11:03:51'),
(273, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 11:07:53'),
(274, 'metentis', 'bouboule send you a like', 1, '2019-06-11 11:07:55'),
(275, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 11:08:59'),
(276, 'metentis', 'bouboule send you a like', 1, '2019-06-11 11:09:01'),
(277, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:09:05'),
(278, 'jai', 'bouboule send you a like', 0, '2019-06-11 11:09:07'),
(279, 'jai', 'bouboule send you a like and you\'re like him before so this is a match', 0, '2019-06-11 11:09:07'),
(280, 'jai', 'bouboule send you a like', 0, '2019-06-11 11:09:46'),
(281, 'jai', 'bouboule send you a like', 0, '2019-06-11 11:10:42'),
(282, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 11:13:06'),
(283, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:13:20'),
(284, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:14:12'),
(285, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:14:12'),
(286, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:14:52'),
(287, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:16:51'),
(288, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 11:19:29'),
(289, 'metentis', 'bouboule send you a like', 1, '2019-06-11 11:19:31'),
(290, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 11:25:47'),
(291, 'metentis', 'bouboule send you a like', 1, '2019-06-11 11:25:48'),
(292, 'metentis', 'bouboule send you a like', 1, '2019-06-11 11:25:57'),
(293, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:26:02'),
(294, 'jai', 'bouboule send you a like', 0, '2019-06-11 11:26:03'),
(295, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 11:27:41'),
(296, 'metentis', 'bouboule send you a like', 1, '2019-06-11 11:27:42'),
(297, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:27:54'),
(298, 'jai', 'bouboule send you a like', 0, '2019-06-11 11:27:56'),
(299, 'jai', 'bouboule send you a unlike', 0, '2019-06-11 11:27:59'),
(300, 'jai', 'bouboule doesn\'t like you anymore', 0, '2019-06-11 11:27:59'),
(301, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 11:36:59'),
(302, 'tyr', 'bouboule visit you\'re profil', 0, '2019-06-11 11:44:17'),
(303, 'tyr', 'bouboule visit you\'re profil', 0, '2019-06-11 11:45:21'),
(304, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:45:23'),
(305, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 11:45:24'),
(306, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 11:45:25'),
(307, 'tyr', 'bouboule visit you\'re profil', 0, '2019-06-11 12:16:53'),
(308, 'tyr', 'bouboule visit you\'re profil', 0, '2019-06-11 12:16:53'),
(309, 'HH', 'bouboule visit you\'re profil', 0, '2019-06-11 12:16:54'),
(310, 'tyr', 'bouboule visit you\'re profil', 0, '2019-06-11 12:16:54'),
(311, 'jai', 'bouboule visit you\'re profil', 0, '2019-06-11 12:16:56'),
(312, 'metentis', 'bouboule visit you\'re profil', 1, '2019-06-11 12:16:56'),
(313, 'bouboule', 'metentis visit you\'re profil', 0, '2019-06-11 13:27:18');

-- --------------------------------------------------------

--
-- Structure de la table `picturesusers`
--

CREATE TABLE `picturesusers` (
  `id` int(11) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `picture` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `picturesusers`
--

INSERT INTO `picturesusers` (`id`, `userId`, `picture`) VALUES
(179, '128', 'FR.jpg'),
(180, '128', 'CD.jpg'),
(181, '128', 'image2.jpeg'),
(183, '128', 'download.jpeg'),
(184, '129', 'image4.jpg'),
(185, '141', 'image4.jpg'),
(186, '142', 'image4.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `profil`
--

CREATE TABLE `profil` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `confirmKey` bigint(20) NOT NULL,
  `confirmKeyOk` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `profil`
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
(142, 'batman', '88d093c646a6ab751441641f00f01bfbd9104c9a804e4a72e03c36eb4ca3247d', 'sylvain.boeuf@free.fr', 'Wayne', 'Bruce', 7960381791630, 1);

-- --------------------------------------------------------

--
-- Structure de la table `profilmatch`
--

CREATE TABLE `profilmatch` (
  `id` int(11) NOT NULL,
  `firstPerson` varchar(255) NOT NULL,
  `secondPerson` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `profilmatch`
--

INSERT INTO `profilmatch` (`id`, `firstPerson`, `secondPerson`) VALUES
(11, 'tyr', 'metentis'),
(12, 'tyr', 'bouboule'),
(14, 'jai', 'tyr'),
(15, 'jai', 'HH'),
(16, 'metentis', 'jai'),
(17, 'bouboule', 'metentis');

-- --------------------------------------------------------

--
-- Structure de la table `userinfos`
--

CREATE TABLE `userinfos` (
  `id` int(11) NOT NULL,
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
  `populareScore` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `userinfos`
--

INSERT INTO `userinfos` (`id`, `userName`, `age`, `biography`, `gender`, `orientation`, `listInterest`, `userLocation`, `userApproximateLocation`, `userAddress`, `userApproximateCity`, `populareScore`) VALUES
(1, 'metentis', 27, 'plus maintenannt', 'Femme', 'Homme', 'null#Movie#data processing#NigthParty#Sport#Manga', '48.80921180000001, 2.2395904', '48.8574, 2.3795', '89A Rue de Paris, 92190 Meudon, France', 'Paris', 100),
(2, 'jai', 22, 'jcavjlerabv', 'Male', 'Homme', 'null#Movie#Manga#Sport', '48.812461000000006, 2.246998', '48.8138, 2.235', '12BIS Rue du Docteur Vuillième, 92190 Meudon, France', 'Meudon', 50),
(3, 'bouboule', 29, 'vhkrueiubv', 'Male', 'Femme', 'null#data processing#NigthParty#Sport', '48.8079933, 2.2396035999999997', '48.8574, 2.3795', '2bis Rue Servien, 92190 Meudon, France', 'Paris', 0),
(6, 'tyr', 23, 'vsdvhuy', 'Male', 'Femme', 'null#Movie#Manga#Sport#NigthParty#data processing', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon', 0),
(7, 'HH', 30, 'null', 'Male', 'Homme', 'null#Manga#Sport', '48.8042, 2.2810200000000123', '48.8138, 2.235', '46 Rue Jean Jaurès, 92320 Châtillon, France', 'Meudon', 0),
(8, 'le roi des math', 39, 'ewfthyeg', 'Male', 'Homme', 'null#data processing#NigthParty#Sport#Manga#Movie', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon', 0),
(9, 'test', 50, 'ca bug', 'Femme', 'Femme', 'null#Sport#NigthParty', '48.8964, 2.3184499999999844', '48.8138, 2.235', '96 Boulevard Bessières, Paris 17e Arrondissement, France', 'Meudon', 0),
(10, 'test2', 60, 'testtsetsets', 'Male', 'Femme', 'null#Manga#NigthParty', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon', 0),
(12, 'test3', 70, NULL, 'Male', 'Bisexuelle', NULL, '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon', 0),
(13, 'test4', 10, 'htrhdghjydnjuyrj', 'Male', 'Bisexuelle', 'null#Manga#Sport', '48.8079933, 2.2396035999999997', '48.8138, 2.235', '2bis Rue Servien, 92190 Meudon, France', 'Meudon', 0),
(15, 'coucou', 46, NULL, 'Male', 'Bisexuelle', NULL, '48.812550200000004, 2.2469897999999997', '48.8138, 2.235', '12BIS Rue du Docteur Vuillième, 92190 Meudon, France', 'Meudon', 0),
(18, 'batman', 0, 'null', 'Male', 'Bisexuelle', 'null#Sport#data processing#NigthParty', NULL, '48.8574, 2.3795', NULL, 'Paris', 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `fakeuser`
--
ALTER TABLE `fakeuser`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `inlineuser`
--
ALTER TABLE `inlineuser`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `likeuser`
--
ALTER TABLE `likeuser`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `listblockprofil`
--
ALTER TABLE `listblockprofil`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `picturesusers`
--
ALTER TABLE `picturesusers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `profil`
--
ALTER TABLE `profil`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `profilmatch`
--
ALTER TABLE `profilmatch`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `userinfos`
--
ALTER TABLE `userinfos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `fakeuser`
--
ALTER TABLE `fakeuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `inlineuser`
--
ALTER TABLE `inlineuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT pour la table `likeuser`
--
ALTER TABLE `likeuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT pour la table `listblockprofil`
--
ALTER TABLE `listblockprofil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=314;
--
-- AUTO_INCREMENT pour la table `picturesusers`
--
ALTER TABLE `picturesusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;
--
-- AUTO_INCREMENT pour la table `profil`
--
ALTER TABLE `profil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;
--
-- AUTO_INCREMENT pour la table `profilmatch`
--
ALTER TABLE `profilmatch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT pour la table `userinfos`
--
ALTER TABLE `userinfos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
