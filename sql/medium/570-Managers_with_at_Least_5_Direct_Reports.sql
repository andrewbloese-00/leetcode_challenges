-- Employee Schema
-- | id  | name		| department | managerId
-- | int | varchar  | varchar	 | int
-- Find Managers with at least 5 direct reports
-- Intuition: Use two queries, outer query selects the name , 
-- while the inner query groups employees by managerId and selects uses 
-- the COUNT function of 'id' >= 5

SELECT name FROM Employee
WHERE id IN (
	SELECT managerId FROM Employee
	GROUP BY manaerId
	HAVING COUNT(id) > 4 --same as >= 5
)

-- Leetcode Results
-- 1101 ms	| 8.71%
