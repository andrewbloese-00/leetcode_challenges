
//find the level index (1 indexed) of the tree whose node have the greatest sum
function maxLevelSum(root){
	let max = -Infinity, maxLvl = 0, lvl = 1;
	//use bfs 
	const q = [root] 
	while(q.length > 0){
		const lvlN = q.length; 
		let lvlSum = 0;
		for(let i = 0; i < lvlN; i++){
			const current = q.shift();
			lvlSum += current.val;
			if(current.right) q.push(current.right);
			if(current.left) q.push(current.left);
		}
		if(lvlSum > max){
			max = lvlSum; 
			maxLvl = lvl;
		}
		lvl++;
	}

	return maxLvl;
}


//Leetcode Results
// 166ms 	|	 68.25mb
// 14.08%	|	75.18%
