INSERT INTO users (username, email, password)
VALUES 
('alice123', 'alice@example.com', '$2b$10$ABCDEFG...'),
('bob2020', 'bob@example.com', '$2b$10$HIJKLMN...'),
('charlie88', 'charlie@example.com', '$2b$10$XYZ123...');

SELECT * FROM users;