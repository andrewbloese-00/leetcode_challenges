/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


//explain - used a two pointer approach to iterate through the linked list and bypass the connection from slowNode to fastNode 

var deleteDuplicates = function(head) {
    let slow = head, fast = head;
    while(slow != null){
        while(fast && fast.val == slow.val){
            fast = fast.next
        }
        slow.next = fast;
        slow = slow.next;
    }
    return head

};

//leetcode results 
//66ms	- 43.3mb
//27.6% - 99.8%
//
