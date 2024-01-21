
function isIsomorphic(s,t){
	const n = s.length
	if(n !== t.length) return false;
	let sMap = new Map()
	let tMap = new Map()
	for(let i = 0; i < n; i++){
		if(sMap.get(s[i]) !== tMap.get(t[i]) return false
		sMap.set(s[i],i+1)
		tMap.set(t[i],i+1
	}
	return false; 
}

// Leetcode Results
// 65ms		|	49.93mb
// 52.20%	|	6.12%
