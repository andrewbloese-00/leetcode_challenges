
//a counter function that starts at 'n', and after each subsequent call increases the value by 1. 
function createCounter(n){
	let i = 0;
	return function(){
		let result = n+i;
		i++;
		return result;
	}


}
//test counter correctness with n=10 [10 , 11 , 12] 
function test(){
	let counter = createCounter(10)
	console.log(counter() === 10)
	console.log(counter() === 11)
	console.log(counter() === 12)
}

test();
