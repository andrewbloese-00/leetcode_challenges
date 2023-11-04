/**
 * 
 * @param {any[]} array 
 * @param {number} chunkSize 
 * @returns {any[]} array of chunks of 'chunkSize' from input array
 */
function chunk(array,chunkSize){
    const chunks = []
    while(array.length >= chunkSize){
        chunks.push(array.splice(0, chunkSize))
    }
    if(array.length > 0){
        chunks.push(array);
    }
    return chunks;
}

//local testing 
const examples = [
    [1,2,3,4],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9,10]
]
const sizes = [ 2, 3, 5 ] 
const expected = [ 
    [[1, 2],[3,4]],
    [[1,2,3],[4,5,6],[7,8,9]],
    [[1,2,3,4,5],[6,7,8,9,10]]
]

let passed = true;
for(let i = 0; i < examples.length; i++){
    const result= chunk(examples[i], sizes[i])
    if(JSON.stringify(expected[i]) !== JSON.stringify(result))
        passed = false; 
}
console.log("Passed chunk array challenge? ", passed);