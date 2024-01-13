
function minStepsBrute(s,t){
	//sf = frequency of chars in s
	//tf = frequency of chars in t
	//c  = count of same chars
	let sf = {} , tf = {} , c = 0
	
	//determine character frequencies of s and t
	for(const char of s){
		if(sf[char]) sf[char]+=1;
		else sf[char] = 1;
	}

	for(const char of t){
		if(tf[char]) tf[char]+=1;
		else tf[char] = 1
	}

	
	for(const char in sf){
		if(char in tf){
			c += (sf[char] === tf[char]) 
				? sf[char]
				: Math.min(sf[char],tf[char])
		}
	}
	return s.length - c
}

//Results 
// 134ms	|	48.87mb
// 57.63%	|	25.99%


//Optimized Version calculate s and t frequencies at same time 


const OFFSET = "a".charCodeAt(0)
function minSteps(s,t){
	//26 letters in alphabet, use array to track frequency instead of obj
	let frequecy = Array(26).fill(0) 
	let i = 0; 
	while(i < s.length){
		const key_t = t.charCodeAt(i) - OFFSET;
		const key_s = s.charCodeAt(i) - OFFSET;
		frequency[key_t]++;
		frequency[key_s]--;
		i++
	}
	let steps = 0;
	//iterate to count up steps
	i=0;
	while(i < frequency.length){
		if(frequency[i] > 0) steps += frequency[i];
		i++
	}
	return steps;
}

//Leetcode Results 
//	69ms	|	46.28mb
//	93.22%	|	97.18%

