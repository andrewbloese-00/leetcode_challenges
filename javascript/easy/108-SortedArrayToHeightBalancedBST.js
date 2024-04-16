function toHeightBalancedTree(nums){
	if(nums.length === 0) return null;
	const m = Math.floor(nums.length / 2);
	return new TreeNode( nums[m] , //current node
		toHeightBalancedTree(nums.slice(0,m)), // left subtree
		toHeightBalancedTree(nums.slice(m+1)) // right tree
	)
}


