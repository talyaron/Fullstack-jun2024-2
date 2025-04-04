USE my_database;

CREATE TABLE storage_locations (
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    location_name VARCHAR(50) NOT NULL DEFAULT "frizer",
    temperature_range SMALLINT,
    humidity_level SMALLINT,
    Notes VARCHAR(1000),
    Creation_time timestamp
);

INSERT INTO storage_locations (location_name, temperature_range, humidity_level, Notes)
VALUES 
('frizer', 20, 40, 'Used for storing dry food and canned goods.'),
('Refrigerator', 16, 60, 'Cool and humid; suitable for wine or long-term storage.'),
('Garage', 18, 50, 'Can be used for tools and bulk items'),
('Basement', 25, 30, 'Usually hot and dry'),
('Kitchen Cabinet', 22, 45, 'Ideal for everyday dishes, spices, and frequently used items.');