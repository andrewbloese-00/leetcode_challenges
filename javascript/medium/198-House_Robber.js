function rob(houses){
	if(houses.length === 0) return 0 
	const dp = Array(houses.length)
	dp[0] = 0
	dp[1] = houses[0]

	for(let i = 1; i < houses.length; i++)
		dp[i+1] = Math.max(dp[i], dp[i-1] + nums[i])
	
	return dp[houses.length]
}
