-- Given the Activity Schema:
-------------------------------------------------------------------------
-- machine_id int | process_id int | activity_type enum | timestamp float
-------------------------------------------------------------------------
-- Find the Average time Each Machine Takes to complete a process

-- Approach 
-- 1. we need to join to compute the times of each machine

SELECT A.machine_id, ROUND( AVG( B.timestamp - A.timestamp) , 3 ) as 'processing_time'
FROM Activity A Join Activity B 
  ON A.machine_id = B.machine_id
   AND A.process_id = B.process_id
   AND ( A.activity_type = 'start' AND B.activity_type='stop')
  GROUP BY A.machine_id;

--Leetcode Results
-- 358ms | 91.08%
