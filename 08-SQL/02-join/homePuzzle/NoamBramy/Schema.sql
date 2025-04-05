-- טבלת USERS הזמרים בתחרות
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

-- יצירת טבלת השירים
CREATE TABLE songs (
    song_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    genre VARCHAR(50),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- יצירת טבלת סבבי התחרות
CREATE TABLE competition_rounds (
    round_id INT PRIMARY KEY AUTO_INCREMENT,
    round_name VARCHAR(50) NOT NULL,
    round_date DATE NOT NULL
);

-- טבלת חיבור בין שירים לסבבים(MANY TO MANY)
CREATE TABLE round_songs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    round_id INT,
    song_id INT,
    FOREIGN KEY (round_id) REFERENCES competition_rounds(round_id),
    FOREIGN KEY (song_id) REFERENCES songs(song_id)
);

-- טבלת הצבעות לשירים שאנשים מצביעים
CREATE TABLE votes (
    vote_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    song_id INT,
    vote_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (song_id) REFERENCES songs(song_id)
);