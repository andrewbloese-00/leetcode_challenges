//naive solution
function countBitsNaive(n){
	const ans = Array(n+1).fill(0);
	for(let i = 0; i < ans.length; i++)
		ans[i] = numBitsHelper(i);
	return ans;
}

function numBitsHelper(x){
	let s = x.toString(2), c=0;
	for(let i = 0; i < s.length; i++)
		if(s.charAt(i) == "1") c++;
	return c;
}


//leetcode results
// Runtime		|	Memory
// 78ms			|	49.47mb
// 47.36%		| 	40.09%

//end naive solution

// better memory solution
function countBits(n) {
    const ans = Array(n+1).fill(0);
    for(let i = 0; i < ans.length; i++){
        ans[i] = numBits(i)
    }
    return ans
};

function numBits(n){
    if(n == 0) return 0;
    if(n == 1) return 1;
    if(n%2 == 0) return numBits(Math.floor(n/2))
    return 1 + numBits(Math.floor(n/2))
}

//leetcode results
//	Runtime		| 	Memory
//	78ms		|	47.78mb
//	47.36%		|	84.19%
