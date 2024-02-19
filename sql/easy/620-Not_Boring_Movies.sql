--Given Following Table
--| id int	| movie varchar	| description varchar | rating float (2pts)|
-- named Cinema
-- Write a solution to select all movies that are not boring and have an 
-- odd id. Return them highest to lowest rating. 

SELECT * FROM Cinema 
WHERE id % 2 = 1 AND desciption != 'boring' 
ORDER BY rating DESC; 

-- Leetcode Results
-- 389 ms | 86.26%
