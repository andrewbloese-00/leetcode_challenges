function maxDepth(root,d=1){
	//base case no root
	if(!root) return d-1;

	//base case no children
	if(!root.left && !root.right) return d; 
	
	//recursive, compare left+right subtree depth
	return Math.max(
		maxDepth(root.left,d+1),
		maxDepth(root.right,d+1)
	)
}

