function cancellable(fn,args,t){
    //immediately invoke
    fn(...args);
    let id = setInterval(()=>{
        fn(...args);
    },t)
    //returns a cancel function
    return ()=>{clearInterval(id)}
}


//tested on leetcode
//  49ms    |   41.6mb
//  98.34%  |   87.91%


