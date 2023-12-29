//Using javascript Set to find the difference between two arrays
//simple comparison to check if elements from each array are in the other
//with the includes operator. Uses Array.from to convert the result sets into arrays as desired by the challenge description.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let uniqueToOne = new Set();
    for(let num of nums1)
        if(!nums2.includes(num)) uniqueToOne.add(num);

    let uniqueToTwo = new Set();
    for(let num of nums2)
        if(!nums1.includes(num)) uniqueToTwo.add(num);

    return [ Array.from(uniqueToOne), Array.from(uniqueToTwo)];
};

