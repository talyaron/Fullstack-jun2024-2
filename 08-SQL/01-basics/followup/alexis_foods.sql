CREATE DATABASE if not exists alexis_foods; 

USE alexis_foods;


create table people (
user_id int auto_increment primary key,
first_name varchar(50) not null,
middle_name varchar(12) ,
last_name varchar(50) not null,
date_of_birth date,
phone char(12)
);

insert into people (first_name, middle_name,  last_name, date_of_birth, phone) VALUES 
("Alexis", "" , "Vishnevezky", "1999-11-20", "0538999886");

