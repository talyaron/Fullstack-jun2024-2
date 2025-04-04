CREATE DATABASE if not exists living; 

USE living;


CREATE TABLE living (
living_id int auto_increment,
user_id int not null,
PRIMARY KEY (living_id),
FOREIGN KEY (user_id) REFERENCES users(user_id), 
city varchar(50) not null ,
street varchar(50) not null,
house_number smallint not null,
floor_number smallint not null,
apartment_number smallint not null 
);

INSERT INTO living (user_id ,city, street, house_number, floor_number,apartment_number ) VALUES
(1, 'Haifa', 'St sade', 4, 2, 1),
(1, 'Haifa', 'St sun', 8, 3, 5);


