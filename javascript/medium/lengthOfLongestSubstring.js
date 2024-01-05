
function longestSubstring(s){
	let max = s.length > 0 ? 1 : 0; 
	let p = 0;
	let sub = "";
	while(p < s.length){
		let char = s.charAt(p)
		if(sub.includes(char)){
			if(sub.length > max) max = sub.length;
			sub = sub.substring(sub.indexOf(char)+1)
		}
		sub += char; 
		p++;
	}
	if(max < sub.length) max = sub.length; 
	return max;
}


//leetcode results
//	65ms	|	47.74mb
//	90.01%	|	51.48%

