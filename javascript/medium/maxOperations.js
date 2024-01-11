
//intuition - sort the array so we can do n/2 iterations to determine the k pairs.
// if the sum at the current i and j is over k, decrement j to get a lower value
// if the sum at the current i and j is under k, increment i to get a higher value
// otherwise we have a pair sum = k, increment counter and move both pointers. 

function maxOperations(nums,k){
	let operations = 0;
	nums.sort((a,b)=>a-b)
	let i = 0, j = nums.length -1;
	while(i < j){

		if(nums[i] + nums[j] === k){ 
			operations++;
			i++; j--;
		}
		else if(nums[i] + nums[j] > k) j--;
		else i++;
	}
}


//LeetCode Results 
// 152ms	|	53.06mb
// 43.37%	|	71.62%
