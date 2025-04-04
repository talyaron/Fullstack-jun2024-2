create table storage_locations (
location_id INT NOT NULL PRIMARY KEY auto_increment,
loc_name varchar(50) not null,
temperature_range int not null,
note varchar(200),
creation_timestamp date not null
);

insert into storage_locations (loc_name, temperature_range, note, creation_timestamp) values
("Freezer", -4, "In the freezer, it can last a long time", "2025-02-11");

select * from storage_locations

