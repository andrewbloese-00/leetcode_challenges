// 0 = water
// 1 = land
// everything outside of the grid is water
// there is one island
// give its perimeter

function islandPerimeter(grid){
	let p = 0; 
	for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
			if(grid[i][j]===0) continue
      	   	//'up'
        	if(i === 0 || grid[i-1][j] === 0) p++
            //'down'
            if(i === grid.length-1 || grid[i+1][j] === 0) p++
            //left
            if(j === 0 || grid[i][j-1]===0) p++
            //right
            if(j === grid[i].length-1 || grid[i][j+1]===0) p++
        }
    }
    return p;
}
