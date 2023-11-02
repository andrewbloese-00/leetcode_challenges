
const sleep = ms => new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(ms)
	},ms)
}) 

const SLEEP_DURATION = 1000

async function main(){
	
	const sleepTime = await sleep(SLEEP_DURATION);
	console.log("Passed: ", sleepTime === SLEEP_DURATION);
}
main();
