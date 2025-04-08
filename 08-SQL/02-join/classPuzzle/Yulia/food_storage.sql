CREATE DATABASE IF NOT EXISTS food_storage;

USE food_storage;

CREATE TABLE IF NOT EXISTS storage_locations (
    location_id INT PRIMARY KEY AUTO_INCREMENT,
    location_name VARCHAR(50) NOT NULL UNIQUE,
    temperature_range VARCHAR(50),
    humidity_level VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------------------------------
-- 2. Existing Foods Table 
-- -----------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS foods (
    food_id INT PRIMARY KEY AUTO_INCREMENT,
    food_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    quantity DECIMAL(10, 2),
    unit VARCHAR(20),
    expiration_date DATE,
    purchase_date DATE
);

-- -----------------------------------------------------------------------------
-- 3. Alter the Foods Table to Add Storage Location
-- -----------------------------------------------------------------------------
ALTER TABLE foods
ADD COLUMN location_id INT;

ALTER TABLE foods
ADD CONSTRAINT fk_food_location
FOREIGN KEY (location_id) REFERENCES storage_locations(location_id)
ON DELETE SET NULL; -- Using SET NULL as the ON DELETE behavior

ALTER TABLE foods
ADD COLUMN date_stored TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- -----------------------------------------------------------------------------
-- ## Sample Data Requirements
-- -----------------------------------------------------------------------------

-- -----------------------------------------------------------------------------
-- 1. Add Storage Locations
-- -----------------------------------------------------------------------------
INSERT INTO storage_locations (location_name, temperature_range) VALUES
('Refrigerator', '0-5°C'),
('Freezer', '< -18°C'),
('Pantry', 'Ambient, Dry'),
('Basement Storage', 'Cool, Variable Humidity'),
('Spice Rack', 'Ambient');

-- -----------------------------------------------------------------------------
-- 2. Add Foods
-- -----------------------------------------------------------------------------
INSERT INTO foods (food_name, category, quantity, unit, expiration_date, purchase_date) VALUES
('Milk', 'Dairy', 1, 'Liter', '2025-04-18', '2025-04-04'),
('Ground Beef', 'Meat', 0.5, 'kg', '2025-04-06', '2025-04-04'),
('Tomatoes', 'Vegetable', 3, 'Count', '2025-04-12', '2025-04-03'),
('Loaf of Bread', 'Bakery', 1, 'Loaf', '2025-04-07', '2025-04-04'),
('Cheddar Cheese', 'Dairy', 200, 'grams', '2025-04-25', '2025-04-01'),
('Frozen Broccoli', 'Vegetable', 1, 'kg', '2026-01-15', '2025-03-15'),
('Dried Basil', 'Spice', 50, 'grams', '2026-12-31', '2024-12-01');

-- -----------------------------------------------------------------------------
-- 3. Update Foods with Storage Locations
-- -----------------------------------------------------------------------------
SELECT food_id, food_name FROM foods WHERE food_name IN ('Milk', 'Tomatoes', 'Cheddar Cheese');
SELECT food_id, food_name FROM foods WHERE food_name = 'Ground Beef';
SELECT food_id, food_name FROM foods WHERE food_name = 'Loaf of Bread';
SELECT food_id, food_name FROM foods WHERE food_name = 'Frozen Broccoli';
SELECT food_id, food_name FROM foods WHERE food_name = 'Dried Basil';

UPDATE foods
SET location_id = (SELECT location_id FROM storage_locations WHERE location_name = 'Refrigerator')
WHERE food_id IN (1, 3, 5); -- Milk, Tomatoes, Cheddar Cheese

UPDATE foods
SET location_id = (SELECT location_id FROM storage_locations WHERE location_name = 'Freezer')
WHERE food_id = 2; -- Ground Beef

UPDATE foods
SET location_id = (SELECT location_id FROM storage_locations WHERE location_name = 'Kitchen Counter')
WHERE food_id = 4; -- Loaf of Bread

UPDATE foods
SET location_id = (SELECT location_id FROM storage_locations WHERE location_name = 'Freezer')
WHERE food_id = 6; -- Frozen Broccoli

UPDATE foods
SET location_id = (SELECT location_id FROM storage_locations WHERE location_name = 'Spice Rack')
WHERE food_id = 7; -- Dried Basil

-- -----------------------------------------------------------------------------
-- ## Query Exercises
-- -----------------------------------------------------------------------------

-- -----------------------------------------------------------------------------
-- 1. Find All Foods in a Specific Location
-- -----------------------------------------------------------------------------
SELECT
    f.food_name,
    f.category,
    f.quantity,
    f.unit,
    f.expiration_date
FROM
    foods f
JOIN
    storage_locations sl ON f.location_id = sl.location_id
WHERE
    sl.location_name = 'Refrigerator';

-- -----------------------------------------------------------------------------
-- 2. Find All Foods in a Category by Storage Location
-- -----------------------------------------------------------------------------
SELECT
    sl.location_name,
    f.food_name,
    f.quantity,
    f.unit,
    f.expiration_date
FROM
    foods f
JOIN
    storage_locations sl ON f.location_id = sl.location_id
WHERE
    f.category = 'Dairy'
ORDER BY
    sl.location_name;

-- -----------------------------------------------------------------------------
-- 3. Find Items Nearing Expiration (within the next 7 days)
-- -----------------------------------------------------------------------------
SELECT
    food_name,
    expiration_date
FROM
    foods
WHERE
    expiration_date BETWEEN CURRENT_DATE AND DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY)
ORDER BY
    expiration_date;

-- -----------------------------------------------------------------------------
-- 4. Total Inventory by Category
-- -----------------------------------------------------------------------------
SELECT
    category,
    SUM(quantity) AS total_quantity
FROM
    foods
GROUP BY
    category;

-- -----------------------------------------------------------------------------
-- 5. Find Empty Storage Locations
-- -----------------------------------------------------------------------------
SELECT
    sl.location_name
FROM
    storage_locations sl
LEFT JOIN
    foods f ON sl.location_id = f.location_id
WHERE
    f.food_id IS NULL;