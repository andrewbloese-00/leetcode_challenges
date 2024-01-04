
function ListNode(val,next){
	this.val = val === undefined ? 0 : val;
	this.next = (next === undefined ? null : next)
}


function mergeLists(l1,l2){
	
	let merged = new ListNode();
	if(!l1 && !l2) return merged;
	if(!l1) return l2;
	if(!l2) return l1;
	
	let ptr = merged; 
	//while both lists have elements left
	while(l1 != null && l2 != null){
		if(l1.val < l2.val){
			ptr.val = l1.val;
			l1 = l1.next;
		} else {
			ptr.val = l2.val;
			l2 = l2.next;
		} 
		if(l1 != null || l2 != null){
			ptr.next = new ListNode()
			ptr = ptr.next;
		} 
	}
	//when l1.length > l2.length
	while(l1 != null){
		ptr.val = l1.val;
		l1 = l1.next;
		if(l1 != null){
			ptr.next = new ListNode();
			ptr = ptr.next;
		}
	}
	//when l2.length > l1.length
	while(l2 != null){
		ptr.val = l2.val;
		l2 = l2.next;
		if(l2 != null) {
			ptr.next = new ListNode();
			ptr = ptr.next;
		}
	}
	//head of merged list
	return merged;
}


