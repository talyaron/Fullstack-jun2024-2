-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS school_management;
USE school_management;

-- Step 2: Create the students table
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    date_of_birth DATE,
  enrollment_date DATE NOT NULL DEFAULT (CURRENT_DATE()),
    active BOOLEAN NOT NULL DEFAULT TRUE
);

-- Step 3: Create the courses table
CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_code VARCHAR(10) NOT NULL UNIQUE,
    course_name VARCHAR(100) NOT NULL,
    description TEXT,
    credit_hours INT NOT NULL,
    instructor VARCHAR(100),
    active BOOLEAN NOT NULL DEFAULT TRUE
);

-- Step 4: Create the enrollments table (join table)
CREATE TABLE enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE NOT NULL DEFAULT (CURRENT_DATE()),
    grade VARCHAR(2),
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE,
    -- Ensure a student cannot enroll in the same course twice
    UNIQUE KEY (student_id, course_id)
);

-- Step 5: Insert sample data into students table
INSERT INTO students (first_name, last_name, email, date_of_birth) VALUES
('John', 'Smith', 'john.smith@email.com', '2000-05-15'),
('Emily', 'Johnson', 'emily.johnson@email.com', '2001-02-20'),
('Michael', 'Williams', 'michael.williams@email.com', '1999-11-08'),
('Jessica', 'Brown', 'jessica.brown@email.com', '2002-07-30'),
('David', 'Jones', 'david.jones@email.com', '2000-09-12');

-- Step 6: Insert sample data into courses table
INSERT INTO courses (course_code, course_name, description, credit_hours, instructor) VALUES
('CS101', 'Introduction to Computer Science', 'Foundational course covering basic programming concepts', 3, 'Dr. Alan Turing'),
('MATH201', 'Calculus I', 'Introduction to differential and integral calculus', 4, 'Dr. Isaac Newton'),
('ENG105', 'English Composition', 'Fundamentals of academic writing and critical thinking', 3, 'Prof. Jane Austen'),
('PHYS150', 'Physics I', 'Mechanics, thermodynamics, and wave phenomena', 4, 'Dr. Albert Einstein'),
('BIO110', 'Biology Fundamentals', 'Introduction to cell biology and genetics', 3, 'Dr. Rosalind Franklin');

-- Step 7: Insert sample data into enrollments table
INSERT INTO enrollments (student_id, course_id, enrollment_date, grade) VALUES
(1, 1, '2023-08-30', 'A'),
(1, 2, '2023-08-30', 'B+'),
(2, 1, '2023-08-31', 'A-'),
(2, 3, '2023-08-31', 'B'),
(3, 2, '2023-09-01', 'C+'),
(3, 4, '2023-09-01', 'A'),
(4, 3, '2023-09-02', 'B-'),
(4, 5, '2023-09-02', 'A-'),
(5, 4, '2023-09-03', 'B+'),
(5, 5, '2023-09-03', 'A');

-- Step 8: Create a view to see student enrollments with course details
CREATE VIEW student_courses AS
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    s.email,
    c.course_id,
    c.course_code,
    c.course_name,
    e.enrollment_date,
    e.grade
FROM 
    students s
JOIN 
    enrollments e ON s.student_id = e.student_id
JOIN 
    courses c ON e.course_id = c.course_id
ORDER BY 
    s.last_name, s.first_name, c.course_code;

-- Step 9: Sample queries to test the database

-- Get all students and their enrolled courses
SELECT * FROM student_courses;

-- Find all courses a specific student is enrolled in
SELECT course_code, course_name, credit_hours, grade 
FROM student_courses
WHERE student_id = 1;

-- Find all students enrolled in a specific course
SELECT student_name, email, enrollment_date, grade
FROM student_courses
WHERE course_id = 1;

-- Calculate GPA (simplified version using a 4.0 scale)
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    AVG(
        CASE 
            WHEN e.grade = 'A' THEN 4.0
            WHEN e.grade = 'A-' THEN 3.7
            WHEN e.grade = 'B+' THEN 3.3
            WHEN e.grade = 'B' THEN 3.0
            WHEN e.grade = 'B-' THEN 2.7
            WHEN e.grade = 'C+' THEN 2.3
            WHEN e.grade = 'C' THEN 2.0
            WHEN e.grade = 'C-' THEN 1.7
            WHEN e.grade = 'D+' THEN 1.3
            WHEN e.grade = 'D' THEN 1.0
            WHEN e.grade = 'F' THEN 0.0
            ELSE NULL
        END
    ) AS gpa
FROM 
    students s
JOIN 
    enrollments e ON s.student_id = e.student_id
GROUP BY 
    s.student_id, student_name
ORDER BY 
    gpa DESC;