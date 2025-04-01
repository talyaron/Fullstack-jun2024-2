CREATE DATABASE IF NOT EXISTS eli_foods;
USE eli_foods;

CREATE TABLE foods (
    food_id INT AUTO_INCREMENT PRIMARY KEY,
    food_name VARCHAR(50) NOT NULL unique,
   food_descriptions VARCHAR(100) NOT NULL
);
ALTER TABLE foods 
ADD COLUMN food_group ENUM("vegetables", "fruits", "meats", "fish") NOT NULL;
CREATE TABLE users (
	user_id INT AUTO_INCREMENT PRIMARY KEY,
	user_name VARCHAR(50) not null,
	user_email VARCHAR(50) NOT NULL unique,
    user_password VARCHAR(100) NOT NULL,
    user_create_date date not null
);
CREATE TABLE users_foods_join (
users_foods_join_id INT AUTO_INCREMENT PRIMARY KEY,
	user_id int not null,
	food_id int not null,
    food_rank float,
    foreign key (user_id) REFERENCES users (user_id),
	foreign key (user_id) REFERENCES users (user_id)
    ON DELETE CASCADE,
	UNIQUE KEY (food_id, user_id)
);
INSERT INTO users_foods_join (user_id, food_id, food_rank) VALUES
(1, 1, -1), 
(1, 2, 0), 
(1, 3, 1), 
(12, 1, 0), 
(12, 2, -1), 
(12, 3, 1), 
(13, 1, -0.5), 
(13, 2, 1), 
(13, 3, 0);
INSERT INTO foods (food_name,food_descriptions,food_group)values(
"banana","yellow peel","fruits"),
(
"chicken wings","spicy wings","meats"),
(
"ribeye steak","medium rare","meats");
INSERT INTO users (
    user_name, 
    user_email, 
    user_password, 
    user_create_date
) VALUES
    ("keren", "korn@walla.co.il", "kronot", "1979-12-06"),
    ("doron", "doron@gmail.com", "dorondoron", "2002-05-02");

select * from users;
select * from foods;
select * from users_foods_join;