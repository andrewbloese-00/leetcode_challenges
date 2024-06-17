// Given an integer array nums, return all the triplets:
//	[nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and
// nums[i] + nums[j] + nums[k] == 0.

function threeSum(nums){
	const answer = [] 
	//get nums in increasing order
	nums.sort((a,b)=>a-b)
	for(let i = 0 ; i < nums.length-2; i++){
		//skip duplicate 'i' nums
		if(i>0 && nums[i] === nums[i-1]) continue;
		
		//use left and right pointers (l is 'j' , r is 'k')
		let l = i+1, r = nums.length-1;
		while(l < r){
			const sum = nums[i]+nums[l]+nums[r] 
			//found zero sum. 
			if( sum === 0 ) {
				answer.push([nums[i],nums[l],nums[r])
				//skip duplicate 'l' 
				while(l < r && nums[l] === nums[l+1]) l++;
				//skip duplicate 'r'
				while(l < r && nums[r] === nums[r-1]) r--;
				
				//adjust pointers
				l++;
				r--;
			} else if( sum < 0) {
				//sum too small, get next bigger value for 'l'
				l++;
			} else {
				//sum too large, get next smaller value for 'r'
				r--;
			}
			return answer;

		}
	}
}


// 	  LeetCode Results 
// |====================|
// | 152ms	 |	75.89%  |
// | 65.54mb | 	42.98%  |
// |====================|
