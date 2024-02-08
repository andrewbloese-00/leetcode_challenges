function numIslands(grid){
	const m = grid.length, n = grid[0].length || 0;
	let islands = 0;
	for(let i = 0; i < m; i++){
		for(let j = 0; j < n; j++){
			if(grid[i][j]==='1') {//if is land
				dfs4ways(grid,i,j,m,n); 
				islands++;
			}
		}
	}
	return islands; 
}

function dfs4ways(grid,i,j,m,n){
	//already visited or out of bounds
	if(i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== '1') return;
	
	//mark current cell visited
	grid[r][c] = "2";
	//search right left down and up in the grid. 
	dfs(grid,i+1,j,m,n);
	dfs(grid,i-1,j,m,n);
	dfs(grid,i,j+1,m,n);
	dfs(grid,i,j-1,m,n);
	//we have found the full island by this point
}

//LEETCODE RESULTS
// 65ms		|	52.44mb
// 84.25%	|	36.25%

