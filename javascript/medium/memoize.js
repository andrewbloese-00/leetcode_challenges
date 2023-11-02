
function memoize(fn){
    const cache = {}
    return function(...args){
        let key = args.map(String).join("-");
        if(cache[key] != null) return cache[key]
        else { 
            const result = fn(...args);
            cache[key] = result
            return result;
        }
    }

}

//local test fn
let addCount = 0;
let add = (a,b) => {
    addCount++; 
    return a+b;
};
function test(){
    const memoAdd = memoize(add)
    memoAdd(10,11) 
    memoAdd(10,11) 
    memoAdd(10,11) 
    memoAdd(11,12) 
    memoAdd(11,12) 
    console.log("Memoize passed: ", addCount === 2)
}
test();