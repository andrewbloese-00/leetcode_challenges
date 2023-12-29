//using the concept of a hashmap to track the occurences of each item, then comparing the length of the set and array created from iterating over the values in occurences. 

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let occurences = {}
    for(let i = 0; i < arr.length; i++){
        let key = `${arr[i]}`
        if(occurences[key] === undefined)
            occurences[key] = 1
        else occurences[key] += 1
    }
    let values = [], unique = new Set()
    for(let key in occurences){
        values.push(occurences[key])
        unique.add(occurences[key])
    }
	//if all unique values then the length of the array 
	//should be the same as the created set size.
    return values.length === unique.size;
};

//leetcode results
//75ms	|	42.54mb
//5.25%	|	63%

