/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

function singleNumber(nums){
	let res = 0;
	for(let n = 0; n < nums.length; n++)
		res ^= nums[n]
	return res;
}

//constant space, the only additional space needed is the res variable, which is a number, hence constant space. 
//linear runtime, the algorithm runs xor exactly n times where n is the length of the input. 
//explanation - the elements that appear exactly twice will xor to 0, and
// leave only the single number remaining. 

