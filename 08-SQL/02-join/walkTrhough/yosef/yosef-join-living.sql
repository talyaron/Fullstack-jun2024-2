SELECT 
    u.user_id,
    u.first_name,
    u.last_name,
    l.city,
    l.street,
    l.house_number
FROM
    users u
        JOIN
    living l
WHERE
    l.user_id = u.user_id;