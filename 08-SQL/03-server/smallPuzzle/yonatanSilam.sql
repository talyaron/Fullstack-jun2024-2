create database ecommerce;
use ecommerce;

create table users(
user_id int AUTO_INCREMENT PRIMARY KEY,
username varchar(50) not null,
password varchar(50) not null,
email varchar(50) not null unique
);

insert into users(username , password,email)
values ('yonatan' , '1234' , 'yonatan@gmail'),
('mom' ,'mom1234', 'mom@gmail'),
('dad','dad1234','dad@gmail');

create table product(
product_id int AUTO_INCREMENT PRIMARY KEY,
name varchar(50) not null,
price int unsigned not null,
description varchar(200) not null,
imageUrl varchar(255) not null
);

INSERT INTO product (name, price, description, imageUrl)
VALUES 
('Wireless Mouse', 299, 'Ergonomic wireless mouse with long battery life.', 'https://example.com/images/mouse.jpg'),
('Mechanical Keyboard', 599, 'RGB backlit mechanical keyboard with blue switches.', 'https://example.com/images/keyboard.jpg'),
('HD Monitor', 1099, '24-inch Full HD monitor with HDMI and DisplayPort.', 'https://example.com/images/monitor.jpg');

create table product(
product_id int AUTO_INCREMENT PRIMARY KEY,
name varchar(50) not null,
price int unsigned not null,
description varchar(200) not null,
imageUrl varchar(255) not null
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT UNSIGNED NOT NULL DEFAULT 1,

    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);