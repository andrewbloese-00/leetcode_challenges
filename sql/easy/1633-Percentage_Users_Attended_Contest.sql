-- Given Users: 
-- |user_id int| name varchar|
-- and Register 
-- | contest_id int | user_id int |
-- Write a solution that returns the percentage of users who particpated
-- in EACH contest (implies the group by) sorted from greatest to least
-- and in alphabetical order to break ties. 


SELECT contest_id, 
ROUND ( COUNT(DISTINCT user_id) * 100/(SELECT COUNT(user_id) FROM Users),2) as 'percentage'
FROM Register GROUP BY contest_id
ORDER BY percentage DESC, contest_id;

-- Leetcode Results
-- 1807ms	|	51.40%
