//really new to generators so i need to come back and try this again after 
//practicing with more generators

function* inorderTraversal(arr){
    function* traverseHelper(x){
        if(Array.isArray(x)){
            for(const y of x){
                yield* traverseHelper(y);
            }

        }else yield x
    }

    yield* traverseHelper(arr)
}

//leetcode testing
//      190ms       |       92.80mb
//      17.66%      |       14.25%


