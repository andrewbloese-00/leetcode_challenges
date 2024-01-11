//determine the number of good nodes (nodes where path from root to node, no node in between has a value >)

//use dfs to count the number of nodes that fit the criteria for each path, passing the new maximum along
//
function goodNodes(root){
	let good = 0 
	function dfs(node,max){
		if(node){
			if(node.val >= max) {
				good++;
				max = node.val;
			}
			dfs(node.left,max);
			dfs(node.right,max);
		}
	}
	dfs(root,root.val);
	return good; 

}



//Leetcode Results 
//	118ms	|	69.19mb
//	51.23%	|	98.92%

