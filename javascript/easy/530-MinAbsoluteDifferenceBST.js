function getMinDifference(root){
	let min = Infinity, prev = -1, stack = [], iter = root; 
	while(iter != null || stack.length > 0){
		while(iter != null) { //traverse left
			stack.push(iter);
			iter = iter.left; 
		}
		//traverse right
		iter = stack.pop();
		if(prev >= 0) min = Math.min(min,iter.val-prev)
		prev = iter.val; 
		iter = iter.right; 
	}
	return min;
}
