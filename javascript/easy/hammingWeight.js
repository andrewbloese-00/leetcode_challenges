function hammingWeightNaive(n){
	let binary = n.toString(2), bits = 0;
	for(let i = 0; i < binary.length;i++){
		if(binary.charAt(i) == "1") bits++
	}
	return bits;
}
//Leetcode 
//	Runtime		| 	Memory	
//	45ms		|	42.6mb
//  95.99%		|   35.88%




