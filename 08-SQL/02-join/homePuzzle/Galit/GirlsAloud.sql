CREATE DATABASE IF NOT EXISTS GirlsAloudDB;

USE GirlsAloudDB;

CREATE TABLE GirlsAloud(
    GirlsAloud_id INT AUTO_INCREMENT,
    singer_first_name VARCHAR(50) NOT NULL,
    singer_middle_name VARCHAR(50) NOT NULL,
    singer_last_name VARCHAR(50) NOT NULL,
    singer_age INT NOT NULL,
    birth_day DATE,
    song_id INT,  
    PRIMARY KEY (GirlsAloud_id),
    FOREIGN KEY (song_id) REFERENCES SongsDB.Songs(song_id)
        ON DELETE SET NULL
);

INSERT INTO GirlsAloud (singer_first_name, singer_middle_name, singer_last_name, singer_age, birth_day, song_id)
VALUES 
('Cheryl', 'Ann', 'Tweedy', 42, '1983-06-30', 1),
('Nadine', 'Elizabeth Louise', 'Coyle', 39, '1985-06-15', 2),
('Nicola', 'Maria', 'Roberts', 39, '1985-10-05', 3),
('Sarah', 'Nicole', 'Harding', 43, '1981-11-17', 1),
('Kimberley', 'Jane', 'Walsh', 43, '1981-11-20', 2);
