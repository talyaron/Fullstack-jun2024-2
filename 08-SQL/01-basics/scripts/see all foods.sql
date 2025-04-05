 -- bring all foods that people like (like >0.1) and bring only Pola

SELECT 
   *
FROM
    users u
        INNER JOIN
    users_foods uf ON u.user_id = uf.user_id
        INNER JOIN
    foods f ON uf.food_id = f.food_id
    where u.date_of_birth < "1900-01-01" and uf.love_level >0.1;
    
SELECT 
    u.first_name,
    u.last_name,
    COUNT(u.user_id) AS user_count
    
FROM
    users u
        INNER JOIN
    users_foods uf ON u.user_id = uf.user_id
        INNER JOIN
    foods f ON uf.food_id = f.food_id
GROUP BY u.user_id;
    
    