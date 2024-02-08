-- Problem: join Person and Address returning the firstName, lastName
-- city and state. If no address for person fill with NULL
-- Intuition: Simply a left join using Person primaryKey and Address 
-- foreignKey. 
SELECT p.firstName, p.lastName, a.city,a.state
FROM Person p LEFT JOIN Address A
	ON p.personId = a.personId; 

-- RESULTS 
-- 761ms	|	55.09%
