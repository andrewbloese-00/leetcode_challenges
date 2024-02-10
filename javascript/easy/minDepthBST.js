
function minDepth(root){
	if(!root) return 0;
	let d = 1; 
	let q = []; 
	while(q.length > 0){
		let size = q.length; 
		while(size--){
			const current = q.shift(); 
			//exit on first discovered leaf
			if(!current.left && !current.right) return d;
			if(current.left) q.push(current.left); 
			if(current.right) q.push(current.right); 
		}
		d++; 
	}
	return d; 
}

//LEETCODE RESULTS
// 188ms	|	87.71mb
// 46.29%	|	72.43%
