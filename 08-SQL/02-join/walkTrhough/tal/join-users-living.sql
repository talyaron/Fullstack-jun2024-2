SELECT 
    u.first_name,
    u.last_name,
    l.city,
    l.street,
    l.house_number
FROM
    users u
       left JOIN
    living l 
on
    l.user_id = u.user_id;