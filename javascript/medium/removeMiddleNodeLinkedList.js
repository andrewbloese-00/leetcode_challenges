
//Given the head of a linked list, find and delete the FLOOR(n/2)th node where "n" is the length of the array. 
//
//Approach 
//If the head or next element is null then exit immediately, nothing to calcualte. 
//Otherwise use 3 pointers
//	1. slow -> moves 1 node at a time
//	2. fast -> moves up to 2 nodes at a time
//	3. prev -> points to the slowptr of the last iteration
// Then, move pointers until fast reaches the end, this will leave slowptr at the FLOOR(n/2) indexed node. To delete a node in a linked list simply point the previous nodes "next" to the targeted nodes "next"


function deleteMiddle(head){
	if(!head || !head.next) return null
	let slowptr = head; prevptr = slowptr, fastptr = head.next; 
	while(fastptr !== null){
		fastptr = fastptr.next
		prevptr = slowptr
		slowptr = slowptr.next; 
		//move fast again if possible
		if(fastptr !== null) fastptr = fastptr.next; 
	}

	//delete middle node at "slowptr"
	prevptr.next = slowptr.next; 
	return head; 
}

//Leetcode Results 
// 601ms ? 	|	87.66mb
// 11.75%	|	100%
// Something seems off with these results... but its what leetcode says
