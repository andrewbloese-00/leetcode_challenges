
const OFFSET = "a".charCodeAt(0);

function firstUnique(str){
	//compute frequency
	const frequency = Array(26).fill(undefined);
	getFrequency(str,frequency);

	//find the first unique (character with value 1 in the frequency list
	for(let i = 0; i < str.length; i++){
		const key = str.charCodeAt(i) - OFFSET;
		//return the index of the item
		if(frequency[key][0] === 1) return frequency[key][1] 
	}
	return -1; //no unique
}

function getFrequency(s, arr){
	for(let i = 0; i < 26; i++){
		arr[i] = [0,-1] //[freq,lastSeen]
	}
	for(let i = 0; i < s.length;i++){
		const key = s.charCodeAt(i) - OFFSET;
		arr[key][0]++
		arr[key][1] = i
	}
}



//Leetcode Results 
//	56ms	|	53.4mb
//	99%		|	46.08%

