CREATE DATABASE if not exists sagiv_foods;

USE sagiv_foods;

create table users(
user_id int auto_increment primary key,
first_name varchar(50),
middle_name varchar (12),
last_name varchar(50) not null,
date_of_birth date,
phone char(12)
);

insert into users (first_name, last_name, date_of_birth, phone) values
("Tal", "Yaron", "2006-02-01", "0522127818");

select * from users;