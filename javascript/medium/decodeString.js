function decodeString(s){
	//parse -> <num>[<pattern>] | <pattern>

    const stack = [];
    let currentN = 0, currentString = ""
    for(const char of s){
        if(char === "["){
            stack.push(currentString);
            stack.push(currentN);
            currentString=""
            currentN = ""
        }
        else if (char === "]"){
            let n = stack.pop();
            let prev = stack.pop();
            let mult =""
            for(let i = 0; i < n; i++) mult += currentString;
            currentString = prev + mult
        } 
        else if(!isNaN(char)){
            currentN = currentN*10 + parseInt(char)
        } 
        else { 
            currentString += char; 
        }
    }
    return currentString;
}

//leetcode results 
// 46ms		| 42.12mb
// 85.75%	| 18.66%
