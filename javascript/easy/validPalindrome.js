
function isPalindrome(s){
	//clean string
	s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
	let i = 0, j = s.length-1;

	while(i < j){
		if(s.charAt(i) !== s.charAt(j)) return false
		i++;
		j--;
	}

	//processed whole string in (len/2) iterations, is palindrome
	return true; 
}

//leetcode performance 
// 105ms 	| 	43.18mb
// 9.14%	| 	99.23%

