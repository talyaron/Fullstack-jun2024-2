CREATE TABLE Living (
    living_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES users (user_id)
        ON DELETE CASCADE,
    city VARCHAR(20) NOT NULL,
    street VARCHAR(20) NOT NULL,
    house_number SMALLINT UNSIGNED NOT NULL,
    floor_number SMALLINT NOT NULL,
    apartment_number SMALLINT UNSIGNED NOT NULL
)

SELECT * FROM best_foods.users;

insert into Living (user_id,city,street,house_number,floor_number,apartment_number)VALUES
(1,'tel_aviv','dizingof',12,1,3);

SELECT * FROM best_foods.living;

DELETE FROM Living
WHERE living_id IN (4);

SELECT 
    u.first_name, u.last_name, l.city, l.street, l.house_number
FROM
    users u
        JOIN
    living l
WHERE
    l.user_id = u.user_id;
    
    CREATE TABLE StorgeLocation (
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    Location_name varchar(20) not null,
    tamp tinyint not null
);
SELECT * FROM best_foods.storgelocation;
insert into StorgeLocation(Location_name,tamp)VALUES
('Refrigerator', 4),
('Freezer',-4),
('Pantry', 14),
('Basement storage', 20)
;

SELECT foods.food_name, StorgeLocation.Location_name
FROM foods
JOIN StorgeLocation ON Foods.location_id = StorgeLocation.location_id
WHERE StorgeLocation.location_name = 'Refrigerator';

SELECT foods.food_name, StorgeLocation.Location_name, foods.food_type
FROM foods
JOIN StorgeLocation ON Foods.location_id = StorgeLocation.location_id
WHERE foods.food_type = 'parve';


SELECT 
    f.food_id,
    avg(uf.love_level) AS love
FROM
    users u
        INNER JOIN
    users_foods uf ON u.user_id = uf.user_id
        INNER JOIN
    foods f ON uf.food_id = f.food_id
GROUP BY f.food_id;






