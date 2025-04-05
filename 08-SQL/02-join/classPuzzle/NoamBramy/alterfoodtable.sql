ALTER TABLE foods
ADD CONSTRAINT fk_location
FOREIGN KEY (location_id) REFERENCES location(location_id)
ON DELETE CASCADE;
