//given two strings s1 and s2, determine the greatest length 
// common string 'divisor'
// If concat of strings in either order are not equal, no divisor
// otherwise get the gcd of the length of s1 and s2


function gcd(x,y){
	if(!y) return x
	return gcd(y,x % y)
}

function gcdOfStrings(s1,s2){
	if(s1+s2 !== s2+s1) return ""
	const l1 = s1.length, l2 = s2.length;
	const n = gcd(s1,s2);
	return s1.slice(0,n)
}

//leetcode results
// 51ms		|	42.35mb
// 72.07%	|	55.1%
