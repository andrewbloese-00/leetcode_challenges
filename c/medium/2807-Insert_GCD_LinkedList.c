/*
=====================
Problem Description:
======================
Given the head of a linked list head, in which each node contains an integer value, 
between every pair of adjacent nodes, insert a new node with a value equal to the
greatest common divisor of them. Return the linked list after insertion.


=========
Approach
=========
1. Check if the list is long enough to perform operation on
2. Use two pointers (one for each node of the current pair)
3. Use greatest common divisor algorithm to make a new node to insert between 
   the current pair
4. Iterate the pointers correctly to the next pair. 

============
Illustration
============

say we have nodes [ 18 -> 6 -> 10 -> 3 ]
let p and n be prev and next pointer 
Start At

  p    n
[18 -> 6 -> 10 -> 3]
-> determine gcd (18,6) = 6
-> insert 6 between p and n
 p          n
[18 -> 6 -> 6 -> 10 -> 3]
-> shift to next pair (p moves 2, n moves 1)
            p     n
[18 -> 6 -> 6 -> 10 -> 3]
-> repeat until end of list 
...
*/



#include <stdlib.h>


int gcd(int a, int b){
    if (a == 0) return b
    return gcd(b%a,b)
}

struct ListNode { 
    int val; 
    struct ListNode* next; 
};


struct ListNode* MakeNode(int val){
    struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode)); 
    node->val = val; 
    return node; 
}




struct ListNode* insertGreatestCommonDivisors(struct ListNode* head){

    //base cases: empty list / 1 item 
    if(head == NULL) return head; 
    if(head->next == NULL) return head;

    struct ListNode* pre_ptr = head->next; 
    struct ListNode* nxt_ptr = head->next; 

    while (nxt_ptr != NULL){
        //determine gcd of current pair
        int val = gcd(pre_ptr->val, nxt_ptr->val); 
        struct ListNode* new_node = MakeNode(val);
        //link new node
        pre_ptr->next = new_node; 
        new_node->next = nxt_ptr; 
        //move to next pair
        pre_ptr = pre_ptr->next->next;
        nxt_ptr = nxt_ptr->next; 
    }
    return head; 
}


/*
=============================
| LeetCode Run Results      |
=============================
|       | Runtime | Memory  |
-----------------------------
| value | 26ms    | 14.51mb |
-----------------------------
| beats | 69.77%  | 99.53%  |
-----------------------------

*/
