//objective: return the level order traversal of the nodes in a BST given its root. 
//approach: use a modified Breadth-First Search to extract the levels of the tree. 


function levelOrder(root){
	let ans = []; 
	if(!root) return ans; 

	//do BFS
	let q = [root] //initialize the q to root node
	while(q.length > 0){
		const levelSize = q.length;
		let lvl = [];
		for(let i = 0; i < levelSize; i++){
			const current = q.shift();
			if(!current)continue; 
			lvl.push(current.val);
			//enqueue children if applicable
			if(current.left) q.push(current.left);
			if(current.right) q.push(current.right);
		}
		ans.push(lvl);
	}
	return ans;
}

//leetcode results
//50ms 		|	44.98mb
//99.65%	| 	86.71%
