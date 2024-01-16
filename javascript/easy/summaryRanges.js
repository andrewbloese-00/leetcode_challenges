
function summaryRanges(nums){
	let ans = [] 
	for(let i = 0; i < nums.length; i++){
		let a = nums[i]; 
		while(i + 1 < nums.length && nums[i]+1 === nums[i+1]) i++
		ans.push( a === nums[i] ? `${a}` : `${a}->${nums[i]} )
	}

	return ans; 
}

//Leetcode Results 
// 60ms 	|	42.06mb
// 15.21%	|	44.68%
