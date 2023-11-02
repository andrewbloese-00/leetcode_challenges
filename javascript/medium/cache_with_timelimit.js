var TimeLimitedCache = function() {
    this.$= {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let expires = performance.now() + duration
    if(!this.$[key]){
        this.$[key] = { v: value, expires}
        return false
    } else { 
        this.$[key].v = value
        this.$[key].expires = expires
        return true
    }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(!this.$[key] || this.$[key].expires < performance.now()) return -1
    return this.$[key].v
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let c = 0
    for(let key in this.$){
        if(this.$[key].expires > performance.now()) c++;
    }
    return c
};


const sleep = ms => new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(ms)
	},ms)
}) 



//local testing fn
async function test(){
    const cache = new TimeLimitedCache()
    const results = []
    cache.set(1,42,1000);
    results.push(cache.get(1) === 42);
    results.push(cache.count() === 1);
    await sleep(2000); //wait for entry to expire
    results.push(cache.get(1) === -1);
    results.push(cache.count() === 0);

    //all should be 'true' if test passed
    console.log("Passed: ", results);
}
test();