-- Return the confirmation rate for all users rounded to two decimal places
SELECT Signups.user_id, ROUND(AVG(if(Confirmations.action = 'confirmed',1,0)),2) as confirmation_rate
FROM Signups LEFT JOIN Confirmations 
ON Signups.user_id = Confirmations.user_id
GROUP BY user_id;

-- Leetcode Result
-- 1098ms | 85.5%
