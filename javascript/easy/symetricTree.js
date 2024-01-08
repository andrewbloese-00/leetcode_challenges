
//recursive helper
function checkSymetry(left,right){
	//base case, both should be null
	if(!left || !right) return left === right;
	if(left.val !== right.val) return false; 
	//recursively check the subtrees
	return (
		checkSymetry(left.left,right.right) && 
		checkSymetry(left.right,right.left)
	)
}


//solution - determine if given BST is "symetric" 
const isSymetric = root => checkSymetry(root.left,root.right);

//leetcode results
//66ms		|	44.5mb
//27.33%	|	52.6%

