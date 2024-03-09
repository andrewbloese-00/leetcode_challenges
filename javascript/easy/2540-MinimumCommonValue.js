function getCommon(l1,l2){
	let i = 0, j = 0; 
	while( i < l1.length && j < l2.length ){
		if(l1[i] === l2[j]) return l1[i];
		if(l1[i] < l2[j]) i++;
		else j++;
	}
	return l1[i] === l2[j] ? l1[i] : -1;
}

//results
//64ms 	 | 56.96mb
//84.69% | 68.88%

