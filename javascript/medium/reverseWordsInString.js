
function reverseWords(s){
	//get all non-empty words from the string
	const words = s.split(" ").filter(Boolean)
	
	//concatenate in reverse order
	let str = ""
	for(let w = words.length-1; w > 0; w--)
		str += `${words[w]} `
	
	return str + words[0];
}


//leetcode results 
//	50ms	|	44.08mb
//	82.53%	|	43.49%

