-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Mag 23, 2021 alle 15:19
-- Versione del server: 10.4.18-MariaDB
-- Versione PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `poolparty`
--

DELIMITER $$
--
-- Procedure
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `conta_abbonamenti` (IN `nome` VARCHAR(255))  begin
SELECT COUNT(*) as num_abbonamenti 
FROM archivio_clienti 
where user = nome
group by user;
end$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `conta_lezioni` (IN `nome` VARCHAR(255))  begin
SELECT COUNT(*) as num_lezioni_pvt 
FROM `archivio_lezioni_private` 
where user = nome
group by user;
end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Struttura della tabella `archivio_clienti`
--

CREATE TABLE `archivio_clienti` (
  `user` varchar(255) NOT NULL,
  `piscina_id` int(16) DEFAULT NULL,
  `inizio` date NOT NULL,
  `fine` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `archivio_clienti`
--

INSERT INTO `archivio_clienti` (`user`, `piscina_id`, `inizio`, `fine`) VALUES
('Hento', 5, '2021-01-13', '2021-02-13'),
('Hento', 5, '2021-03-19', '2021-04-19');

-- --------------------------------------------------------

--
-- Struttura della tabella `archivio_lezioni_private`
--

CREATE TABLE `archivio_lezioni_private` (
  `user` varchar(255) NOT NULL,
  `ID_istruttore` int(16) DEFAULT NULL,
  `ID_piscina` int(16) DEFAULT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `archivio_lezioni_private`
--

INSERT INTO `archivio_lezioni_private` (`user`, `ID_istruttore`, `ID_piscina`, `data`) VALUES
('damiano', 1, 1, '2021-05-15'),
('damiano', 6, 1, '2021-05-20'),
('damiano', 1, 1, '2021-05-21'),
('damiano', 6, 1, '2021-05-22'),
('Hento', 1, 1, '2021-05-15'),
('Hento', 1, 1, '2021-05-19'),
('Hento', 2, 4, '2021-05-20'),
('Hento', 10, 4, '2021-05-22');

-- --------------------------------------------------------

--
-- Struttura della tabella `cliente`
--

CREATE TABLE `cliente` (
  `Nome` varchar(255) DEFAULT NULL,
  `Cognome` varchar(255) DEFAULT NULL,
  `Data_nascita` date DEFAULT NULL,
  `Eta` int(11) DEFAULT NULL,
  `inizio` date DEFAULT NULL,
  `account_id` varchar(255) NOT NULL,
  `piscina_id` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `cliente`
--

INSERT INTO `cliente` (`Nome`, `Cognome`, `Data_nascita`, `Eta`, `inizio`, `account_id`, `piscina_id`) VALUES
('Damiano', 'Di Rosolini', '2008-01-19', 13, '2021-05-19', 'damiano', 5),
('Enricomaria', 'Di Rosolini', '1999-01-13', 22, '2021-05-20', 'Hento', 1);

--
-- Trigger `cliente`
--
DELIMITER $$
CREATE TRIGGER `aggiorna_eta` BEFORE INSERT ON `cliente` FOR EACH ROW Set new.Eta = year(CURRENT_DATE) - year(new.Data_nascita)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `archivio_abbonamenti` AFTER DELETE ON `cliente` FOR EACH ROW insert into archivio_clienti
(user, piscina_id, inizio, fine) 
values(old.account_id, old.piscina_id, old.inizio, date_add(old.inizio, interval 31 day))
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struttura della tabella `istruttore`
--

CREATE TABLE `istruttore` (
  `ID` int(16) NOT NULL,
  `Nome` varchar(255) DEFAULT NULL,
  `Cognome` varchar(255) DEFAULT NULL,
  `descrizione` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `istruttore`
--

INSERT INTO `istruttore` (`ID`, `Nome`, `Cognome`, `descrizione`) VALUES
(1, 'Enricomaria', 'Di Rosolini', 'Studente presso il dipartimento DIEEI'),
(2, 'Silvia', 'Salemi', 'Studentessa presso il dipartimento DISUM'),
(3, 'Alexandru', 'Cosma', 'Studente presso l\'Istituto Archimede'),
(4, 'Luis', 'Plechuk', 'Studente presso l\'Istituto Archimede'),
(5, 'Giorgio', 'Spadola', 'Studente presso l\'Istituto Archimede'),
(6, 'Santo', 'Gugliotta', 'Studente presso l\'Istituto Calleri'),
(7, 'Paolo', 'Micieli', 'Studente presso l\'Istituto Calleri'),
(8, 'Giulia', 'Bertolo', 'Studente presso l\'Istituto Archimede'),
(9, 'Greta', 'Pirruccio', 'Studentessa presso UniCT'),
(10, 'Antonio', 'Conti', 'Studente presso l\'Istituto Calleri'),
(11, 'Alessio', 'Buccheri', 'Lavora presso cannolificio Micieli'),
(12, 'Giuseppe', 'Di Lorenzo', 'Studente della facolta\' di Scienze Motorie'),
(13, 'Davide', 'Modica', 'Studente presso l\'Istituto Archimede'),
(14, 'Francesca', 'Cavallo', 'Studentessa presso l\'Istituto Calleri'),
(15, 'Chiara', 'Fratantonio', 'Studentessa presso l\'Istituto Calleri');

-- --------------------------------------------------------

--
-- Struttura stand-in per le viste `istruttori_lavorano`
-- (Vedi sotto per la vista effettiva)
--
CREATE TABLE `istruttori_lavorano` (
`ID_istruttore` int(16)
,`Nome` varchar(255)
,`Cognome` varchar(255)
,`descrizione` varchar(255)
,`ID_piscina` int(16)
,`Nome_piscina` varchar(255)
,`ID_citta` int(11)
,`Citta` varchar(255)
,`Via` varchar(255)
);

-- --------------------------------------------------------

--
-- Struttura della tabella `lavorano`
--

CREATE TABLE `lavorano` (
  `ID_istruttore` int(16) NOT NULL,
  `ID_piscina` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `lavorano`
--

INSERT INTO `lavorano` (`ID_istruttore`, `ID_piscina`) VALUES
(1, 1),
(4, 1),
(6, 1),
(7, 1),
(8, 2),
(12, 2),
(3, 3),
(9, 3),
(2, 4),
(5, 4),
(10, 4),
(13, 4),
(11, 5),
(14, 5),
(15, 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `lezione_privata`
--

CREATE TABLE `lezione_privata` (
  `user` varchar(255) NOT NULL,
  `ID_istruttore` int(16) DEFAULT NULL,
  `ID_piscina` int(16) DEFAULT NULL,
  `data` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `lezione_privata`
--

INSERT INTO `lezione_privata` (`user`, `ID_istruttore`, `ID_piscina`, `data`) VALUES
('Hento', 4, 1, '2021-05-23');

--
-- Trigger `lezione_privata`
--
DELIMITER $$
CREATE TRIGGER `archivio_lezioni_pvt` AFTER DELETE ON `lezione_privata` FOR EACH ROW insert into archivio_lezioni_private
(user, ID_istruttore, ID_piscina, data) 
values(old.user, old.ID_istruttore, old.ID_piscina, old.data)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struttura della tabella `luogo`
--

CREATE TABLE `luogo` (
  `ID` int(11) NOT NULL,
  `Citta` varchar(255) DEFAULT NULL,
  `Via` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `luogo`
--

INSERT INTO `luogo` (`ID`, `Citta`, `Via`) VALUES
(1, 'Pozzallo', 'Via Solferino 927'),
(2, 'Catania', 'Via So Lillo 324'),
(3, 'Acate', 'Via Lillo 224'),
(4, 'Catania', 'Via Etnea 56'),
(5, 'Rosolini', 'Via Sipione 382');

-- --------------------------------------------------------

--
-- Struttura della tabella `piscina_aziendale`
--

CREATE TABLE `piscina_aziendale` (
  `ID` int(16) NOT NULL,
  `Nome` varchar(255) DEFAULT NULL,
  `ID_citta` int(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `piscina_aziendale`
--

INSERT INTO `piscina_aziendale` (`ID`, `Nome`, `ID_citta`) VALUES
(1, 'Mockingbird', 1),
(2, 'Dalla Pellegrini', 2),
(3, 'Dal Gabbiano', 5),
(4, 'Perla Nera', 4),
(5, 'Heat Waves', 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `user` varchar(16) NOT NULL,
  `pass` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`user`, `pass`) VALUES
('damiano', '$2y$10$bN4lVxIgv29krysvjOSS3eS9mfp4to.kV7dAjXJsdaRr5WhEY1kzK'),
('Hento', '$2y$10$dspipSIXyGolViKXIyrSbOqHEghZRCucILT.aOGIH4QkKDvDnYhzS');

-- --------------------------------------------------------

--
-- Struttura per vista `istruttori_lavorano`
--
DROP TABLE IF EXISTS `istruttori_lavorano`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `istruttori_lavorano`  AS   (select `istruttore`.`ID` AS `ID_istruttore`,`istruttore`.`Nome` AS `Nome`,`istruttore`.`Cognome` AS `Cognome`,`istruttore`.`descrizione` AS `descrizione`,`piscina_aziendale`.`ID` AS `ID_piscina`,`piscina_aziendale`.`Nome` AS `Nome_piscina`,`luogo`.`ID` AS `ID_citta`,`luogo`.`Citta` AS `Citta`,`luogo`.`Via` AS `Via` from (((`istruttore` join `lavorano`) join `piscina_aziendale`) join `luogo` on(`istruttore`.`ID` = `lavorano`.`ID_istruttore` and `lavorano`.`ID_piscina` = `piscina_aziendale`.`ID` and `piscina_aziendale`.`ID_citta` = `luogo`.`ID`)))  ;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `archivio_clienti`
--
ALTER TABLE `archivio_clienti`
  ADD PRIMARY KEY (`user`,`inizio`),
  ADD KEY `piscina_id` (`piscina_id`);

--
-- Indici per le tabelle `archivio_lezioni_private`
--
ALTER TABLE `archivio_lezioni_private`
  ADD PRIMARY KEY (`user`,`data`),
  ADD KEY `ID_istruttore` (`ID_istruttore`),
  ADD KEY `ID_piscina` (`ID_piscina`);

--
-- Indici per le tabelle `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`account_id`),
  ADD KEY `piscina_id` (`piscina_id`);

--
-- Indici per le tabelle `istruttore`
--
ALTER TABLE `istruttore`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `lavorano`
--
ALTER TABLE `lavorano`
  ADD PRIMARY KEY (`ID_istruttore`),
  ADD KEY `ID_piscina` (`ID_piscina`);

--
-- Indici per le tabelle `lezione_privata`
--
ALTER TABLE `lezione_privata`
  ADD PRIMARY KEY (`user`,`data`),
  ADD KEY `ID_istruttore` (`ID_istruttore`),
  ADD KEY `ID_piscina` (`ID_piscina`);

--
-- Indici per le tabelle `luogo`
--
ALTER TABLE `luogo`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `piscina_aziendale`
--
ALTER TABLE `piscina_aziendale`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_citta` (`ID_citta`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`user`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `istruttore`
--
ALTER TABLE `istruttore`
  MODIFY `ID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT per la tabella `luogo`
--
ALTER TABLE `luogo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `piscina_aziendale`
--
ALTER TABLE `piscina_aziendale`
  MODIFY `ID` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `archivio_clienti`
--
ALTER TABLE `archivio_clienti`
  ADD CONSTRAINT `archivio_clienti_ibfk_1` FOREIGN KEY (`user`) REFERENCES `utenti` (`user`) ON UPDATE CASCADE,
  ADD CONSTRAINT `archivio_clienti_ibfk_2` FOREIGN KEY (`piscina_id`) REFERENCES `piscina_aziendale` (`ID`) ON UPDATE CASCADE;

--
-- Limiti per la tabella `archivio_lezioni_private`
--
ALTER TABLE `archivio_lezioni_private`
  ADD CONSTRAINT `archivio_lezioni_private_ibfk_1` FOREIGN KEY (`user`) REFERENCES `utenti` (`user`) ON UPDATE CASCADE,
  ADD CONSTRAINT `archivio_lezioni_private_ibfk_2` FOREIGN KEY (`ID_istruttore`) REFERENCES `istruttore` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `archivio_lezioni_private_ibfk_3` FOREIGN KEY (`ID_piscina`) REFERENCES `piscina_aziendale` (`ID`) ON UPDATE CASCADE;

--
-- Limiti per la tabella `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `utenti` (`user`) ON UPDATE CASCADE,
  ADD CONSTRAINT `cliente_ibfk_2` FOREIGN KEY (`piscina_id`) REFERENCES `piscina_aziendale` (`ID`) ON UPDATE CASCADE;

--
-- Limiti per la tabella `lavorano`
--
ALTER TABLE `lavorano`
  ADD CONSTRAINT `lavorano_ibfk_1` FOREIGN KEY (`ID_istruttore`) REFERENCES `istruttore` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `lavorano_ibfk_2` FOREIGN KEY (`ID_piscina`) REFERENCES `piscina_aziendale` (`ID`) ON UPDATE CASCADE;

--
-- Limiti per la tabella `lezione_privata`
--
ALTER TABLE `lezione_privata`
  ADD CONSTRAINT `lezione_privata_ibfk_1` FOREIGN KEY (`user`) REFERENCES `utenti` (`user`) ON UPDATE CASCADE,
  ADD CONSTRAINT `lezione_privata_ibfk_2` FOREIGN KEY (`ID_istruttore`) REFERENCES `istruttore` (`ID`) ON UPDATE CASCADE,
  ADD CONSTRAINT `lezione_privata_ibfk_3` FOREIGN KEY (`ID_piscina`) REFERENCES `piscina_aziendale` (`ID`) ON UPDATE CASCADE;

--
-- Limiti per la tabella `piscina_aziendale`
--
ALTER TABLE `piscina_aziendale`
  ADD CONSTRAINT `piscina_aziendale_ibfk_1` FOREIGN KEY (`ID_citta`) REFERENCES `luogo` (`ID`);

DELIMITER $$
--
-- Eventi
--
CREATE DEFINER=`root`@`localhost` EVENT `Pulita_lezioni_private` ON SCHEDULE EVERY 1 MINUTE STARTS '2021-05-18 17:23:43' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'pulisco i dati' DO delete from lezione_privata
where data  < CURRENT_DATE()$$

CREATE DEFINER=`root`@`localhost` EVENT `Pulita_mensili` ON SCHEDULE EVERY 1 MINUTE STARTS '2021-05-19 10:28:17' ON COMPLETION NOT PRESERVE ENABLE COMMENT 'pulisco i dati' DO delete from cliente
where date_add(inizio, interval 31 day) < current_date$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
