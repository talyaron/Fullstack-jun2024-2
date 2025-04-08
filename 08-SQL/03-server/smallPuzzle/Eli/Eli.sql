create database if not exists eli_ecommerce;

use eli_ecommerce;


create table users(
    user_id int AUTO_INCREMENT primary key ,
    user_name varchar(50) not null,
    user_email varchar(50) not null unique,
    user_password varchar(60) not null
);

INSERT INTO users (
    user_name, 
    user_email, 
    user_password
) VALUES
    ("keren", "korn@walla.co.il", "kronot"),
    ("maya", "maya123@gmail.com", "mayapass"),
    ("itzik", "itzik@outlook.com", "itzik321"),
    ("lior", "lior@yahoo.com", "liorpass"),
    ("tamar", "tamar@walla.co.il", "tamar123"),
    ("doron", "doron@gmail.com", "dorondoron");

create table products(
    product_id int AUTO_INCREMENT primary key ,
    product_name varchar(50) not null,
    product_price DECIMAL(10,2) not null,
    product_description varchar(60) not null,
    product_imgUrl varchar(120) not null
);
create table user_products(
    user_id int ,
    product_id int ,
    product_quantity int not null,
    foreign key (user_id) REFERENCES users (user_id),
    foreign key (product_id) REFERENCES products (product_id)
    ON DELETE CASCADE,
	UNIQUE KEY (product_id, user_id)
);
INSERT INTO products (
    product_name, 
    product_price , 
    product_description, 
    product_imgUrl
) VALUES
 ("Turbo Muffler", 299, "High-performance muffler for sports cars", "img/products/muffler.jpg"),
    ("Carbon Fiber Spoiler", 450, "Lightweight and aerodynamic rear spoiler", "img/products/spoiler.jpg"),
    ("Racing Steering Wheel", 200, "Custom grip racing wheel with quick release", "img/products/steering.jpg"),
    ("LED Headlights", 130, "Bright and efficient LED headlights set", "img/products/headlights.jpg"),
    ("Alloy Wheels Set", 799, "18-inch alloy wheels for enhanced style", "img/products/wheels.jpg"),
    ("Performance Air Filter", 90, "Reusable high-flow air filter", "img/products/airfilter.jpg");
    

INSERT INTO user_products (user_id, product_id, product_quantity) 
VALUES
(1, 1, 2),
(1, 2, 1),
(2, 3, 1),
(3, 4, 3),
(4, 5, 1),
(5, 6, 2);

SELECT * FROM user_products;
    select * from users;
	select * from products;

    SELECT 
    u.user_name,
    p.product_name,
    up.product_quantity
FROM user_products up
JOIN users u ON up.user_id = u.user_id
JOIN products p ON up.product_id = p.product_id;