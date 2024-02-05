
/* PROBLEM DESCRIPTION
There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.
*/

/* APPROACH
 We can use an array of size (edges.length+2) to store the # of times eachnode in the graph is seen. In a star pattern, the center node will be the only node with > 1 edge, so once we see a node for the second time while viewing edges, we return that node as the center
*/


/**
 * @param {number[][]} edges 
 * @returs {number}
 */
function findCenter(edges){
	const seen = Array(edges.length+2).fill(0)
	for(let [u,v] of edges){
		seen[u]++;
		if(seen[u] > 1) return u;

		seen[v]++;
		if(seen[v]) return v;
	}
}

//Leetcode Results
// 72ms		| 	66.72mb
// 95.74%	|	22.20%
