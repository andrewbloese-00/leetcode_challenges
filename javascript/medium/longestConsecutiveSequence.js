
//intuition: 
/*
 Use the builtin "Map" to a) ignore duplicates b) enable O(1) lookup time
 We convert each element of nums to a key in the map, and then use a simple incrementing checker to see if the map has the adjacent key. 

 //The length of the sequence is the difference between the last and starting number of the 'streak' 

*/



function longestConsecutive(nums){
	//convert to a map, fast lookups+remove duplicates from consideration
	const uniq = new Map();
	for(let n = 0; n < nums.length; n++)
		uniq.set(nums[n],true);
	let longest = 0; 
	for(const num of uniq.keys()){
		if(!uniq.has(num-1)){ //new streak to calculate...
			let last = num+1; //determine length of streak
			while(uniq.has(last)) last++; 
			//update result if applicable
			longest = Math.max(longest,last-num);
		}
	}
	return longest; 
}


//Leetcode Results 
// 102ms	|	62.79mb
// 72.48%	| 	85.61%

