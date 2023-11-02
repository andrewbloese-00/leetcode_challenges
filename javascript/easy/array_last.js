//return the last element in an array (if it has any items)
Array.prototype.last = function (){
	if(this.length == 0) return -1
	return this.at(-1)
}

//local test function 
const IS_TRUE = v => v === true
const arrays = [
	[1,2,3],
	[5,6,7],
	[],
	[8,9,10],
	[11],
]
const expected = [
	3,7,-1,10,11
]
function test(){
	const results = [];
	for(let i = 0; i < arrays.length; i++) {
		results[i] = arrays[i].last() === expected[i];
	}
	console.log("Array.last passed:", results.every(IS_TRUE))
}




test();

