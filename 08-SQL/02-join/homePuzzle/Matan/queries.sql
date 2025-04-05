-- הצגת כל השחקנים עם שם הקבוצה והעמדה
SELECT 
  p.player_id,
  p.player_name,
  p.last_name,
  pos.position_name,
  c.club_name,
  c.club_country
FROM players p
JOIN position pos ON p.position_id = pos.position_id
JOIN clubs c ON p.club_id = c.club_id;

-- הצגת כל המשחקים והאם
SELECT 
  match_id,
  location
FROM matches;

-- הצגת כל השחקנים ששיחקו במשחק מסוים 
SELECT 
  p.player_name,
  p.last_name,
  m.match_id,
  m.location,
  pm.is_starting
FROM player_matches pm
JOIN players p ON pm.player_id = p.player_id
JOIN matches m ON pm.match_id = m.match_id
WHERE m.match_id = 1;

--  הצגת כל השחקנים שלא פתחו בהרכב באף משחק
SELECT 
  p.player_name,
  p.last_name
FROM players p
WHERE p.player_id NOT IN (
  SELECT player_id
  FROM player_matches
  WHERE is_starting = TRUE
);

--  ספירת כמות שחקנים בכל עמדה
SELECT 
  pos.position_name,
  COUNT(*) AS num_players
FROM players p
JOIN position pos ON p.position_id = pos.position_id
GROUP BY pos.position_name;

--  כמות שחקנים בכל קבוצה
SELECT 
  c.club_name,
  COUNT(*) AS num_players
FROM players p
JOIN clubs c ON p.club_id = c.club_id
GROUP BY c.club_name
ORDER BY num_players DESC;


--  כל השחקנים ששיחקו לפחות משחק אחד
SELECT DISTINCT
  p.player_name,
  p.last_name
FROM players p
JOIN player_matches pm ON p.player_id = pm.player_id;

--  כל השחקנים שלא שיחקו באף משחק
SELECT 
  p.player_name,
  p.last_name
FROM players p
LEFT JOIN player_matches pm ON p.player_id = pm.player_id
WHERE pm.player_id IS NULL;

--  רשימת שחקנים, עמדה, קבוצה ומספר משחקים בהם שיחקו
SELECT 
    p.player_name,
    p.last_name,
    pos.position_name,
    c.club_name,
    COUNT(pm.match_id) AS matches_played
FROM
    players p
        JOIN
    position pos ON p.position_id = pos.position_id
        JOIN
    clubs c ON p.club_id = c.club_id
        LEFT JOIN
    player_matches pm ON p.player_id = pm.player_id
GROUP BY p.player_id , pos.position_name , c.club_name;
