-- select 
-- 	e.first_name,
--     e.last_name,
--     d.description,
--     p.description
-- from
-- 	employees e
-- join
-- 	departments d on
--     positions p
-- where
-- 	p.position_id = 3
    
 ---------------------------------------   
    
--     SELECT 
--     e.first_name,
--     e.last_name,
--     e.phone,
--     d.description,
--     p.description
-- FROM
--     employees e
-- JOIN
--     departments d ON e.department_id = d.department_id
-- JOIN
--     positions p ON e.position_id = p.position_id
-- WHERE
--     p.position_id = 3
    
--------------------------------------------   תציג לי את כל העובדים במחלקת הגרפיקה
    
    SELECT 
    e.first_name,
    e.last_name,
    e.phone,
    d.description AS department_description,
    p.description AS position_description
FROM
    employees e
JOIN
    departments d ON e.department_id = d.department_id
JOIN
    positions p ON e.position_id = p.position_id
WHERE
    p.position_id = 3