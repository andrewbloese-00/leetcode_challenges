class MinHeap {
	static LEFT(i){ return 2*i }
	static RIGHT(i) { return 2*i+1 }
	static PARENT(i) { return Math.floor(i/2) }

    items:any[]
    size:number
    compare:((a,b)=>number)
	constructor(compare_fn=(a,b)=>a-b){
		this.items = [null];
		this.size = 0
		this.compare = compare_fn;
	}
	insert(item){
		this.size++;
		this.items.push(item)
		this.heapifyUp();
	}
	heapifyUp(){
		let i = this.size, p = MinHeap.PARENT(i); 
		while( p > 0 ){
			const childValue = this.items[i];
			const parentValue = this.items[p]
			if(this.compare(parentValue,childValue) > 0) {
				this.items[p] = childValue;
				this.items[i] = parentValue;
			}
			i = p;
			p = MinHeap.PARENT(i);
		}
	}
	extract(){
		if(this.size == 0) {
			console.error("Heap Empty!")
			return null;
		}
		const max = this.items[1];
		this.items[1] = this.items[this.size];
		this.size--;
		this.items.pop();
		this.heapifyDown();
		return max;
	}
	getSmallerChildIndex(idx){
		const [left,right] = [MinHeap.LEFT(idx),MinHeap.RIGHT(idx)]
		if(right > this.size) return left;
		if(this.compare(this.items[left], this.items[right]) < 0) 
			return left;
		return right;
	}
	heapifyDown(){
		let i = 1; 
		while(MinHeap.LEFT(i) <= this.size){
			const smaller_idx = this.getSmallerChildIndex(i)
			const parent = this.items[i]
			const child = this.items[smaller_idx]
			if( this.compare(parent,child) > 0){
				this.items[i] = child;
				this.items[smaller_idx] = parent; 
			}
			i = smaller_idx;
		}
    }
    peek(){
        return this.items[1]
    }
}


function kthSmallestPrimeFraction(arr, k){
	//use a minheap as a priority queue
	// stores the index of numerator/denominator pairs
	const q = new MinHeap(
		(a,b)=>arr[a[0]] * arr[b[1]] - arr[a[1]] * arr[b[0]]
	);
    
	//initialize queue with 1st possible fraction via each numerator
	for(let i = 0; i < arr.length - 1; i++){
        q.insert([i,arr.length-1])
    }

	//pop the queue k-1 times
    for(let i = 1; i < k; i++){
        const [ num, denom ] = q.extract()
        //push fraction using the next smallest denominator
		if(denom - 1 > num){
            q.insert([num,denom-1])
        }
    }
	//return the values for numerator and denominator by peeking the q
    return q.peek().map(idx=>arr[idx])
};
