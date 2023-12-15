// Given an integer array sorted in non-decreasing order, 
// there is exactly one integer in the array that occurs 
// more than 25% of the time, return that integer.
function specialInteger(arr){
    const target = Math.floor(arr.length/4) //occurs more than 25% 
    let num = arr[0], count = 1;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === num) count++; 
        else { 
            if(count > target) return num; //found target 
            num = arr[i]; count = 1; 
        }
    }
    //in case target is the last integer in the array
    if(count > target) return num; 
}



// | Leetcode Stats 
// |    Runtime     |   Memory      |
// |    56ms        |   42.54       |
// |    60.80%      |   72.48%      |
