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
(1,'NETANIA','BAN_NATAN',27,8,34)ף

