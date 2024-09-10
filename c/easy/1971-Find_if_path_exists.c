// Problem: 
// Given a graph's edges in the form edges[i] = [u_i, v_i], and a source and destination
// node, return whether or not a path exists in the graph from source to destination. 
//
//
// Approach: 
// - Use a discrete set with Union-Find, where the set is represented using an two integer
// arrays (one to "point" at the "parent" of the node labeled i and another for the rank
// of a node labeled i).
// - Perform union operation on the parent, rank arrays using each edge as input. 
// - Perform find operation using the resulting "parent" array, and the source/destination
// parameters. 
// - the results of find on both will be 1 (true) if a path exists. 





int find(int* p,int x){
    if(p[x] != x)
        p[x] = find(p,p[x]);
    return p[x];
}

int doUnion(int* p, int* rank,int n1, int n2) {
    int p1 = find(p,n1);
    int p2 = find(p,n2);

    if(p1 == p2) return 0;
    if( rank[p1] < rank[p2]){
        int t = p1;
        p1 = p2;
        p2 = t; 
    }

    rank[p1] += rank[p2];
    p[p2] = p1; 
    return 1;
}

int same( int* p, int n1, int n2){
    if(find(p, n1) == find(p,n2)) return 1;
    return 0;
}


int validPath(int n, int** edges, int edgesSize, int* edgesColSize, int source, int destination) {
    int* parent = (int*) malloc(sizeof(int)*n);
    int* rank = (int*) malloc(sizeof(int)*n);
    int i; 
    for(i = 0; i < n; i++){
        parent[i] = i;
        rank[i] = 1;
    }

    for(i = 0; i < edgesSize; i++){
        doUnion(parent,rank, edges[i][0], edges[i][1]);
    }
    return same(parent,source,destination);


}
