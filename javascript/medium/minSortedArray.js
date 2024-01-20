//find the minium element in an ascending sorted array that has been "rotated" in O(logn) and O(1) space
function 

function findMin(nums){
	//O(1) space, 3 numbers
	let l = 0, r = nums.length-1, m = 0;
	while(l < r){ //O(logn) time
		m = l + Math.floor((l+r)/2)
		if(nums[m] > nums[r]) l = m+1;
		else r = m;
	}
	return nums[l]
}


//Results
// 44ms		|	49.10mb
// 93.31%	|	5.29%

