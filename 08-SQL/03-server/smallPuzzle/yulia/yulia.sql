	CREATE DATABASE IF NOT EXISTS ecommerce;
    
    USE ecommerce;
    
    CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT primary key,
    username VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(50) NOT NULL UNIQUE,
    user_email VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
    
    INSERT INTO users (username, user_password, user_email) VALUES
    ('John Smith', '123qwerty', 'john@gmail.com'),
    ('Jane Smith', '333aaa', 'jane@gmail.com');
    
   CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL UNIQUE,
    product_price DECIMAL(10, 2) NOT NULL,
    product_description TEXT,
    product_image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
    
CREATE TABLE IF NOT EXISTS orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
    
    
    
    
    
    
    
    