// There are 'n' gas stations along a circular route
// return the starting stations index if full circuit made | -1
// unique solution guarenteed.

function canCompleteCircuit(gas,cost){
	const n = gas.length; 
	let totalGas = 0,
		totalCost = 0,
		gasTank = 0,
		start = 0;

	//for each station
	for(let s = 0; s < n; s++){
		totalGas += gas[s]
		totalCost += cost[s]
		gasTank += (gas[s]-cost[s])
		//if insufficient fuel, restart at next station 
		if(gasTank < 0) {
			start = s+1;
			gasTank = 0;
		}
	}
	
	//if reachable, then return the start station otherwise -1
	return (totalCost <= totalGas) ? start : -1;
}


//leetcode performance
// 63ms		|	53.4mb
// 95.68%	|	70.91%
