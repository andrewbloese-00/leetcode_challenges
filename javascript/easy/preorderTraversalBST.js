
function preorder(root,traversed=[]){
	if(root) {
		traversed.push(root)
		if(root.left) preorder(root.left,traversed)
		if(root.right) preorder(root.right,traversed)
	}
	return traversed;
}
//leetcode results
//47ms		|	41.9mb
//83.65%	|	73.57%


