select 
	u.first_name,
    u.last_name,
    l.city,
    l.street,
    l.house,
    l.house_number
FROM
	user u
    JOIN
    living l
    
WHERE l.user_id = u.user_id;