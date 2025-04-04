-- 1. Create the Storage Locations Table
CREATE TABLE storage_locations (
    location_id INT PRIMARY KEY AUTO_INCREMENT,
    location_name VARCHAR(50) NOT NULL,
    temperature_range VARCHAR(30),
    humidity_level VARCHAR(30),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Alter the Foods Table to Add Storage Location
-- This works with your existing structure:
-- food_id (INT, Primary Key)
-- food_name (VARCHAR(30), Not Null)
-- food_type (ENUM('fruit','vegetable',...))
-- kosher (TINYINT(1))
-- Try this version instead - breaking it into separate statements
ALTER TABLE foods
ADD COLUMN location_id INT;

ALTER TABLE foods
ADD COLUMN date_stored DATE DEFAULT (CURRENT_DATE);

ALTER TABLE foods
ADD CONSTRAINT fk_foods_storage
    FOREIGN KEY (location_id) 
    REFERENCES storage_locations(location_id)
    ON DELETE SET NULL; -- Using SET NULL means foods remain in database but become unassigned if a location is deleted

-- Populate storage locations with sample data
INSERT INTO storage_locations (location_name, temperature_range, humidity_level, notes) VALUES
('Refrigerator', '34°F - 40°F', 'Medium', 'Main kitchen refrigerator'),
('Freezer', '0°F - 10°F', 'Low', 'Attached to refrigerator'),
('Pantry', '50°F - 70°F', 'Low to Medium', 'Dry goods storage'),
('Basement Storage', '55°F - 65°F', 'Medium to High', 'Cool and dark for root vegetables'),
('Wine Cellar', '55°F - 59°F', 'Medium', 'Temperature controlled');

-- Update existing foods with storage locations
-- Replace food_id values with actual IDs from your foods table
UPDATE foods SET location_id = 1, date_stored = '2025-04-03' WHERE food_id = 1; -- Example: Apple in Refrigerator
UPDATE foods SET location_id = 1, date_stored = '2025-04-01' WHERE food_id = 2; -- Example: Milk in Refrigerator
UPDATE foods SET location_id = 2, date_stored = '2025-04-02' WHERE food_id = 3; -- Example: Frozen Berries in Freezer
UPDATE foods SET location_id = 3, date_stored = '2025-01-15' WHERE food_id = 4; -- Example: Canned Beans in Pantry
UPDATE foods SET location_id = 4, date_stored = '2025-03-28' WHERE food_id = 5; -- Example: Potatoes in Basement Storage

-- QUERY EXERCISES

-- 1. Find All Foods in a Specific Location
SELECT f.food_id, f.food_name, f.food_type, f.kosher, sl.location_name
FROM foods f
JOIN storage_locations sl ON f.location_id = sl.location_id
WHERE sl.location_name = 'Refrigerator'
ORDER BY f.food_name ASC;

-- 2. Find All Foods in a Type by Storage Location
SELECT sl.location_name, COUNT(*) as food_count
FROM foods f
JOIN storage_locations sl ON f.location_id = sl.location_id
WHERE f.food_type = 'fruit'
GROUP BY sl.location_name;

-- 3. Find Kosher Foods by Location
SELECT sl.location_name, COUNT(*) as kosher_food_count
FROM foods f
JOIN storage_locations sl ON f.location_id = sl.location_id
WHERE f.kosher = 1
GROUP BY sl.location_name;

-- 4. Total Inventory by Food Type
SELECT f.food_type, COUNT(*) as item_count
FROM foods f
GROUP BY f.food_type
ORDER BY item_count DESC;

-- 5. Find Empty Storage Locations
SELECT sl.location_name
FROM storage_locations sl
LEFT JOIN foods f ON sl.location_id = f.location_id
WHERE f.location_id IS NULL;

-- 6. Food Inventory with Storage Information
SELECT 
    f.food_id,
    f.food_name,
    f.food_type,
    CASE WHEN f.kosher = 1 THEN 'Yes' ELSE 'No' END as kosher,
    COALESCE(sl.location_name, 'Unassigned') as storage_location,
    f.date_stored
FROM foods f
LEFT JOIN storage_locations sl ON f.location_id = sl.location_id
ORDER BY sl.location_name, f.food_name;