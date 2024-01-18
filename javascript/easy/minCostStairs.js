/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
*/

function minCostClimbingStairs(cost){
	const n = cost.length; 
	let min = Array(n).fill(0)
	min[0] = cost[0]
	min[1] = cost[1]
	for(let stair = 2; stair < n; stair++){
		min[stair] = cost[stair] + Math.min(min[i-1],min[i-2])
	}
	return Math.min(min[n-1],min[n-2])
}
//Leetcode Results
// 48ms		|	43.63mb
// 93.96%	|	60%

