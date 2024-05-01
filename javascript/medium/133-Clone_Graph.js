function Node(val=0,neighbors=[]){
	this.val = val
	this.neighbors = neighbors
}


function cloneGraph(node){
	if(!node) return null;
	const graph = new Node(node.val)
	//q1 holds original graph nodes, q2 holds the copied nodes
	//copied acts as both visits tracker / lookup
	const q1 = [node], q2 = [graph], copied = new Map(); 

	copied.set(node, graph)
	while(q1.length){
		let p1 = q1.shift(), p2 = q2.shift()
		for(const neighbor of p1.neighbors){
			if(!copied.has(neighbor)){
				const cpy = new Node(neighbor.val)
				q1.push(neighbor)
				q2.push(cpy)
				copied.set(neighbor,cpy)
				p2.neighbors.push(cpy)
			} else {
				p2.neighbors.push(copied.get(neighbor))
			} 
		}
	}
	return graph
}
