const RULES = { 
	"type": 0,
	"color": 1,
	"name", 2
} 
function countMatches(items,ruleKey,ruleValue){
	let matchCount = 0;
	for(let i = 0; i < items.length; i++)
		if(items[i][RULES[ruleKey] === ruleValue) matchCount++;
	return matchCount; 
}
//Results 
//	51ms	|	52.3mb
//	98.7%	|	29.48%
