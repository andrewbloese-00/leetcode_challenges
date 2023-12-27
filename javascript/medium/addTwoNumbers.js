
function ListNode(val,next){
	this.val = (val === undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

function addTwoNumbers(l1,l2){
	let result = new ListNode();
	let head = result; 
	let carry = 0; 

	//while either of the lists have value
	while(l1 !== null || l2 !== null){
		let sum = carry; 

		//add l1, it exists
		if(l1 !== null){
			sum += l1.val;
			l1 = l1.next;
		}
		//add l2, it exists
		if(l2 !== null){
			sum += l2.val;
		}

		//carry is just the number of 10s in the sum
		carry = Math.floor(sum / 10);
		//next node is the remainder
		result.next = new ListNode(sum%10);
		result = result.next;
	}

	//check if any value remaining
	if(carry > 0){
		result.next = new ListNode(carry);
	}
	head = head.next; //first node was empty, skip to first real node
	return head;
}

//LeetCode Results
// 157ms	- 47.14mb
// 6.17%	- 69.56%

