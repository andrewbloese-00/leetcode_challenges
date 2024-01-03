/* Problem Description
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/


function twoSum(numbers,target){
	let i = 0, j = numbers.length -1;
	while( i != j){
		const sum = numbers[i] + numbers[j]
		if(sum > target) //over target...
			j--;//move right ptr to a 'lesser' value in sorted array
		else if(sum < target)//under target... 
			i++; //move left ptr to 'greater' value in sorted array
		//must be equal, return +1 as it is '1-indexed'
		else return [i+1,j+1]

	}
}

//leetcode results
// 47ms		|	42.7mb
// 94.2%	|	68.42%


