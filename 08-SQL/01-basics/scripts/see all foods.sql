SELECT 
    u.first_name,
    u.last_name,
    f.food_name,
    uf.love_level
FROM
    users u
        INNER JOIN
    users_foods uf ON u.user_id = uf.user_id
        INNER JOIN
    foods f ON uf.food_id = f.food_id;
