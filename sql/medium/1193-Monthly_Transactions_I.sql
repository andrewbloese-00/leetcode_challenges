-- Transactions 
-- | id* | country | state | amount | trans_date
-- | int | varchar | enum  | int	| date
-- state is "approved" | "declined" 

-- Write an SQL query to find for each month and country, the number of 
-- transactions and their total amount, the number of approved
-- transactions and their total amount.

--Notes:
-- use cases in sum to get approved count and approved total
-- use SUBSTR(trans_date,1,7) to get month 'YYYY-MM'
SELECT  
SUBSTR(trans_date,1,7) as month, 
country, 
COUNT(id) as trans_count, 
SUM(
    CASE WHEN state = 'approved' then 1 
    ELSE 0 END
) as approved_count, 
SUM(amount) as trans_total_amount, 
SUM(CASE WHEN state = 'approved' then amount else 0 END) as approved_total_amount
FROM Transactions
GROUP BY month, country

-- Leetcode Results 
-- 1062ms | 54.77%
