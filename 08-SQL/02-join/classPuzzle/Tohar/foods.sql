
CREATE TABLE foods (
    food_id INT AUTO_INCREMENT PRIMARY KEY,
    food_name VARCHAR(50) NOT NULL unique,
	food_descriptions VARCHAR(100) NOT NULL,
	
    FOREIGN KEY (location_id)
        REFERENCES storage_location (location_id)
        ON DELETE SET NULL
);

ALTER TABLE foods
ADD category VARCHAR(50),
ADD quantity DECIMAL(5,2),
ADD unit VARCHAR(20),
ADD expiration_date DATE,
ADD purchase_date DATE,
ADD date_stored DATE,
ADD location_id INT;

INSERT INTO foods 
(food_name, food_descriptions, date_stored, location_id, category, quantity, unit, expiration_date, purchase_date)
VALUES
('Milk', '2% fat dairy milk', '2025-04-01', 1, 'Dairy', 2, 'Liters', '2025-04-07', '2025-04-01'),
('Chicken Breast', 'Boneless chicken breast', '2025-04-01', 2, 'Meat', 1.5, 'Kilograms', '2025-04-05', '2025-03-31'),
('Carrots', 'Fresh organic carrots', '2025-04-01', 5, 'Vegetables', 1, 'Kilograms', '2025-04-15', '2025-04-01'),
('Cheddar Cheese', 'Aged sharp cheddar', '2025-03-28', 1, 'Dairy', 0.5, 'Kilograms', '2025-05-10', '2025-03-28'),
('Frozen Peas', 'Pack of frozen green peas', '2025-03-25', 3, 'Vegetables', 1, 'Bags', '2026-01-01', '2025-03-25'),
('Eggs', 'Free-range large eggs', '2025-04-01', 5, 'Dairy', 12, 'Units', '2025-04-12', '2025-04-01'),
('Steak', 'Premium beef steak', '2025-03-30', 2, 'Meat', 2, 'Pieces', '2025-04-04', '2025-03-30');