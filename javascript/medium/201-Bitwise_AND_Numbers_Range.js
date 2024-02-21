function rangeBitwiseAnd(left,right){
	let i = 0; 
	while( left != right ){ 
		left >>= 1// right shift
		right >>= 1;
		i++
	}
	return left << i;
}

//Leetcode Results
// 118ms	|	55.22mb
// 76.59%	|	25.85%
