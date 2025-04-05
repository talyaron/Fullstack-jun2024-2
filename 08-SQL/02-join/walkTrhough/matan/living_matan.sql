CREATE DATABASE IF NOT EXISTS living__adress;
USE living__adress;

CREATE TABLE living(
living_id INT AUTO_INCREMENT PRIMARY KEY ,
user_id INT,
city  VARCHAR(30) NOT NULL,
street VARCHAR(30) NOT NULL,
house_number smallint ,
floor_number smallint,
apartment_number  smallint  ,
foreign key(user_id) references users(user_id)
);

DROP TABLE living;


INSERT INTO living (user_id, city, street, house_number, floor_number, apartment_number)
VALUES
(1, 'New York', '5th Avenue', 100, 2, 12),
(2, 'Los Angeles', 'Sunset Blvd', 200, 1, 5);

SELECT * FROM living;
