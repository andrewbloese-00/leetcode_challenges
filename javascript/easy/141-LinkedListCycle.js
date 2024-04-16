function listHasCycle(head){
	let slow, fast = head; 
	while(fast) {
		fast = fast.next; 
		if(fast){
			slow = slow ? slow.next : head; 
			fast = fast.next; 
			if(fast === slow) return true; //intersected -> cycle
		}
	}
	return false; //fast became null -> no cycle
}


