
const OFFSET = 'a'.charCodeAt(0);
const isZero = (x)=>x===0;

function isAnagram(s,t){

	//must have same number of chars
	if(s.length !== t.length) return false; 
	
	//0..26 -> a..z
	const freq = Array(26).fill(0)
	for(let i = 0; i < s.length; i++){
		const key_s = s.charCodeAt(i)-OFFSET;
		const key_t = t.charCodeAt(i)-OFFSET;
		//chars in t cancel out chars in s
		freq[key_s]++;
		freq[key_t]--;
	}
	
	//if even, all elements in frequency should end up at 0
	return freq.every(isZero)
}
//results 
// 64ms		|	41.68mb
// 80.58%	|	99.32%
