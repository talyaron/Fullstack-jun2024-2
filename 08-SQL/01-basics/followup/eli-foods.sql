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

select * from foods