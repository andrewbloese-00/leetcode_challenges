// '../' go back one directory (unless already in main)
// './' stay in current directory
// '/[a-zA-Z]' navigate to a folder
// starting at main folder, after completing operations in log, find
// min # ops to get back to main folder
// 
// '../' = -1
// './' = +0
// else = +1
//

function minOperations(logs){
	let dist = 0
  	for(let l = 0; l < logs.length;l++){
    	if(logs[l] === "../")
            if(dist > 0) dist--
        else if (logs[l] !== "./") dist++
    }
    return dist
}
