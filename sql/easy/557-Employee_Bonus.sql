-- Given the following Employee Schema
----------------------------------------------------------
-- empId int | name varchar | supervisor int | salary int|
----------------------------------------------------------
--
-- And Bonus
--------------------------
-- empId int | bonus int |
--------------------------
-- Write a solution to report the name and bonus amount of each employee with a bonus 
-- less than 1000

SELECT Employee.name, Bonus.bonus FROM 
Employee LEFT JOIN Bonus
 ON Employee.empId = Bonus.empId
  WHERE Bonus IS NULL OR bonus < 1000; 

-- Leetcode Results
-- 1814ms	|	52.55%
