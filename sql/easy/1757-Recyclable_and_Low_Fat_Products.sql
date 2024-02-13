-- product_id is primay key for Products
-- low_fats is enum 'Y'|'N'
-- recyclable is an ENUM of 'Y'|'N'
-- find ids of products that are both low fat and recyclable

SELECT product_id 
FROM Products 
WHERE low_fats='Y' AND recyclable ='Y'

-- Leetcode Results 
-- 1010ms	| 	49.85%

