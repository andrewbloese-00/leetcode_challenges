//utilize a stack to match off the parenthesis, 
//calculate the longest on the fly at each iteration to return the final maximum. 
function longestValidParenthesisV1(s){
	let stack = [-1], longest = 0; 
	for(let i = 0; i < s.length; i++){
		if(s.charAt(i) === "(") stack.push(i)
		else {
			stack.pop();
			if(stack.length === 0) stack.push(i)
			else longest = Math.max(longest, i - stack.at(-1))
		}
	}
	return longest; 
}

//leetcode results 
// 68 ms	| 44.52mb
// 28.55%	| 43.87% 
