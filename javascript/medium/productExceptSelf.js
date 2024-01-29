//Problem: 
// Given an array of numbers, return an array where each item is
// the product of all items in the array except the item at the 
// current index.
//
//Approach:
// To accomplish this task in O(n) time and O(1) space we can use 
// the fact that the product of the prefix of an item and the suffix of 
// that item is the same of the product of all except self. 
// (1) We start by creating the answer array, initializing each value to 1
// then using the 'current' value we calculate and apply the 
// prefix product for each item in the array starting from i = 0 to n-1
// (2) Then reset the current value to 1 and repeat the process in 
// reverse to compute and apply the suffix product to each element in ans
// array. 
// 
// We return the result having computed the desired products in 2n 
// iterations which simplifies to O(n) time complexity. The space 
// complexity is O(1) because the problem states to disregard the space
// used for the answer array. 
//
// LeetCode Results: 
//	81ms	|	60.66mb
//	83.49%	|	11.63%
//

function productExceptSelf(nums){
	const n = nums.length;
	const ans = Array(n).fill(1);
	//determine prefix product for each entry in ans
	let current = 1;
	for(let i = 0; i < n; i++){
		ans[i]*=current;
		current *= nums[i];
	}
	//determine suffix product for each entry in ans
	//directly modifying ans at each iteration
	current = 1; 
	for(let i = n-1; i >= 0; i--){
		ans[i] *= current;
		current *= nums[i];
	}
	return ans;
}
