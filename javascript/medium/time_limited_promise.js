function timeLimitPromise(fn,t){
    return async function(...args){
        return new Promise((resolve,reject)=>{
            //if the promise is not complete after 't' ms reject immediately;
            setTimeout(()=>reject("Time Limit Exceeded"), t)
            //handle calling the function as usual
            fn(...args)
                .then(resolve)
                .catch(reject)
    
        })
    }
}
let successful = 0, failed = 0

const waitAndCount = ms =>  new Promise((resolve)=>setTimeout(()=>{
    successful ++;
    resolve(ms)
},ms))
async function test(){

    const limitedWait = timeLimitPromise(waitAndCount,50)
    
    try {
        await limitedWait(10)
        await limitedWait(20)
        await limitedWait(30)
        await limitedWait(40)
        await limitedWait(50)
        await limitedWait(51)
        
        
    } catch (error) {
        failed++
    } finally { 
        console.log('passed? ', successful === 4)
        console.log('Blocked ' + failed + ' promise(s)' )
    }

}

test()
