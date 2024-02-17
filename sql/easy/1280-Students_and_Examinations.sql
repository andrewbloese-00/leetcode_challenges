-- Given Students Table...
-- | student_id int | student_name varchar | 
-- And Subjects Table...
-- | subject_name varchar | 
-- And Examinations
-- | student_id int | subject_name varchar |
-- Write a solution to find the number of times each student attended each-- exam.
SELECT Students.student_id , Students.student_name, Subjects.subject_name,
COUNT(Examinations.subject_name) AS 'attended_exams' 
FROM Students CROSS JOIN Subjects LEFT OUTER JOIN Examinations
	ON Students.student_id = Examinations.student_id
	AND Subjects.subject_name = Examinations.subject_name
GROUP BY Students.student_id,Students.student_name,Subjects.subject_name 
ORDER BY Students.student_id, Subjects.subject_name;

-- Leetcode Results
-- 1424ms | 97.68%

