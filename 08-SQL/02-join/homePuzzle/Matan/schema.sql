CREATE DATABASE football;
USE football;

CREATE TABLE position (
  position_id INT AUTO_INCREMENT PRIMARY KEY,
  position_name VARCHAR(30) NOT NULL
);

CREATE TABLE clubs (
  club_id INT AUTO_INCREMENT PRIMARY KEY,
  club_name VARCHAR(30),
  club_country VARCHAR(30)
);

CREATE TABLE players (
  player_id INT AUTO_INCREMENT PRIMARY KEY,
  player_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  position_id INT,
  FOREIGN KEY (position_id) REFERENCES position (position_id),
  club_id INT,
  FOREIGN KEY (club_id) REFERENCES clubs(club_id)
);

CREATE TABLE matches (
  match_id INT AUTO_INCREMENT PRIMARY KEY,
  location ENUM('HOME', 'AWAY', 'NEUTRAL') NOT NULL
);

CREATE TABLE player_matches (
  player_id INT NOT NULL,
  match_id INT NOT NULL,
  is_starting BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (player_id, match_id),
  FOREIGN KEY (player_id) REFERENCES players(player_id),
  FOREIGN KEY (match_id) REFERENCES matches(match_id)
);
