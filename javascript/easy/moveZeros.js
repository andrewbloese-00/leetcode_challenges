
//move all the zeros to the end of the provided array, in place, without changing the relative order of the other elements. 
//intuition, use two pointers, 'i' keeps track of the last seen nonzero element, and j keeps track of the zeros elements. swapping the elements at i and j until we reach the end. 

function moveZeros(nums){
	const N = nums.length; 
	let i = 0, j = 0, temp;
	while(i < N && j < N){
		if(nums[i] !== 0) i++;
		if(nums[j] === 0) j++;
		if(i < N && j < N && i < j){
			temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
		}
		j++;
	}

}


//Leetcode Results
// 72ms		|	46.73mb
// 79.77%	|	37.44%

