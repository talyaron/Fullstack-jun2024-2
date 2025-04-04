# Walk through

create a table for Living of the user, which explain in which apartment the user lives in. The table should contain the following columns:
 - living_id (int, primary key)
 - user_id (int, foreign key to users table)
 - city (varchar(50)) not null
 - street (varchar(50)) not null
 - house_number (int)
  floor_number (int)
 - apartment_number (int)