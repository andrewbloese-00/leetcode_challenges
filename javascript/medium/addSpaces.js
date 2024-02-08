
function addSpaces(s,spaces){
	let ans = "", j = 0, i = 0;
	while(i < s.length){
		if( j < spaces.length && i === spaces[j]){
			ans += " "; j++;
		}
		ans+= s[i];
		i++;
	}
}


// Results 
//	208ms	|	89.44mb
//	27.03%	|	89.19%

