CREATE TABLE living (
living_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
city VARCHAR(50) NOT NULL,
street VARCHAR(50) NOT NULL,
house_number SMALLINT UNSIGNED NOT NULL,
floor_number SMALLINT,
appartment_number SMALLINT UNSIGNED,
FOREIGN KEY (user_id) REFERENCES users (user_id)

);