
//used to get charCodes into a range of 0..25
const OFFSET = "a".charCodeAt(0)

//helper sort fn for sorting in ascending order
const numericalAscending = (a,b)=>a-b


//compare 2 strings, determine if they are "close" to each other
//Intuition: 
// calculate the frequencies of characters in each word, 
// then sort the frequencies, 
// if the frequencies values differ, the strings are not close. 
// 
// use two arrays[0..25] to represent the count of characters in word1 and// word2 respectively


function closeStrings(word1,word2){
	if(word1.length !== word2.length) return false 

	let f1 = Array(26).fill(0)
	let f2 = Array(26).fill(0)
	let i = 0; 
	//determine character frequencies
	while(i < word1.length){
		const k1 = word1.charCodeAt(i) - OFFSET;
		const k2 = word2.charCodeAt(i) - OFFSET; 
		f1[k1]++; 
		f2[k2]++;
		i++;
	}

	//check 1, one is empty the other is not
	i = 0;
	while( i < 26){
		if((f1[i] === 0 && f2[i] !== 0) || (f1[i]!==0 && f2[i] === 0))
			return false; 
		i++;
	}

	//check 2, sorted frequences should be the same if strings are close
	i = 0;
	f1.sort(numericalAscending)
	f2.sort(numericalAscending)
	while(i < 26){
		if(f1[i] !== f2[i]) return false 
	}
	return true; 
}


//Leetcode Results 
// 64ms 	|	98.06%
// 47.77mb	| 	99.19%


