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
    l.user_id = u.user_id