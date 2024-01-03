
function nearbyDuplicates(nums,k){
	//hashmap to track positions of nums
	let seen= new Map();

	//for each number: return true if duplicate detected within distance k
	//otherwise update seen[number] to current index.
	for(let i = 0; i < nums.length; i++){
        if(seen.has(nums[i]) && (Math.abs(seen.get(nums[i]) - i ) <= k)){
            return true;
        } else seen.set(nums[i],i)

    }

	//no duplicates detected.
    return false;
}


//Leetcode Results
//77ms		|	66.62mb
//88.64%	|	41.03%

