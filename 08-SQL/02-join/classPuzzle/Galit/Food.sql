create database if not exists Foods; 

USE foods;

CREATE TABLE foods(
food_id int auto_increment,
PRIMARY KEY (food_id),
food_name varchar(50) not null,
food_type varchar(50) not null,
quantity DECIMAL(5,2),
    unit VARCHAR(10),
    expiration_date DATE,
    purchase_date DATE,
    storage_id INT,
    PRIMARY KEY (food_id),
    FOREIGN KEY (storage_id) REFERENCES Storage.storage_id
        ON DELETE SET NULL
);

INSERT INTO foods (food_id, food_name, food_type, quantity, unit, expiration_date, purchase_date, storage_id) VALUES
(1, 'banana', 'fruit', 6.00, 'pcs', '2025-04-10', '2025-04-01', 3),
(2, 'apple', 'fruit', 4.00, 'pcs', '2025-04-08', '2025-04-02', 3),  
(3, 'tomato', 'veg', 5.00, 'pcs', '2025-04-07', '2025-04-03', 1),  
(4, 'cake', 'dessert', 1.00, 'box', '2025-04-06', '2025-04-01', 1), 
(5, 'chips', 'snack', 3.00, 'bags', '2025-06-01', '2025-03-30', 3),  
(6, 'milk', 'dairy', 2.00, 'liters', '2025-04-05', '2025-04-02', 1), 
(7, 'chicken', 'meat', 1.50, 'kg', '2025-04-09', '2025-04-01', 2);  


