function once(fn){
    let called = false;
    return function(...args){
        if(!called){
            called = true;
            return fn(...args)
        }
        return
    }
}

//local test
let helloCount = 0;
function sayHello(name){
    console.log("hello " + name + "!");
    helloCount++;
}


const greet = once(sayHello)
const input = "world"
for(let i = 0; i < 10000;i++){
    greet(input)
}

console.log(helloCount === 1);
