function hasPathSum(root,sum){
	if(!root) return false; 
	const newSum = sum-root.val; 
	if(!root.left && !root.right && newSum === 0) return true;
	return hasPathSum(root.left,newSum) || hasPathSum(root.right,newSum);
}

