
function averageOfLevels(root){
	let ans = [];
	//use bfs, needs a queue, can use [] in place. 
	let q = [root]
	while(q.length > 0){
		let lvl_n = q.length; //get size of the level for calculating avgs
		let sum = 0; 
		for(let i = 0; i < lvl_n; i++){
			let t = q.shift();
			if(t.left) q.push(t.left);
			if(t.right) q.push(t.right);
			sum += t.val;
		}
		ans.push((sum/lvl_n)); //push the level average onto result list
	}
	return ans;
}

