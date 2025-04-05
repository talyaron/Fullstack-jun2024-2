CREATE VIEW favorite_foods_view AS
SELECT 
    u.user_id,
    u.first_name,
    u.last_name,
    f.food_id,
    f.food_name,
    f.food_type,
    f.kosher,
    uf.love_level
FROM 
    users u
INNER JOIN 
    users_foods uf ON u.user_id = uf.user_id
INNER JOIN 
foods f ON uf.food_id = f.food_id;
