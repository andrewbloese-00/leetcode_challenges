-- Visits => visit_id int , customer_id int
-- Transactions => transaction_id int, visit_id int, amount int
-- Write a solution to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.
SELECT V.customer_id , COUNT(V.visit_id) as count_no_trans
FROM Visits V LEFT JOIN Transactions T
    ON V.visit_id = T.visit_id WHERE T.transaction_id IS NULL
    GROUP BY V.customer_id;

-- Leetcode Performance
-- 2494ms	|	51.57%


