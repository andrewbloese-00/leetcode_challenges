

function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if( n <= 1) return [0]
    const graph = new Map<number,number[]>();
    const degree = new Array(n).fill(0)
    for(const [u,v] of edges) {
        if(!u || !v) break;
		if(!graph.has(u)) graph.set(u,[])
        if(!graph.has(v)) graph.set(v,[])
        graph.get(u).push(v)
        graph.get(v).push(u)
        degree[u]++;
        degree[v]++;
    }


    const q = []
    for(let i = 0; i < n; i++){
        if(degree[i] == 1) q.push(i)
    }   

    let nodesLeft = n; 
    while(nodesLeft > 2) { 
        const size = q.length
        nodesLeft -= size; 

        for(let i = 0; i < size; i++){
            const leaf = q.shift()
            if(graph.has(leaf)){
                for(const neighbor of graph.get(leaf)){
                    degree[neighbor]--;
                    if(degree[neighbor] == 1) q.push(neighbor)
                }
            }
            graph.delete(leaf)
        }
    } 

    return q; 

    


};
