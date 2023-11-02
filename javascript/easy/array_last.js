//return the last element in an array (if it has any items)
Array.prototype.last = function (){
	if(this.length == 0) return -1
	return this.at(-1)
}


function test(){
	const array = [ 1 , 2 , 3 ]
	const expected = 3;
	console.log("Passed: " , array.last() === expected)
}

test();

