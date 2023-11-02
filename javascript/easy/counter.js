
//a counter function that starts at 'n', and after each subsequent call increases the value by 1. 
function createCounter(n){
	let i = 0;
	return function(){
		let result = n+i;
		i++;
		return result;
	}


}
//test counter correctness with n=0 
const IS_TRUE = v=>v===true
function test(){
	let counter = createCounter(0)
	const results = []
	for(let i = 10; i <= 100; i++){
		results.push(
			counter() == i 
		)
	}
	console.log("Count Test Passed: ", results.every(IS_TRUE));
}

test();
