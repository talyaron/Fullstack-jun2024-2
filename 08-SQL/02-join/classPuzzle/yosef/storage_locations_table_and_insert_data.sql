create table storage_locations (
location_id INT NOT NULL PRIMARY KEY auto_increment,
loc_name varchar(50) not null,
temperature_range int not null,
note varchar(200),
creation_timestamp date not null
);

insert into storage_locations (loc_name, temperature_range, note, creation_timestamp) values
("In the drawer", 25, "normal temrture", "2025-02-11");

select * from storage_locations;

select
	f.food_name,
    sl.loc_name
from
	foods f
		join
	storage_locations sl
	where
		f.location_id = sl.location_id;
        
        ---------------------------------------------------
        -----------------------------------------------
        
        select
*
from
	foods f
		join
	storage_locations sl
	where
		f.location_id = sl.location_id

