/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = 0, left= 0
    //calculate total sum
    for(let n = 0; n < nums.length; n++)
        total += nums[n]

    //iterate until we find pivot or exhuast the list
    for(let i = 0; i < nums.length; i++){
        //found the pivot when leftsum < (totalsum - ith number)
        if(left*2 === total - nums[i]) return i
        else left += nums[i] //left sum updates every iteration
    }
    //no pivot found..
    return -1;
};
//leetcode results
//119ms		| 43.48mb
//16.09ms	| 99.71%
