-- we have two tables "Employees" and "EmployeeUNI" 
-- Employees -> id int PK, name varchar
-- EmployeeUNI -> id int, unique_id int
-- write a query that grabs the employees unique id and name
-- if no unique id return null

-- use left join to join regardless of unique_id having value
-- join when their ids match. 


SELECT u.unique_id, name 
FROM Employees e 
LEFT JOIN EmployeeUNI u
	ON u.id = e.id;


-- Leetcode Results
-- 2138ms | 59.81%
