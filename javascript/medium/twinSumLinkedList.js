function pairSum(head){

	//1. Convert Into Array
	let nums = [];
	let ptr = head;
	while(ptr){
		nums.push(ptr.val)
		ptr = ptr.next;
	}

	//2. Use two pointers to calc twin sums
	let ans = 0;
	let i = 0, j = nums.length-1;
	while(i < j){
		ans = Math.max(ans,nums[i]+nums[j])
		i++; j--;
	}
	return ans; 
}

//leetcode results 
// 133ms 	|	46.03%
// 95.18mb	|	14.72%
