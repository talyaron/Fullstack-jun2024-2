create database if not exists eli_ecommerce;

use eli_ecommerce;


create table users(
    user_id int AUTO_INCREMENT primary key ;
    user_name varchar(50) not null;
    user_email varchar(50) not null unique;
    user_password varchar(60) not null; 
)

INSERT INTO users (
    user_name, 
    user_email, 
    user_password, 
) VALUES
    ("keren", "korn@walla.co.il", "kronot"),
    ("maya", "maya123@gmail.com", "mayapass"),
    ("itzik", "itzik@outlook.com", "itzik321"),
    ("lior", "lior@yahoo.com", "liorpass"),
    ("tamar", "tamar@walla.co.il", "tamar123"),
    ("doron", "doron@gmail.com", "dorondoron");

create table products(
    product_id int AUTO_INCREMENT primary key ;
    product_name varchar(50) not null;
    product_price int not null;
    product_description varchar(60) not null; 
    product_imgUrl varchar(120) not null;
)
create table user_products(
    user_id int ;
    product_id int ;
    product_quantity int not null
    foreign key (user_id) REFERENCES users (user_id),
    foreign key (product_id) REFERENCES products (product_id)
    ON DELETE CASCADE,
	UNIQUE KEY (product_id, user_id)
)
