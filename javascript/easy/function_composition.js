function compose(functions){
    return function(x){
        if(!functions.length > 0){
            return x
        }
        let result = Array(functions.length).fill(0)
        //use prior calculations to pass to each function. 
        for(let i = functions.length - 1; i >= 0; i--){
            if(i == functions.length-1){
                result[i] = functions[i](x)
            } else {
                result[i] = functions[i](result[i+1])
            }
        } 
        return result[0]
    }
}

function test(){

    const times10cubed = Array(3).fill(x=>x*10)
    const add5subtract10thenMultiply20RightToLeft = [
        x => x*20, x=> x-10, x=> x+5
    ]


    console.log('passed')
    console.log(compose(times10cubed)(10) === 10000)
    console.log(compose(add5subtract10thenMultiply20RightToLeft)(1) === -80)
    
}

test()