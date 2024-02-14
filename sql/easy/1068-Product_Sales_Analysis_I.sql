-- Sales => sale_id int, product_id int, year int, quantity int, price int
-- Product => product_id int, product_name varchar
-- Write a solution to report the product_name, year, and price for each sale_id in the Sales table.

SELECT P.product_name, S.year, S.price 
FROM Sales S JOIN Product P 
	ON S.product_id = p.product_id;

-- Leetcode Result
-- 	1897ms 	|	76.83%

