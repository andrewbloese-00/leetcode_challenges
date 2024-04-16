function isValidBST(root){
	if(root === null) return true;
	let stack = [], current = root, pre = null; 
	while( current !== null || stack.length > 0){
		while(current !== null){
			stack.push(current) 
			current = current.left; 
		}

		current = stack.pop();
		if(pre !== null && current.val < pre.val) return false; 
		pre = current; 
		current=current.right; 
	}
	return true; 
}



