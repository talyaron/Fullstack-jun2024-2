CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(12) DEFAULT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone CHAR(12) DEFAULT NULL,
    date_of_birth DATE DEFAULT NULL
);

INSERT INTO users (first_name, middle_name, last_name, phone, date_of_birth) VALUES
('John', 'Robert', 'Smith', '555-123-4567', '1985-06-12'),
('Maria', NULL, 'Rodriguez', '555-987-6543', '1990-03-25'),
('David', 'A', 'Johnson', NULL, '1978-11-30'),
('Sarah', 'Jane', 'Williams', '555-456-7890', NULL),
('Michael', NULL, 'Brown', '555-789-0123', '1995-09-08');