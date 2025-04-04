    # Walk through

create a table for Living of the user, which explain in which apartment the user lives in. The table should contain the following columns:
 - living_id (int, primary key)
 - user_id (int, foreign key to users table)
 - city (varchar(50)) not null
 - street (varchar(50)) not null
 - house_number (int)
  floor_number (int)
 - apartment_number (int)

## Add to two user an apartment in the table Living.  
 - user_id 1, city: "New York", street: "5th Avenue", house_number: 10, floor_number: 2, apartment_number: 5
 - user_id 2, city: "Los Angeles", street: "Sunset Boulevard", house_number: 20, floor_number: 3, apartment_number: 10