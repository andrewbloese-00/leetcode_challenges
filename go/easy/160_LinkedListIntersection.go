type ListNode struct { 
	Val int
	Next *ListNode
}


func getIntersectionNode(headA,headB *ListNode) *ListNode { 
	a,b := headA,headB
	for a != b { 
		if p1 == nil { 
			p1  = headB
		} else { 
			p1 = p1.Next
		}

		if p2 == nil {
			p2 = headA
		} else { 
			p2 = p2.Next
		}
	}
	return a 
}

