function largestLocal(grid){
	const m = grid.length - 2
	const matrix = [] 
	for(let i = 0; i < m; i++){
		matrix[i] = [] 
		for(let j = 0; j < m; j++){
			matrix[i][j] = localMaximum(grid,i+1,j+1);
		}
	}
}


function localMax(arr,iCenter,jCenter){
	let max = -Infinity; 
	for(let i = iCenter-1; i<= iCenter+1; i++){
		for(let j = jCenter-1; j<= jCenter+1; j++){
			if(arr[i][j] > max) max = arr[i][j]
		}
	}
	return max; 
}

