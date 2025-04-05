CREATE DATABASE IF NOT EXISTS songs;

USE songs;

CREATE TABLE Songs(
    song_id INT AUTO_INCREMENT,
    song_name VARCHAR(50) NOT NULL,
    realese_date DATE,
    PRIMARY KEY (GirlsAloud_id),
    FOREIGN KEY (songs_id) REFERENCES Storage.songs_id
        ON DELETE SET NULL
);

INSERT INTO GirlsAloud (song_id, song_name, release_date)
VALUES 
(1, 'Love Machine', ),
(2, 'something new'),
(3, 'Call the shots' ),
