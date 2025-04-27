CREATE DATABASE IF NOT EXISTS SongsDB;

USE SongsDB;

CREATE TABLE Songs(
    song_id INT AUTO_INCREMENT,
    song_name VARCHAR(50) NOT NULL,
    release_date DATE,
    PRIMARY KEY (song_id)
);

INSERT INTO Songs (song_name, release_date)
VALUES 
('The Promise', '2008-10-19'),
('Sound of the Underground', '2002-12-16'),
('Biology', '2005-10-17'),
('No Good Advice', '2003-05-12'),
('Sexy! No No No...', '2007-08-30');
