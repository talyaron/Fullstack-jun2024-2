create database if not exists Foods; 

USE foods;

CREATE TABLE foods(
food_id int auto_increment,
PRIMARY KEY (food_id),
food_name varchar(50) not null ,
food_type varchar(50) not null
);