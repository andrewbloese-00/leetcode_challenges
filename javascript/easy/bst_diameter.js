//diameter = longest path (possibly through root) of a bst

function bstDiameter(root){
	let d = 0;
	//dfs tree nodes
	(function search(node) { 
		if(!node) return 0 
		const l = search(node.left), r = search(node.right); 
		d = Math.max(d, left+right); //record larger diameters on discover
		
		// return the longer path (l or r) + node
		return Math.max(left,right)+1; 
	})(root);
	return d;
}

//results on leetcode: 
// 57ms    | 58.2mb 
// 97.58 % | 45.07%
