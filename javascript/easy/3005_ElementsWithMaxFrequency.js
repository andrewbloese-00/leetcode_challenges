function maxFrequencyElements(nums){
	let f = {}, c = 0, i, max; 
	for(i = 0; i < nums.length; i++){
		if(!f[nums[i]]) f[nums[i]] = 1;
		else f[nums[i]]++
		if(!max || f[max] < f[nums[i]]) max = nums[i];
	}

	for(i = 0; i < nums.length; i++)
		if(f[nums[i]] === f[max]) c++
	
	return c;
}

/** Leetcode Results
 *  46ms	|	51.79mb
 *  99.14%  |	23.57%
 */ 
