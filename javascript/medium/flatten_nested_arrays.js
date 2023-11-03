/**
 * 
 * @param {any[]} array 
 * @param {number} n 
 * @returns {any[]}
 */
function flat(array,n){
    let flattened = [];
    if(n <= 0 ) return array //base case

    for(let i = 0; i < array.length; i++){
        if(array[i] instanceof Array){
            //recurse where the depth is 1 less
            flattened.push(...flat(array[i],n-1))
        } else flattened.push(array[i]); //not an array item just push the element
    }
    return flattened;
}

//local test
const testInput = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const EXPECTED = [
    [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],    
    [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],

]

//gross eq array function lol
let flag = true;  
function eqArrays(a,b){
    if( a.length != b.length ) return false;
    for(let i = 0; i < a.length; i++){
        if(!flag) return false;
        if(a[i] instanceof Array){
            if(!(b instanceof Array)){
                return false
            }
            console.log('a Array and b Array at index ' , i )
            flag = eqArrays(a[i],b[i]);
        } else { 
            console.log('comparing', [a[i], b[i]]);
            if( a[i] != b[i]) return false
        }

    }
    if(!flag){
        flag = true
        return false
    }
    return true;
}

function test(){
    const result0 = flat(testInput,0);
    const result1 = flat(testInput,1);
    const result2 = flat(testInput,2);

    const cases = [
        eqArrays(result0,EXPECTED[0]),
        eqArrays(result1,EXPECTED[1]),
        eqArrays(result2,EXPECTED[2])
    ]
    console.log('0',result0);
    console.log('1',result1);
    console.log('2',result2);
    
    
    
    console.log('Case results: ', cases.join(" "))
}
test()
