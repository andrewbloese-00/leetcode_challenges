/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    const n = matrix.length, m = matrix[0].length, touched = {}
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(matrix[i][j] === 0 && !touched[`${i},${j}`]){

                let [iLeft,iRight,jUp,jDown] = [i-1,i+1,j-1,j+1];
                while(iLeft >= 0){ // * < 0 * * 
                    if(matrix[iLeft][j] !== 0){
                        matrix[iLeft][j] = 0;
                        touched[`${iLeft},${j}`] = true;
                    }
                    iLeft--;
                }
                while(iRight < n){
                    if(matrix[iRight][j] !== 0){
                        matrix[iRight][j] = 0;
                        touched[`${iRight},${j}`] = true;
                    }
                    iRight++;
                }
                while(jUp >= 0){
                    if(matrix[i][jUp] !== 0){
                        matrix[i][jUp] = 0;
                        touched[`${i},${jUp}`] = true;
                    }
                    jUp--;
                }
                while(jDown < m) {
                    if(matrix[i][jDown] !== 0){
                        matrix[i][jDown] = 0;
                        touched[`${i},${jDown}`] = true;
                    }
                    jDown++;
                } 

            }
        }
    }
};

//leetcode results
//95ms - 48.81mb
//8.3% - 8.8%
