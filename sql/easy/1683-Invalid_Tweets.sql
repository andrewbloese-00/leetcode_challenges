-- given Tweets table schema...
--	tweet_id int [PK]
--  content varchar

SELECT tweet_id 
FROM Tweets
WHERE length(content) > 15;
--WHERE LEN(content) > 15;

-- Leetcode Results
-- 958ms	| 87.64%

