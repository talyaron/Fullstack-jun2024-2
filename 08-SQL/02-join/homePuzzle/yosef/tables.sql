CREATE DATABASE IF NOT EXISTS SLR_DataBase;
use slr_database;

create table Employeesdepartments(
employees_id INT NOT NULL auto_increment primary key,
first_name varchar(50) not null,
last_name varchar(50) not null,
gender enum('male','female') not null,
address varchar(100) not null,
phone char(10),
email VARCHAR(100) NOT NULL UNIQUE,
start_date date not null,
position_id int NOT NULL,
salary DECIMAL(10) NOT NULL,
department_id int not null
);

select * from employees;

alter table employees
add constraint fk_department_id
foreign key (department_id)
references departments(department_id)
on delete cascade;

create table positions (
position_id int not null auto_increment primary key,
description varchar(50) not null
);

create table departments (
department_id int not null auto_increment primary key,
description varchar(50) not null
);





