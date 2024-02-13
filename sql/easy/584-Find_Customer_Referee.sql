-- Customer Table Schema
-- 	id int PK
--	name varchar 
--  referee_id int 

-- Find all customers who were not refered to by a customer with id 2
SELECT name FROM Customer
WHERE referee_id IS NULL OR NOT referee_id = 2;

--Leetcode Performance
--	768ms	|	90.17%

