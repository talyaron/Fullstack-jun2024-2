CREATE DATABASE IF NOT EXISTS galits_foods;

USE galits_foods;

create table users (
	user_id int auto_increment primary key,
	first_name varchar (50) not null,
	middle_name varchar (12),
	last_name varchar (50) not null,
	year_of_birth date not null,
	phone char (12)
);

insert into users (first_name, middle_name, last_name, year_of_birth, phone) values
("Galit",  null, "Lioutrin", "1997-12-15", "0500000");

select * from users;

-- add foods

create table foods (
food_id int auto_increment primary key,
food_name varchar (50) not null,
food_type ENUM('fruit', 'vegetable', 'meat','desert', 'main')
);

insert into  foods(food_name, food_type) values
('pasta', 'main'),
('salad', 'vegetable'),
('apple', 'fruit');

select * from foods;

create table users_foods (
user_food_id int not null auto_increment primary key,
user_id int not null,
food_id int not null,
love_level float not null,
 CHECK (love_level >= -1 AND love_level <= 1),

 
   FOREIGN KEY (food_id) REFERENCES foods(food_id) ON DELETE CASCADE, 
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

drop table users_foods;

SELECT * FROM users;
SELECT * FROM foods;
SELECT * FROM users_foods; 


