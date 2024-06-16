/**
 * @param {number[][]} isConnected - the adjacency matrix
 * @returns {number} the number of connected components
 */

function countConnectedComponents(isConnected){
	const visited = new Set();
	let numComponents = 0
	
	//recursive helper
	function dfsComponents(node,visited){
		for(let v = 0; v < isConnected[node].length; v++){
			if(isConnected[node][v] && !visited.has(v){
				dfsComponents(v,visited);
			}
		}
	}

	//iterate through nodes, marking visits using depth first search. 
	//
	for(let u = 0; u < isConnected.length; i++){
		if(!visited.includes(u)){
			dfsComponents(u,visited)
			numComponents++
		}
	}

	
	return numComponents;
	


}
