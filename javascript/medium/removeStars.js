
//remove all stars and their nearest non star left neighbor from the
//input string. 
//
//Approach:
//For character in s:
//  When we encounter a normal character, add it to the list
//  When we encounter a *, we pop the most recently added character 
//     and "remove" the star from s by not pushing it to the result. 

//then join the list as a string to get the string with all stars removed

function removeStars(s){
	let res = []
	for(let i = 0; i < s.length; i++){
		if(s[i] === "*") res.pop();
		else res.push(s[i]);
	}
	return res.join("");
}

//Leetcode Results
// 83ms		|	57.85mb
// 76.69%	|	29.76%

