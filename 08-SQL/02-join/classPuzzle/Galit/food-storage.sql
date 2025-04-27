CREATE DATABASE IF NOT EXISTS FoodStorage;
USE FoodStorage;

SELECT f.food_name, f.food_type, f.quantity, f.unit, f.expiration_date
FROM Foods f
JOIN Storage s ON f.storage_id = s.storage_id
WHERE s.location_name = 'Refrigerator';


SELECT s.location_name, f.food_name, f.quantity, f.unit
FROM Foods f
JOIN Storage s ON f.storage_id = s.storage_id
WHERE f.food_type = 'dairy'
ORDER BY s.location_name;


SELECT food_name, expiration_date
FROM Foods
WHERE expiration_date BETWEEN CURRENT_DATE AND DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY);


SELECT food_type, SUM(quantity) AS total_quantity
FROM Foods
GROUP BY food_type;

SELECT s.location_name
FROM Storage s
LEFT JOIN Foods f ON s.storage_id = f.storage_id
WHERE f.food_id IS NULL;
living
