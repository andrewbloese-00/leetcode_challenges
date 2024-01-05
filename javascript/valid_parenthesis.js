//the approach 
/*
	To solve this problem, we can think about how a pushdown automata may solve this task. We will read in the input characters one at a time. If the character is a starter for a set of parenthesis, we push the symbol to the stack to check for matching against terminating characters.- Terminating Characters = " ) ] } "
	- Starter Characters = " ( [ { "
	Any non matching character will result in an immediate rejection. 
	At the end all symbols should be "crossed off" the stack by matching with their corresponding character. 
*/



function isValid(seq){
	let stack = []
	for(let char of seq){
		//check if matches any 'initiator'
		if(char == "(" || char == "[" || char == "{") stack.push(char);
		else {
			if(stack.length == 0) return false; 
			const top = stack.at(-1);
			//check if matches any 'terminator'
			if( char == ")" && top == "(" ||
				char == "]" && top == "[" ||
				char == "}" && top == "{"
			) stack.pop()
			else return false; 
		}
	}
	return stack.length === 0; 
	//all items should be 'consumed' if the parenthesis sequence is valid;
}


//leetcode results 
// 64ms 	| 	41.94mb
// 26.54%	|	84.85%


