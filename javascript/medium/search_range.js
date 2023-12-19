//searches for the start and end indices of a target element in an array
//of numbers. Returning [ i , j ] where i and j are indices where target
//first and last occur in the list, if no target (i = j = -1)

function searchRange(nums,target){
	let result = [-1,-1], i = 0, j = -1;
	while(i < nums.length){
		if(nums[i] === target){
			result[0] = i; 
			j = i; 
			while(j < (nums.length-1) && nums[j] === target)
				j++;
			
			j = nums[j] === target ? j : j-1;
			result[1] = j;
			return result;
			
		}
		i++;
	}
	return result;
}


//Leetcode Results
//	Runtime			|		Memory
//	53ms			|		42.22mb
//	54.50%			|		76.17%
