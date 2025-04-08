-- יצירת בסיס נתונים
CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

-- טבלת משתמשים
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL
);

-- הוספת משתמשים
INSERT INTO users (username, password, email) VALUES 
('Bob', '1234', 'bob@gmail.com'),
('Dov', '23445', 'dov@gmail.com');

-- טבלת מוצרים
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    description VARCHAR(500) NOT NULL,
    imageUrl VARCHAR(255) NOT NULL
);

-- הוספת מוצרים
INSERT INTO products (name, price, description, imageUrl) VALUES 
('Chair', 40, 'Beautiful chair', 'img/chair.jpg'),
('Desk', 60, 'Beautiful desk', 'img/desk.jpg');

-- טבלת הזמנות
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- הוספת הזמנות
INSERT INTO orders (user_id, product_id, quantity) VALUES
(1, 1, 2),  -- Bob הזמין 2 כיסאות
(2, 2, 1);  -- Dov הזמין שולחן אחד
