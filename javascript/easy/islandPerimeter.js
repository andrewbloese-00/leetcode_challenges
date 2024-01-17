function islandPerimeter(grid){
  	let p = 0;
    const m = grid.length, n = grid[0].length;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++) {
            //if land add 4 to perimeter -> 4 sides to cell
            if(grid[i][j] === 1) {
                p += 4; 
                //check adjacent cells -> cancel out added above
                if(i > 0 && grid[i-1][j] === 1) p -= 2;
                if(j > 0 && grid[i][j-1] == 1 ) p -= 2;
            }
        }
    }
    return p;
}


//Leetcode Performance
// 106ms	|	49.95mb
// 97.82%	|	98.41%

