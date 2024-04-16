//given array of integers 'nums' containing (n+1) integers where each is in the range [1,n]. There is only one repeated number in nums. return it.
//
//Do not modify the array 

//Approach, use an array to track which numbers have been seen (luckily the array contains 1 to n which can be represented in an array length n+1!
//Iterate through the numbers checking if each number has been 'seen' previously. if it has return the number otherwise  mark it as seen!

function findDuplicate(nums){
	const seen = Array(nums.length).fill(false)
	for(let i = 0; i < nums.length; i++){
		if(seen[nums[i]]) return nums[i]
		seen[nums[i]] = true;
	}
}



