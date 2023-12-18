
function climbStairs(n){
	if(n<=2) return n;
	const dp = Array(n+1).fill(-1);
	dp[0]=0;
	dp[1]=1;
	dp[2]=2;
	for(let i = 3; i <=n;i++)
		dp[i]=dp[i-1]+dp[i-2]
	return dp[n];
}

//leetcode results 
//43ms		|	41.67mb
//91.15%	|	60.01%


