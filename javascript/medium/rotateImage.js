
//rotate an image represented as a 2d matrix in place [90degrees]
function rotate(matrix){
	//transpose the matrix
	 for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < i; j++){
            [matrix[i][j],matrix[j][i]] = [ matrix[j][i],matrix[i][j]];
        }
    }
	//"swap" columns
	for(let i = 0; i < matrix.length; i++)
		matrix[i].reverse();
}


//leetcode results 
// 44ms			|	42.09mb
// 93.778%		| 55.07%

