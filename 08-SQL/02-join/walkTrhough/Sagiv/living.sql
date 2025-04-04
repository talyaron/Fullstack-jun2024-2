CREATE DATABASE if not exists sagiv_living;

USE sagiv_living;

create table living(
living_id int primary key,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(user_id) ,
city varchar (50) not null,
street varchar(50) not null,
house_number SMALLINT,
floor_number SMALLINT,
apartment_number SMALLINT
);
