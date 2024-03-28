function areAnagrams(s1,s2,f){
	if(s1.length !== s2.length) return false;
	for(let c = 0; c < s1.length; c++){ //should cancel out
		f[s1.charCodeAt(c) - OFFSET]++;
		f[s2.charCodeAt(c) - OFFSET]--;
	}

	if(f.some(x=>x!==0)){
		f.fill(0); //reset comparison array...
		return false;
	}
	return true;
}



function groupAnagrams(strs){
	const groups = [], f = Array(27).fill(0)
	let foundGroup = false; 
	
	for(let i = 0; i < strs.length; i++){
		for(let g = 0; g < groups.length; g++){
			//reuse the array used for comparison 'f'
			if(areAnagrams(groups[g][0],strs[i],f){
				groups[g].push(strs[i])
				foundGroup = true; 
			}
		}
		if(!foundGroup) groups.push([strs[i]])
		else foundGroup = false; //reset flag
	}
	return groups;
}
