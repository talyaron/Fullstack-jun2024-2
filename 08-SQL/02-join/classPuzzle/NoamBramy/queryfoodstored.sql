SELECT f.food_name, f.food_type
FROM foods f
JOIN location l ON f.location_id = l.location_id
WHERE l.location_name = 'Refrigerator';
