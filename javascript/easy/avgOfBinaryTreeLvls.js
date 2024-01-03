
function averageOfLevels(root){
	let ans = [];
	//use bfs, needs a queue, can use [] in place. 
	//push = enqueue ; shift = dequeue
	let q = [root]
	while(q.length > 0){
		let lvl_n = q.length; //get size of the level for calculating avgs
		let sum = 0; //calc sum of current level
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

//leetcode performance
// 73ms 	|	46.85mb
// 36.36% 	|	76.41%