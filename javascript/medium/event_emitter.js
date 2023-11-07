class CustomEventEmitter{
    constructor(){
        this.events = new Map()
    }
     /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {
        
        let i; //where the subscription callback is registered
        if(!this.events.has(eventName)){ //no event registered to that name
            this.events.set(eventName,[callback]); //initialize to first element in the array of callbacks
            i = 0;
        }
        else { //eventname already registered, add callback and set 'i' to its location
            i=((this.events.get(eventName).push(callback))-1);
        }

        
		return {
            //unsubscribe removes the 'i-th' callback from the registered callbacks
            //for a given eventName
			unsubscribe: () => {
				this.events.get(eventName).splice(i,1);
			}
		};
	}
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
        //keep track of results
        let results = []
        //make sure we actually have the requested event
		if(this.events.has(eventName)){
            for(let callback of this.events.get(eventName)){
                //push results of callback with specified args
                results.push(callback(...args))
            }
            return results
        }
        //no registered callback, empty result
        return []
	}
}


//local test
const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99 }
const sub = emitter.subscribe('onClick', onClickCallback);

emitter.emit('onClick'); // [99]
sub.unsubscribe(); // undefined
emitter.emit('onClick'); // []


//leetcode test
//  52 ms      |    43.3mb
//  66.47%     |    78.46%