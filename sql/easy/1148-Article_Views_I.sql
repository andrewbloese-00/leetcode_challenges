-- Given a table views with schema...
--	article_id int, author_id int, viewer_id int, view_data date
-- find the distinct authors that viewed their own articles, order by their id in ascending order. 

SELECT DISTINCT viewer_id as id
FROM Views WHERE author_id = viewer_id
ORDER BY id ASC; 

-- Leetcode Results
-- 885ms	| 31.98%
