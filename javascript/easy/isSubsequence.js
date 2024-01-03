

//checks if s is a 'subsequence' of t
function isSubsequence(s,t){
	//empty string is a subsequence of all
	if(s.length === 0) return true; 
	let matchedCount = 0;
	for(let i = 0; i < t.length; i++){
		//'consume' a subsequence char
		if(t.charAt(i) == s.charAt(matchedCount)) matchedCount++;
		//check if subsequence is fully consumed
		if(matchedCount == s.length) return true;
	}
	return matchedCount == s.length; 
}

//leetcode performance
// 50ms 	| 40.8mb
// 74.67%	| 99.45%
