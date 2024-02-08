/**
 * @param {string} s
 * @param {character} c 
 */
function shortestToChar(s,c){
	let i = 0, seenLeft = -1; 
	const answer = Array(s.length).fill(0);
	while( i < s.length){
		//mark latest left occurence of char
		if(s[i] === c) seenLeft = i; 
		else {
			let j = i+1, seenRight = -1; 
			while(j < s.length){
				if(s[j] === c) {seenRight = j; break;}
				j++;
			}
			//get the min distance to left or right instance of char
			const dR = seenRight >= 0 ? Math.abs(seenRight-i) : Infinity;
			const dL = seenLeft >= 0 ? Math.abs(i - seenLeft) : Infinity;
			answer[i] = Math.min(dR,dL);
		}
		i++;
	}
	return answer; 
}

//Results 
// 49ms		|	51.34mb
// 98.26%	|	34.72%
