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


