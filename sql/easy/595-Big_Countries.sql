-- World table schema
-- name varchar
-- continent varchar
-- area int
-- population int
-- gdp int

-- A country is BIG if..
--	a) has pop of at least 25000000
--	b) has area of at least 3 mil

-- Find the name,population, and area of big countries
SELECT name,population,area FROM World
WHERE population >= 25000000 OR area >= 3000000


-- Leetcode Results
-- 443ms	|	73.93%
