-- Given a table 'Employee" with salary column, select the employee
-- with the second highest salary in the database. 
-- Intuition: 
--	1. select distinct salaries (no sense in sorting duplicates) 
--	2. order greatest to least (descending) 
--	3. limit the result set to one, but offset by 1

SELECT (
	SELECT DISTINCT Salary
	FROM Employee
	ORDER BY salary DESC
	LIMIT 1
	OFFSET 1
) as SecondHighestSalary;

-- Results 
-- 536ms 	|	35.85%


