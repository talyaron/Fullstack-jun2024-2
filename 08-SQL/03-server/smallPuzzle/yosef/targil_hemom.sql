CREATE DATABASE IF NOT EXISTS ecommerce;

use ecommerce;

create table users(
user_id INT NOT NULL auto_increment primary key,
user_name varchar(100),
user_password varchar(100),
user_email varchar(200)
);

insert into users (user_name, user_password, user_email) values
('mosa','8520','mosa@gmail.com');

select * from users;

create table products(
products_id int not null auto_increment primary key,
products_name varchar(200),
products_price float,
products_description varchar(300),
products_imageUrl varchar(255)
);

insert into products (products_name, products_price, products_description, products_imageUrl) values
('LG laptop', 5000, 'number 1 in israel', 'httpf8-58ad1b05085e/md08000064-large05-jpg');

select * from products;

create table orders (
order_id int not null auto_increment primary key,
user_id int,
products_id int,
quantity int,
foreign key(user_id) references users(user_id) on delete cascade,
foreign key(products_id) references products(products_id) on delete cascade
);

insert into orders (user_id, products_id, quantity) values
(1,1,14);

select * from orders;

     SELECT
     u.user_name,
     p.products_name,
     p.products_price,
     o.quantity
     
FROM
    orders o
JOIN
	users u ON u.user_id = o.user_id
JOIN
    products p ON p.products_id = o.products_id






