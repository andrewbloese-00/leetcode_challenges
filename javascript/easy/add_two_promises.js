async function addTwoPromises(p1,p2){
    const [ n , m ] = await Promise.all([p1,p2])
    return n + m
}

//tested on leetcode: 
//  46ms    |   42.4 
//  97.78%  |   18.83%

