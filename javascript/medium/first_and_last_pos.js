function firstAndLast(nums,target){
    let result = [-1,-1];
    const foundIndex = binarySearch(nums,target);
    if(foundIndex === -1) return result;

    //case 1: the foundIndex is the first occurrence
    if(foundIndex === 0 || nums[foundIndex-1] !== target) {
        result[0] = foundIndex
        for(let i = foundIndex; i < nums.length; i++){
            if(nums[i] !== target) result[1] = i-1
        }
    }

    //case 2: the foundIndex is the last occurrence
    else if(foundIndex === nums.length - 1 || nums[foundIndex+1] !== target) {
        result[1] = foundIndex
        for(let i = foundIndex; i >= 0; i--){ //find first occurrence
            if(nums[i] !== target) result[0] = i+1
        }
    }
    //case 3: the foundIndex is in the middle of a sequence of occurrences
    else { 
        for(let l = foundIndex; l >= 0; l--){
            if(nums[l] !== target){ 
                result[0] = l+1;
                break;
            }
        }
        for(let r = foundIndex; r < nums.length; r++){
            if(nums[r] !== target){
                result[1] = r-1;
                break;
            }
        }
    }
    return result

    
    
}


function binarySearch(nums,target){
    let l = 0, r = nums.length-1, m
    while (l <= r){
        m = Math.floor((l+r)/2)
        if(nums[m] === target) return m
        else if(nums[m] < target) //left subarray
            r = m-1
        else
            l = m+1
    }
    return -1;

    
}