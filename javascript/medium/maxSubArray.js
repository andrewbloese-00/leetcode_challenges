
//using modified kadane's algorithm to determine the maximum subarray sum from an input array of numbers

function maxSubArray(nums){
	let current = 0, max = -Infinity; 
	if(nums.length === 1) return nums[0]

	for(let i = 0; i < nums.length; i++){
		current += nums[i]
		if(max < current) max = current; 
		if(current < 0) current = 0; 
	}
	return max; 
}


//leetcode results
//68ms		|	50.15mb
//69.85%	|	58.19%
