function findRelativeRanks(scores){
	const n = scores.length; 
	const labeled = scores.map((score,athlete)=>[score,athlete])
	labeled.sort((a,b)=>b[0]-a[0]) //sort by score, descending
	const ans = new Array(n);
	for(let i = 0; i < n; i++){
		const athlete = labeled[i][1]
		if(i === 0){
            ans[athlete] = "Gold Medal"
        } else if( i === 1){
            ans[athlete] = "Silver Medal"
        } else if (i === 2) {
            ans[athlete] = "Bronze Medal"
        } else { 
            ans[athlete] = String(i+1)
        }
	}
	return ans;
}
