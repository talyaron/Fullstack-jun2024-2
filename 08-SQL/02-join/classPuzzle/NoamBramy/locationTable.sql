CREATE TABLE location (
 location_id INT AUTO_INCREMENT PRIMARY KEY,
 location_name ENUM('refrigerator', 'freezer', 'pantry') NOT NULL,
 temperature_min DECIMAL(5,2),
 temperature_max DECIMAL(5,2),
 humidity_level DECIMAL(5,2),
 notes VARCHAR(100) NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 )
