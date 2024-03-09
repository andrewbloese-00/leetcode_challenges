
function firstPalindrome(words){
	for(let i = 0; i < words.length; i++) {
		let l = 0, r = words[i].length, found=true; 
		while(l < r) {
			if(words[i][l] != words[i][r]) {found=false; break; }
			l++; r--; //move to center of string
		}
		if(found) return words[i] 
	} 
	return "";
}


//Leetcode Results 
// 70ms		|	53.58mb
// 75.99%	|	41.85%
