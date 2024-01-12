//given an even length string, determine if its halves are "similar"
// "similar" -> vowels(left half) === vowels(right half)
// assume any input string "s" is even. 
function halvesAlike(s){
	let i = 0, j = s.length-1, vowels = 0;
	while(i < j){
		if(isVowel(s[i])) vowels++;
		if(isVowel(s[j])) vowels--;
		i++; j--;
	}

	//similar should have the same # of vowels so...
	//vowelsLeft - vowelsRight = 0 
	return vowels === 0;
}

//leetcode results
//	45ms	|	44.16mb
//	96.17%	|	35.89%

