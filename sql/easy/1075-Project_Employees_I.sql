-- Given the following tables...
-- Employee
-- | employee_id int | name varchar | experience_years int | 
-- Project
-- | project_id int | employee_id int |
-- write a solution that returns the average years of experience of 
-- employees for each project, rounded to two decimal places. 
SELECT P.project_id , ROUND(AVG(experience_years,2) as 'average_years'
FROM Project P LEFT JOIN Employee E 
ON E.employee_id = P.employee_id
GROUP BY project_id; 

--Leetcode Results
-- 1030ms | 54.48%
