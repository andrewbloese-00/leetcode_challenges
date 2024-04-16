function intersect(a,b){
	const seen = {},res=[];
	let i; 
	for(i = 0; i < a.length; i++){
		if(!seen[a[i]]) seen[a[i]] = 1;
		else seen[a[i]]++;
	}

	for(i = 0; i < b.length; b++){
		if(seen[b[i]]{
			res.push(b[i]);
			seen[b[i]]--;
		}
	}
	return res;
}
