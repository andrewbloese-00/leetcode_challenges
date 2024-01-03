function maxProfit(prices){
	let buy = 0, sell = 1, maxProfit = 0, currentProfit = 0;
	while(buy < prices.length){
		currentProfit = prices[sell] - prices[buy];
		if(prices[buy] < prices[sell]){
			if(currentProfit > maxProfit) maxProfit = currentProfit;
		} else {
			buy = sell;
		} 
		sell++;
	}
	return maxProfit;

}

//leetcode performance
// 68ms		| 50.93mb
// 78.04% 	| 96.72%
