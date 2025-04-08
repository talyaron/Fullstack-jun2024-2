CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE users(
user_id  INT AUTO_INCREMENT PRIMARY KEY,
username  VARCHAR(50) NOT NULL,
email  VARCHAR(100) NOT NULL UNIQUE ,
password  VARCHAR(30) NOT NULL
);


CREATE TABLE products(
product_id INT AUTO_INCREMENT PRIMARY KEY,
product_name  VARCHAR(50),
product_price  VARCHAR(50),
product_dec  MEDIUMTEXT,
product_img  VARCHAR(50)
);

CREATE TABLE orders(
order_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
product_id INT,
quantity TINYINT UNSIGNED ,
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (product_id) REFERENCES products(product_id)
);


