INSERT INTO users (username, email) VALUES
('נועה קירל', 'asd@example.com'),
('עומר אדם', 'asd1@example.com'),
('עדן בן זקן', 'asd2@example.com'),
('סטטיק', 'asd3@example.com'),
('בן אל', 'asd4@example.com');

INSERT INTO songs (title, genre, user_id) VALUES
('שיר האהבה', 'פופ', 1),
('הולך לים', 'דאנס', 2),
('מלכה של הרחבה', 'מזרחית', 3),
('טודו בום', 'פופ', 4),
('כביש החוף', 'ראפ', 5);

INSERT INTO competition_rounds (round_name, round_date) VALUES
('שלב אודישנים', '2024-06-09'),
('שלב חצי גמר', '2023-01-04'),
('שלב גמר', '2021-05-05');

INSERT INTO round_songs (round_id, song_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 1);

INSERT INTO votes (user_id, song_id) VALUES
(1, 2),
(2, 1),
(3, 3),
(4, 4),
(5, 5),
(1, 1);
