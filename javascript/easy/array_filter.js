function filter( arr, fn ){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            results.push(arr[i])
        }
    }
    return results;
}


const example = [1, 2, 5, 6, 7, 20, 500]
const results = [
    [1,2,5],
    [5,6,7],
    [500],
    []
]
const filterFunctions = [
    n => n < 6,
    n => n >= 5 && n <= 7,
    n => n > 20,
    n => n < 0
]
const cases = [ 
    false , false, false, false
]

for(let i = 0; i < filterFunctions.length; i++){
    const result = filter(example,filterFunctions[i])
    cases[i] = (JSON.stringify(result) === JSON.stringify(results[i]))

}
console.log("Passed filter array: ", cases);