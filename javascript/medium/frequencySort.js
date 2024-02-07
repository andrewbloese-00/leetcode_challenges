
function frequencySort(s){

	//get frequency
	const freq = {} 
	for(const char of s){
		if(!freq[char]) freq[char] = 1;
		else freq[char]++;
	}

	//sort by frequency of chars in the string
	return [...s].sort((a,b)=>{
		const diff = freq[b] - freq[a]
		if(diff === 0) return a > b ? 1 : -1
		return diff; 
	}).join("")
}


//LEETCODE RESULTS
// 126ms	|	55.26mb
// 13.74%	|	28.55%

