
use eli_foods;
create table living(
living_id int primary key auto_increment,
user_id int not null,
city varchar(50) not null,
street varchar(50) not null,
house_number smallint not null unique,
floor_number int not null,
apartment_number int not null
);

ALTER TABLE living  
ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE;
INSERT INTO living (living_id, user_id, city, street, house_number, floor_number, apartment_number) VALUES  
(1, 1, 'Tel Aviv', 'Dizengoff', 23, 3, 12),  
(2, 12, 'Jerusalem', 'Jaffa Street', 101, 5, 22),  
(3, 13, 'Haifa', 'Herzl Street', 55, 2, 8);  

SELECT  
    l.living_id,  
    u.user_id,  
    u.user_name,  
    u.user_email,  
    l.city,  
    l.street,  
    l.house_number,  
    l.floor_number,  
    l.apartment_number  
FROM living l  
JOIN users u ON l.user_id = u.user_id;