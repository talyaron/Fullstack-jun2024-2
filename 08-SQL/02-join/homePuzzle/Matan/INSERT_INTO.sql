INSERT INTO position (position_name) VALUES 
('שוער'),   
('בלם'),    
('מגן'),     
('קשר'),    
('חלוץ'); 


INSERT INTO clubs (club_name, club_country) VALUES
('מכבי חיפה', 'ישראל'),          
('הפועל תל אביב', 'ישראל'),       
('דינמו מוסקבה', 'רוסיה'),        
('פ.ס.וו איינדהובן', 'הולנד'),   
('סלטיק', 'סקוטלנד'),             
('שחטאר דונייצק', 'אוקראינה'),    
('וולבס', 'אנגליה'),              
('גנואה', 'איטליה'),              
('גנט', 'בלגיה'),                
('הפועל באר שבע', 'ישראל');       


INSERT INTO players (player_name, last_name, position_id, club_id) VALUES
('דניאל', 'פרץ', 1, 4 ),
('שון', 'גולדברג', 2, 1),
('אלי', 'דסה', 3, 3),
('אוסקר', 'גלוך', 4, 4),
('מנור', 'סולומון', 5, 7),
('יונתן', 'כהן', 4, 2),
('ליאל', 'אבאדה', 5, 5),
('דור', 'תורג׳מן', 5, 1),
('רוי', 'רביבו', 3, 2),
('עדן', 'קארצב', 4, 10),
('אוראל', 'דגני', 2, 2),
('איתן', 'אזולאי', 4, 1),
('אלון', 'חזום', 3, 10),
('סאן', 'מנחם', 3, 1),
('ניר', 'לקס', 4, 2);


INSERT INTO matches (location) VALUES 
('HOME'),    
('AWAY'),    
('NEUTRAL');  


INSERT INTO player_matches (player_id, match_id, is_starting) VALUES
(1, 1, TRUE),
(2, 1, TRUE),
(3, 1, TRUE),
(4, 1, TRUE),
(5, 1, FALSE),
(6, 1, FALSE),
(7, 1, TRUE),
(8, 1, TRUE),
(9, 1, FALSE),
(10, 1, TRUE),
(1, 2, TRUE),
(2, 2, TRUE),
(4, 2, FALSE),
(5, 2, TRUE),
(6, 2, FALSE),
(11, 2, TRUE),
(12, 2, FALSE),
(13, 2, TRUE),
(14, 2, TRUE),
(15, 2, FALSE);


SELECT * FROM position;
SELECT * FROM clubs;
SELECT * FROM players;
SELECT * FROM matches;
SELECT * FROM player_matches;
