CREATE DATABASE if not exists my_database;
USE my_database;

CREATE TABLE living (
    living_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    city VARCHAR(20) NOT NULL,
    street VARCHAR(20) NOT NULL,
    house_number SMALLINT UNSIGNED NOT NULL,
    floor_number SMALLINT NOT NULL,
    apartment_number SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (user_id)
);

INSERT INTO living (user_id ,city, street, house_number, floor_number,apartment_number ) VALUES
(1, 'Jerusalem', 'St 3', 3, 20, 25),
(1, 'Haifa', 'St 56', 45, 2, 9);

SELECT * FROM living;