//Given an array of integers return true if number of occurences of each value in the array is unique; return false otherwise. 

function uniqueOccurences(arr){
	//calculate frequencies of the elements in the array
	const occur = {};
	for(let i = 0; i < arr.length; i++){
		const hash = String(arr[i]);
		if(!occur[hash]) occur[hash] = 0;
		else occur[hash]++;
	}

	//make sure that no two elements are seen the same # times
	const seen = [];
	for(let hash in occur){
		if(seen.includes(occur[hash]) return false;
		seen.push(occur[hash]);
	}

	return true; 
}

//leetcode results
// 50ms		| 	42.59mb
// 78.96%	|	60.81%
//
