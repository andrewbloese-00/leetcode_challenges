function maxProduct(nums){
	let p = 0
	for(let i = 0; i < nums.length; i++){
		for(let j = 0; j < nums.length; j++){
			if(i === j) continue;
			const product=(nums[i]-1)*(nums[j]-1)
			if( product > p ) p = product;
		}
	}
	return p;
}


// Leetcode Results
// Runtime		| 		Memory
// 44ms			|		42.19mb
// 96.56%		|		77.55%
