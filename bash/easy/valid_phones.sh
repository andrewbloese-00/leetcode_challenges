#!/bin/bash
grep -E '^(\([0-9]{3}\) [0-9]{3}-[0-9]{4})$|^([0-9]{3}-[0-9]{3}-[0-9]{4})$' file.txt

# GREP explained
#===================================================================
#	supply -E flag to get every match of the supplied regex
#	supply the '<regex>' to validate desired phone number format
#	supply 'file.txt' 

# REGEX Explained
# ^ => start of line
# (\([0-9]{3}\) => first 3 digits in parens
# [0-9]{3}-[0-9]{4}) 
#        => followed by <3 digits>-<4 digits>
# | ^([0-9]{3}-[0-9]{3}-[0-9]{4})$ 
#        => OR <3 digits>-<3 digits>-<4digits><EOF>


# LEETCODE Performance
# Runtime		| 	Memory
# 66ms			|	3.21mb	
# 81.7%			| 	9.17%
