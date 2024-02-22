-- Table : Queries
-- | query_name	| result  | position | rating | 
-- | varchar	| varchar | int		| int	 | 
-- Query Quality is the average of the ratio between query rating and its position. 
-- poor query percentage as percentage of queries with rating < 3 


SELECT query_name, 
ROUND(AVG( CAST(rating AS decimal) / position ) , 2 ) as 'quality',
ROUND(SUM(
    CASE WHEN rating < 3 THEN 1 
    ELSE 0 END
) * 100 / COUNT(*), 2) as 'poor_query_percentage'
FROM Queries WHERE query_name IS NOT NULL
GROUP BY query_name;


--cast rating to decimal to prevent int truncation...
-- use definition given of quality to calculate
-- SUM with cases, add 1 if it is a poor query as per def, otherwise add 
-- then divide by number of queries
-- Round to 2 decimal places for formatting
-- WHERE name is NOT NULL to prevent unnamed queries from being included
-- group by query name to determine the statistics for each named query. 


-- LEETCODE PERFORMANCE 
-- 685ms	| 50.25%
