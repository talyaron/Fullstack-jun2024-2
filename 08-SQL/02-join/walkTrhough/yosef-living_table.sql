USE YosefIB_Foods;

create table living (
living_id int not null primary key,
user_id int not null,
city varchar(50) not null,
street varchar(50) not null,
house_number int,
floor_number int,
apartment_number int,
foreign key(user_id) references users(user_id) on delete cascade
);