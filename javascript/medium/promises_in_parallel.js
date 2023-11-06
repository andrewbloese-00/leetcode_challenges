const promiseAll = functions => new Promise((resolve,reject)=>{
    const results = Array(functions.length).fill(null);
    let rejected = false, count = 0; 
    for(let f = 0; f < functions.length; f++) {
        functions[f]()
            .then(result=>{
                if(!rejected){
                    results[f]=result;
                    count++;
                }
                if(count === functions.length) resolve(results);
            })
            .catch(err=>{
                if(!rejected){
                    rejected=true;
                    reject(err);
                }
            })
    }
})

//note tested on leetcode: 
// 75ms      |   42.08MB
// 22.93%    |   9.81%
