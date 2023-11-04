function map(arr,fn){
    let mapped = Array(arr.length).fill(0);
    for(let i = 0; i < arr.length; i++){
        mapped[i] = fn(arr[i]);
    }
    return mapped
}

//local test
const og = [ 1,2,3,4,5 ]

const doubled = map(og,x=>x*2)
const shiftUpOne = map(og, x=>x+1)
let passed = true; 
for(let i = 0; i < og.length; i++){
    if(og[i]*2 != doubled[i]) passed = false;
    if(og[i]+1 != shiftUpOne[i])passed = false
}

console.log("Passed 'map' challenge: ", passed)


