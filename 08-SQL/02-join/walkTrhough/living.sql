create table living (
living_id int AUTO_INCREMENT,
user_id int not null,
city varchar(50) not null,
street varchar(50) not null,
house_number smallint unsigned not null,
floor_number smallint,
apprtment_number smallint unsigned,
PRIMARY KEY (living_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
)
