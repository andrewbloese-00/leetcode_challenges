
//given the head of a singly-linked-list, reverse it and return the head of the reversed list
//intuition: 
//use an array to track the values of nodes in the list
//then iterate backwards, creating a new "ListNode" for each of the original items
//return the head of the reversed 


function ListNode(val,next){
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

function reverseList(head){
	const items = [];
	let ptr = head; 
	while(ptr !== null){
		items.push(ptr.val);
		ptr = ptr.next; 
	}
	if(!items.length) return null;
	const reversed = new ListNode();
	ptr = reversed; 
	for(let i = items.length-1; i > 0; i--){
		ptr.val = items[i];
		ptr.next = new ListNode()
		ptr = ptr.next;
	}
	ptr.val = items[0]
	return reversed; 
}

//Leetcode Results
//46 ms		|	44.80mb
//95.44%	|	8.65%



