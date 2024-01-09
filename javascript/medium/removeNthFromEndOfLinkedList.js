
function removeNthFromEnd(head,n){
	let slowptr = head, fastptr = head; 
	//move fast pointer n steps ahead
	for(let i = 0; i < n; i++)
		fastptr = fastptr.next;

	//n is >= length of the list so remove 1st element
	if(!fastptr) return head.next; 

	//position the slow and fast pointers to remove nth from last node
	while(fastptr.next){
		fastptr = fastptr.next; 
		slowptr = slowptr.next; 
	}

	//'delete' the nth from last node
	slowptr.next = slowptr.next.next; 
	
	//return reference to head of list
	return head; 
}


//leetcode results
// 55ms		|	42.55mb
// 58.17%	|	68.45%

