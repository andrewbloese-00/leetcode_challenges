//greedy approach -> pick the 'happiest' child at each selection
// 	* we can use the input array to model the problem by sorting it 
//    in decreasing order and iterating.
//  * subtract 'i' from happiness at each position to simulate the 
//    decreasing happiness values of unselected children. 

function maximizeHappiness(){
	happiness.sort((a,b)=>b-a); 
	let i = 0, happy = 0; 
	while(k > 0 && i < happiness.length){
		happiness[i] = Math.max(happiness[i] - i, 0)
		happy += happiness[i];
		i++; k--;
	}
	return happy;
}

