
function removeElements(head,val){
	let h = head, c = head, s, f; 
	if(head) f = head.next;
	while(c){
		if(c.val === val){
			if(!s) {
				h = h.next; 
				c = h; 
				if(f) f = f.next; 
			} else { 
				s.next = f; 
				c = f;
				if(f) f = f.next; 
			}
		} else { 
			s = c;
			c = c.next; 
			if(f) f = f.next;
		}
	}
	return h; 
}
