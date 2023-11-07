Array.prototype.snail = function(rows,columns){
    let out = [];
    //if the length is not valid return empty array
    if(this.length !== rows*columns ) return out;
    //iterate for each 'row'
    for(let r = 0; r < rows; r++){
        //initialize each row
        out[r] = []
        //iterate through each 'column'
        //determine pos. in og array based on if c is even or odd
        for(let c = 0; c < columns; c++)
            out[r][c] = (c%2===0)
                ? this[rows*c+r]
                : this[rows*c+(rows-r-1)]
    }
    //return the snail traversal of the array
    return out;
}

//leetcode test 
//  188ms       |   63.64mb
//  48.17%      |   97.18%

