-- Given the following table: Prices 
-- | product_id int  | start_date date | end_data date | price int
-- And table: UnitsSold
-- | product_id int | purchase_date date | units int
-- Write a solution to find the average selling price for each product, 
-- round to two decimal places. 
SELECT Prices.product_id,
IFNULL( 
	ROUND( SUM(units*price)/SUM(units),2),
	0
) as 'average_price' 
FROM Prices LEFT JOIN UnitsSold 
ON Prices.product_id = UnitsSold.product_id 
AND UnitsSold.purchase_date BETWEEN start_date AND end_date
GROUP BY Prices.product_id; 

-- Leetcode Results 
-- 1298ms 	| 77.28%
