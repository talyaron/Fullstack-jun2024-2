CREATE DATABASE if not exists Storage; 

USE Storage;

CREATE TABLE Storage(
storage_id int auto_increment,
PRIMARY KEY (storage_id),
location_name varchar(50) not null ,
temperature_range smallint not null,
humidity_level smallint not null,
notes varchar(500) not null ,
creation_timestampr smallint not null 
);