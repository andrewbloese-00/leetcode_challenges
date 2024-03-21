const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let title = ""
    while(columnNumber > 0){
        let t = (columnNumber-1)%26
        title = ALPHA[t] + title;
        columnNumber = Math.floor((columnNumber-1)/26)
    }
    return title
};


//results 
// 47ms 	|	48.82mb
// 73.38%	|	25.69%
