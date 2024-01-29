
class Queue { 
	constructor(){
		this.stack = []
		this.unstack = []
	}
	push(x){
		this.stack.push(x)
	}
	
	//moves items from stack to unstack until last stack item (1st q item)
	// is remaining, then removes the item from the stack and returns it
	_unstack(){
		while(this.stack.length > 1){
			this.unstack.push(this.stack.pop())
		}
		return this.stack.pop()
	}
	_restack(){
		while(this.unstack.length > 0){
			this.stack.push(this.unstack.pop())
		}
	}

	peek(){
		const peeked = this._unstack()
		if(peeked)
			this.stack.push(peeked) //put peeked value back on stack
		this._restack() //move items back from unstack to stack
		return peeked;
	}

	pop(){
		//get first q item (last stack item)
		const popped = this._unstack()
		this._restack();
		return popped;
	}
}
