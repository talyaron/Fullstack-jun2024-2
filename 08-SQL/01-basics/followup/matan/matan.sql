CREATE DATABASE IF NOT EXISTS favorite_foods;
USE favorite_foods;

CREATE TABLE users(
	user_id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	middle_name VARCHAR(15) NOT NULL,
	email VARCHAR(60) NOT NULL UNIQUE,
	phone CHAR(12),
	birthday DATE NOT NULL
);

INSERT INTO users(first_name, last_name, middle_name, email, birthday) values
("matan", "benoon", "cohen", "matanbn1121@gmail.com", "1994-11-30");

SELECT * FROM users;

CREATE TABLE food (
	food_id INT AUTO_INCREMENT PRIMARY KEY,
	food_name VARCHAR(50) NOT NULL,
	type ENUM('fruit', 'vegetable', 'meat', 'halavi') NOT NULL,
	kosher_type ENUM('meat', 'dairy', 'parve', 'not-kosher') NOT NULL
);
ALTER TABLE food
ADD COLUMN kosher boolean not null;

INSERT INTO food (food_name, type, kosher_type, kosher) VALUES
('Apple', 'fruit', 'parve', true),
('pizza', 'halavi', 'dairy', false);

SELECT * FROM food;

create table users_foods(
	users_foods_id INT AUTO_INCREMENT PRIMARY KEY ,
	user_id INT ,
	food_id INT ,
	reaction ENUM('likes', 'dislikes', 'allergic') NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (food_id) REFERENCES food(food_id)
);



INSERT INTO users_foods (user_id, food_id, reaction) VALUES
(1, 1, 'likes'),
(1, 2, 'dislikes');

SELECT * FROM users_foods;

