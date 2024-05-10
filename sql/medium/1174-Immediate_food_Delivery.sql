
-- 1. compute the percentage of orders where order_date = prefered date
-- 2. the inner query (inside in) gets the first order of customers
-- 3. combining the two gives the percentage of first orders that are 
--	  immediate delivery. 

SELECT ROUND( AVG(order_date = customer_pref_delivery_date)*100,2)
as 'immediate_percentage' FROM Delivery 
WHERE (customer_id,order_date) in (
	SELECT customer_id, min(order_date) from Delivery
	GROUP BY customer_id
);

