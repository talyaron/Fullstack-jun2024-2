CREATE DATABASE IF NOT EXISTS yulia_living;

USE yulia_living;

CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE
);

INSERT INTO users (username, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Charlie', 'charlie@example.org');

CREATE TABLE IF NOT EXISTS living (
    living_id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    city VARCHAR(50) NOT NULL,
    street VARCHAR(50) NOT NULL,
    house_number SMALLINT UNSIGNED NOT NULL,
    floor_number SMALLINT,
    apartment_number SMALLINT UNSIGNED,
    PRIMARY KEY (living_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO living (user_id, city, street, house_number, floor_number, apartment_number) VALUES
(1, 'New York', '5th Avenue', 10, 2, 5),
(2, 'Los Angeles', 'Sunset Boulevard', 20, 3, 10);

