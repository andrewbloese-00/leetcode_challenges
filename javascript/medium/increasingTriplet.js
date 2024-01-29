
//Problem:
// Given an array of numbers, determine if there exists a triplet
// i , j , k such that i < j < k and nums[i] < nums[j] < nums[k]


function increasingTriplet(nums){
	let i = Infinity, j = Infinity, k = Infinity; 
	for(let n = 0; n < nums.length; n++){
		if(nums[n] <= i) i = nums[n];
		else if(nums[n] <= j) j = nums[n];
		else if(nums[n] <= k) k = nums[n];
		if(k < Infinity && i <= j && j <= k) return true;
	}
	return false;
}


//leetcode results 
//	88ms	|	70.24mb
//	22.37%	|	8.4%
