insert into positions (description) values
("CEO");

select * from positions;

insert into departments (description) values
('Offices');

select * from departments;

insert into employees (first_name, last_name, gender, address, phone, email, start_date, position_id,salary, department_id) values
('eyal','zalman','female','kenaton','0547997909','eyal@slr.co.il','2006-3-1',3,25000,2);

select * from employees