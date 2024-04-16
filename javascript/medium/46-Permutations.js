function permute(nums){
	const permutations = [];
	function swap(i,j){
		let tmp = nums[i];
		nums[i] = nums[j];
		nums[j] = tmp;
	}

	function backtrack(idx){
		//reached last permutation
		if(idx === nums.length) permutations.push([...nums]); 
		else { 
			//swap backtrack and reswap when done
			for(let i = idx; i < nums.length; i++){
				swap(idx,i);
				backtrack(idx+1);
				swap(idx,i);
			}
		}
	}

	backtrack(0);
	return permutations; 
}
