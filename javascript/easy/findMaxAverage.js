//Sliding Window - determine maximum average 
//Explained
// Calculate the first sum of the first 'k' elements
// Use calculated sum to intialize the max variable 
// until reaching the end
// 		add the next value
//		subtract the 'out of window' element 
//		update max (if applicable)
//
// return the maximum sum / k === maximum average




function findMaxAverage(nums,k){
	const n = nums.length; 
	let sum = 0; 
	let i = 0;
	while(i < k){
		sum+= nums[i]
		i++;
	}
	let max = sum; 

	while(i < n){
		sum += nums[i] - nums[i-k];
		if(sum > max) max = sum;
		i++;
	}

	return (max / k);
}

//Leetcode Results
//	83ms	|	54.97mb
//	49.60%	|	35.15%
