CREATE DATABASE iconic_japanese_cars;

USE iconic_japanese_cars;



CREATE TABLE manufacturers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    manufacturer_id INT,
    FOREIGN KEY (manufacturer_id) REFERENCES manufacturers(id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE features (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE car_features (
    car_id INT,
    feature_id INT,
    PRIMARY KEY (car_id, feature_id),
    FOREIGN KEY (car_id) REFERENCES cars(id),
    FOREIGN KEY (feature_id) REFERENCES features(id)
);

CREATE TABLE favorites (
    user_id INT,
    car_id INT,
    PRIMARY KEY (user_id, car_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (car_id) REFERENCES cars(id)
);
INSERT INTO manufacturers (name) VALUES ('Toyota'), ('Nissan'), ('Mazda');

INSERT INTO cars (model, year, manufacturer_id) VALUES
('Supra MK4', 1998, 1),
('Skyline GT-R R34', 1999, 2),
('RX-7 FD', 2002, 3);

INSERT INTO users (username) VALUES ('akira'), ('hondaFan'), ('rx7lover');

INSERT INTO features (name) VALUES ('Turbocharged'), ('AWD'), ('Manual Transmission');

INSERT INTO car_features VALUES
(1, 1), (1, 3),
(2, 1), (2, 2), (2, 3),
(3, 1), (3, 3);

INSERT INTO favorites VALUES
(1, 1),
(2, 2),
(3, 3), (3, 1);
