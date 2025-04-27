CREATE DATABASE IF NOT EXISTS Storage; 

USE Storage;

CREATE TABLE Storage(
    storage_id INT AUTO_INCREMENT,
    location_name VARCHAR(50) NOT NULL,
    temperature_range SMALLINT NOT NULL,
    humidity_level SMALLINT NOT NULL,
    notes VARCHAR(500) NOT NULL,
    creation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_stored DATE,
    PRIMARY KEY (storage_id)
);


INSERT INTO Storage (location_name, temperature_range, humidity_level, notes)
VALUES 
('Refrigerator', 4, 60, 'Fridge in kitchen'),
('Freezer', -18, 30, 'Main freezer'),
('Pantry', 22, 50, 'Dry goods storage'),
('Basement', 18, 65, 'Cool and dry'),
('Garage', 25, 70, 'Used occasionally');
