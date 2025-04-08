
CREATE DATABASE IF NOT EXISTS food_storage;
USE food_storage;


CREATE TABLE storage_locations (
  location_id INT AUTO_INCREMENT PRIMARY KEY,
  location_name VARCHAR(50) NOT NULL,
  temperature_range VARCHAR(30),
  humidity_level VARCHAR(30),
  notes TEXT
);


CREATE TABLE foods (
  food_id INT AUTO_INCREMENT PRIMARY KEY,
  food_name VARCHAR(50) NOT NULL,
  category VARCHAR(30),
  quantity DECIMAL(5,2),
  unit VARCHAR(10),
  expiration_date DATE,
  purchase_date DATE,
  location_id INT,
  FOREIGN KEY (location_id) REFERENCES storage_locations(location_id)
    ON DELETE SET NULL
);

INSERT INTO storage_locations (location_name, temperature_range, humidity_level, notes)
VALUES
('Refrigerator', '0-4°C', 'Low', 'Main fridge'),
('Freezer', '-18°C', 'Low', 'Deep freezer'),
('Pantry', '15-25°C', 'Medium', 'Dry storage'),
('Basement', '10-15°C', 'Variable', 'Dark and cool');

INSERT INTO foods (food_name, category, quantity, unit, expiration_date, purchase_date, location_id)
VALUES
('Milk', 'Dairy', 1, 'L', '2025-04-10', '2025-04-01', 1),
('Chicken', 'Meat', 2, 'Kg', '2025-05-01', '2025-04-02', 2),
('Pasta', 'Grain', 3, 'Pack', '2026-01-01', '2025-03-25', 3),
('Apples', 'Fruit', 5, 'Units', '2025-04-09', '2025-04-03', 1),
('Cheese', 'Dairy', 0.5, 'Kg', '2025-04-15', '2025-04-01', 1);

SELECT 
  f.food_id,
  f.food_name,
  f.category,
  f.quantity,
  f.unit,
  f.expiration_date,
  f.purchase_date,
  s.location_name
FROM foods f
JOIN storage_locations s ON f.location_id = s.location_id;

DROP DATABASE IF EXISTS food_storage;

