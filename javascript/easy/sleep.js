
const sleep = ms => new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(ms)
	},ms)
}) 


//local testing fn
const SLEEP_DURATION = 1000;
async function test(){
	
	const sleepTime = await sleep(SLEEP_DURATION);
	console.log("Passed: ", sleepTime === SLEEP_DURATION);
}
test();
