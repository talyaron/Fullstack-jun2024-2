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

insert into living (user_id, city, street, house_number, floor_number, apprtment_number) values
('Michael', NULL, 'Brown', '555-789-0123', '1995-09-08');