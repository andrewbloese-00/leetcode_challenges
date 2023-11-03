function reduce(nums,fn,initial){
    for(let i = 0; i < nums.length; i++){
        initial = fn (initial,nums[i])
    }
    return initial
}

//local test case
const sumReduceFn = ( accumulator, current) => { 
    return accumulator + current
}
const examples = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, -10],
    [0, 11, -10]
]
const expected = [ 
    6, 15, 24, 11,1
]

const cases = [false,false,false]
for(let i = 0; i < examples.length; i++){
    const result = reduce(examples[i],sumReduceFn,0)
    console.log('reduced '+ JSON.stringify(examples[i]) + " --> " , result)
    if(result  === expected[i])
        cases[i] = true
}
console.log('passed: ', cases)
