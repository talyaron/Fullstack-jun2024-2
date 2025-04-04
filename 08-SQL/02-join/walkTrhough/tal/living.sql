CREATE TABLE living (
    living_id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    city VARCHAR(50) NOT NULL,
    street VARCHAR(50) NOT NULL,
    house_number SMALLINT UNSIGNED NOT NULL,
    floor_number SMALLINT,
    apprtment_number SMALLINT UNSIGNED,
    PRIMARY KEY (living_id),
    FOREIGN KEY (user_id)
        REFERENCES users (user_id)
)

