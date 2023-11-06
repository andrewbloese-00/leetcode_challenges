const createCounter = function(init) {
    let count = init;
    const increment = () => {
        count+=1; return count;
    }
    const decrement = () => {
        count-=1; return count
    }
    const reset=()=>{
        count = init; return count
    }
    return { 
        increment,decrement,reset
    }
};

/*
    Leetcode Test Results
    56ms        |   44.88mb
    71.58%      |   25.07%
*/
