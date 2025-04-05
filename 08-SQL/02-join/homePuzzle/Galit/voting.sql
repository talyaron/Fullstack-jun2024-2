CREATE DATABASE IF NOT EXISTS Voting;

USE Voting;

CREATE TABLE Listeners (
    listener_id INT AUTO_INCREMENT,
    listener_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (listener_id)
);

CREATE TABLE Votes (
    vote_id INT AUTO_INCREMENT,
    listener_id INT NOT NULL,
    song_id INT NOT NULL,
    vote_date DATE NOT NULL,
    PRIMARY KEY (vote_id),
    FOREIGN KEY (listener_id) REFERENCES VotingDB.Listeners(listener_id),
    FOREIGN KEY (song_id) REFERENCES SongsDB.Songs(song_id)
);

INSERT INTO Listeners (listener_name)
VALUES 
('Alice'),
('Bob'),
('Charlie'),
('Diana'),
('Eve');

INSERT INTO Votes (listener_id, song_id, vote_date)
VALUES
(1, 1, '2025-04-01'), 
(2, 2, '2025-04-02'),
(3, 3, '2025-04-02'), 
(4, 4, '2025-04-03'), 
(5, 5, '2025-04-04'); 
