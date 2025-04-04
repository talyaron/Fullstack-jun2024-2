
-- מציג את שם השיר, הסגנון ושם המשתמש
SELECT s.title, s.genre, u.username
FROM songs s
JOIN users u ON s.user_id = u.user_id
WHERE u.username = 'עומר אדם';

-- מציג את שם השיר ומספר ההצבעות שקיבל
SELECT s.title, COUNT(v.vote_id) AS vote_count
FROM songs s
LEFT JOIN votes v ON s.song_id = v.song_id
GROUP BY s.title;

-- מיון שירים לפי כמות הצבעות מהכי הרבה להכי מעט
SELECT s.title, COUNT(v.vote_id) AS vote_count
FROM songs s
LEFT JOIN votes v ON s.song_id = v.song_id
GROUP BY s.title
ORDER BY vote_count DESC;

-- מספר שירים לכל זמר
SELECT u.username, COUNT(s.song_id) AS total_songs
FROM users u
LEFT JOIN songs s ON u.user_id = s.user_id
GROUP BY u.username;

-- מציאת שירים שהשתתפו ביותר מסבב אחד
SELECT s.title, COUNT(rs.round_id) AS round_count
FROM songs s
JOIN round_songs rs ON s.song_id = rs.song_id
GROUP BY s.song_id
HAVING round_count > 1;