function sumOfLeftLeaves(root, sum = 0){
	//base case I, null root, 
	if(!root) return sum; 

	//track parents of only left nodes as we traverse tree
	if(root.left) root.left.parent = root;
	
	//base case II
	if( !root.left && !root.right && root.parent?.left == root)
		return sum + root.val;

	return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right); 
}
