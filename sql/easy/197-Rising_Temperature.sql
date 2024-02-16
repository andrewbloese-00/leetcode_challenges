
-- Given The Table "Weather"...
----------------------------------------------- 
-- id int | recordDate date | temperature int
----------------------------------------------- 
-- write a solution to find all dates' Id with higher temperatures 
-- compared to its previous day

-- Approach: 
-- We join the weather table with itself, using the following criteria
-- * the DATEDIFF between the two records is -1 
-- * the temperature at A < tempertature at B

SELECT B.id FROM Weather A JOIN Weather B
  ON DATEDIFF( A.recordDate, B.recordDate ) = -1
  AND A.temperature < B.temperature;


-- Leetcode Results
-- 1095ms |	22.17%
