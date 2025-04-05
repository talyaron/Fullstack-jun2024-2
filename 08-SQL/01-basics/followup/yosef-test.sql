CREATE DATABASE IF NOT EXISTS YosefIB_Foods;

USE YosefIB_Foods;

create table users (
user_id INT auto_increment primary key,
first_name varchar(50) not null,
middle_name varchar(12),
last_name varchar(50) not null,
date_of_birth date,
phone char(12)
);

insert into users (first_name, last_name, date_of_birth, phone) values
("Yosef", "Ibrahim", "1988-09-03", "0545732050"),
("Yosef", "Ibrahim", "1988-09-03", "0545732050");

select * from users;

delete from users where user_id = 1;

alter table users
add column x date;

insert into users (first_name, last_name, date_of_birth, phone,x) values
("mosa", "jaber", "1988-09-03", "0547997909","1988-09-03");

insert into users (first_name, middle_name,last_name, date_of_birth, phone,x) values
("mosa","123", "jaber", "1988-09-03", "0547997909","1988-09-03");

-- add food table

create table foods (
food_id INT auto_increment primary key,
food_name varchar(50) not null,
food_type enum ('fruit','vegtable','meat','sugar') not null,
kosher_type enum ('kasher', 'not kasher')
);

alter table foods
drop column kosher_type;

alter table foods
add column kosher boolean not null;	

insert into foods (food_name, food_type, kosher) values
("choclate","sugar",true);

select * from foods;

insert into foods (food_name, food_type, kosher) values
("lemon","sugar",false);

create table users_foods(
user_food_id int not null auto_increment primary key,
user_id int not null,
food_id int not null,
love_level float not null,
foreign key(user_id) references users(user_id) on delete cascade,
foreign key(food_id) references foods(food_id) on delete cascade,
check (love_level >= -1 and love_level <= 1)
);

select * from foods;
select * from users;
select * from users_foods;

ALTER TABLE users_foods DROP CONSTRAINT users_foods_chk_1; 
ALTER TABLE users_foods ADD CONSTRAINT users_foods_chk_1 CHECK (love_level >= -1 AND love_level <= 1);


insert into users_foods (user_id, food_id, love_level) values
(9,1,0);





