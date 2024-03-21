function invertTree(root){
	if(root){
		invertTree(root.left)
		invertTree(root.right)
		let tmp = root.left;
		root.left = root.right; 
		root.right = tmp;
	}
	return root;
}

//results
// 50ms		| 	49.17mb
// 75.82%	| 	60.55%

