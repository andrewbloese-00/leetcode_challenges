const VOWELS = "aeiou";
const isVowel = char => VOWELS.includes(char)



function maxVowels(s,k){
	const n = s.length; 
	//calculate vowels in the first window
	let i = 0, numVowels = 0; 
	while(i < k){
		if(isVowel(s.charAt(i)) numVowels++;
	}
	let max = numVowels; 

	//calculate vowels in the rest of the windows
	while(i < n){
		if(isVowel(s.charAt(i)) numVowels++;
		if(isVowel(s.charAt(i-k)) numVowels--;
		if(numVowels > max) max = numVowels;
		i++;
	}
	return max;
}

//Leetcode Results
// 79ms 	|	45.88mb
// 68.28%	|	41.94%
