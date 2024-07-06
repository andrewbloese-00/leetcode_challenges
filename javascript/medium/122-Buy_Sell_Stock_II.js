function maxProfit(prices){
	let max = 0; 
	for(let i = 0; i < prices.length; i++){
		if(start < prices[i]) max += (prices[i] - start) 
		start = prices[i] 
	}
	return max; 
}

// Leetcode Results 
// 47ms 	| 91.26%
// 48.93mb 	| 87.37% 
