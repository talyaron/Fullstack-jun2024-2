CREATE DATABASE if not exists best_foods;

USE best_foods;

create table users (
	user_id int auto_increment primary key,
	first_name varchar(50) not null,
	middle_name varchar(12),
	last_name varchar(50) not null,
	date_of_birth date,
	phone char(12) 
);

-- update table
ALTER TABLE users
MODIFY COLUMN date_of_birth date NOT NULL;

-- delete column date_of_birth
alter table users
drop column date_of_birth;

alter table users
add column date_of_birth date;

insert into users (first_name, middle_name, last_name, date_of_birth, phone) VALUES
("Pola", null,"Ben-Gurion", "1896-10-16", "00000000");

-- delete record
delete from users where user_id = 1;

select * from users;


-- add food table, with the follwing fields: food_name, type (fruit or vegtable, meat, etc.(ENUM('active', 'inactive', 'pending') NOT NULL)), kosher type (meat, diart, Parve, not-kosher), color
CREATE TABLE foods (
    food_id INT NOT NULL AUTO_INCREMENT primary key,
    food_name VARCHAR(30) NOT NULL,
    food_type ENUM('fruit', 'vegetable', 'meat', 'halavi'),
    status ENUM('kosher', 'no-kosher')    
);

alter table foods
drop column status;

alter table foods
add column kosher boolean not null;

insert into foods (food_name, food_type, kosher) values
("Sour Tomato", "vegetable", true),
("Kalamari","meat", false);

select * from foods;

create table users_foods (
	user_food_id int not null auto_increment primary key,
    user_id int not null,
    food_id int not null,
    love_level float not null,
	FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (food_id) REFERENCES foods(food_id) ON DELETE CASCADE,
    check (love_level >= -1 and love_level <= 1)
);





