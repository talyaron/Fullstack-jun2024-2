select
	u.user_id,
	u.first_name,
    u.last_name,
    l.city,
    l.street,
    l.house_number
from
	users u
		join
	living l
	where
		l.user_id = u.user_id;