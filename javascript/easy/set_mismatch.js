//(1)Use an array to track the seen numbers, length n+1
//(2)find the duplicate and expose missing value by iterating through nums
//(3)then iterate from 1 to n until we find the missing value and 
//	 return it along with our duplicate from (2) 

function findErrNums(nums){
	const n = nums.length;
	let seen = Array(n+1).fill(false), dup;
	for(const num of nums){
		if(!seen(num)) seen[num] = true;
		else dup = nums[i]
	}
	for(let i = 1; i <= n; i++){
		if(!seen[i]) return [dup,i]
	}
	//should never reach according to testcases
	return [-1,-1]
}


//Leetcode Results
// 59ms		|	52.52mb
// 83.93%	|	5.25%

