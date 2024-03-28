//Given an integer array nums and an integer k: 
// return the longest length subarray from nums where 
// frequency of each element is ≤ k. 


//Approach: 
// using a sliding window, and a hashmap (object) to keep track 
// of frequency. 

/**
 * @param {number} k
 * @param {number[]} nums
 * */
function maxSubarrayLength(nums,k){
	const freq = {}
	let i = 0, result = -Infinity;

	for(let j = 0; j < nums.length; j++){
		if(!f[nums[j]]) f[nums[j]] = 1;
		else f[nums[j]]++;

		if(f[nums[j]]>k){
			while(nums[i] != nums[j]){
				f[nums[i]]--
				i++
			}
			f[nums[i]]--
			i++;
		}
		result = Math.max(result,j-i+1);
	}
	return result;
}


// Leetcode Results 
// 151ms	|	64.10mb
// 74.34%	|	86.73%
