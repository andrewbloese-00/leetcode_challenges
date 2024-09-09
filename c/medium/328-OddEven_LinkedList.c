/*
======================
|Problem Description |
======================
 Given the head of a singly linked list, group all the nodes with odd 
 indices together followed by the nodes with even indices, and return
 the reordered list.

 The first node is considered odd, and the second node is even,
 and so on.

 Note that the relative order inside both the even and odd groups 
 should remain as it was in the input.

 You must solve the problem in O(1) extra space complexity and
 O(n) time complexity.

====================
| Approach         |
====================
 1. We will have several pointers: 
  - current node (iterating)
  - the even node head and odd node head (defaulted to NULL)
  - the currentEnd of even and odd lists. 
  - a "restore" pointer to cut old connections while iterating in order

 2. Use a boolean flag 'isEven' starting at false to determine which 
 list to add to. Toggle using `isEven = !isEven` at end of each iteration
 3. Merge the two lists (if applicable)

*/



#include <stdlib.h>

struct ListNode {
	int val; 
	struct ListNode *next;
};

struct ListNode* oddEvenList(struct ListNode* head) {
    if(head == NULL) { return NULL; }

    struct ListNode* evenHead = NULL;
    struct ListNode* oddHead = NULL;

    struct ListNode* current = head;
    struct ListNode* currentOdd = NULL; 
    struct ListNode* currentEven = NULL; 
    struct ListNode* restore = NULL;
    int isEven = 0;

    while(current != NULL){
        if(isEven == 1){ //if even
            if(evenHead == NULL){ //first encountered even
                evenHead = current;
                currentEven = evenHead;
            } else { //add to end of even list
                currentEven->next = current;
                currentEven = currentEven->next;
            }
        } else { //odd 
            if(oddHead == NULL) {
                oddHead = current;
                currentOdd = oddHead;
            } else { 
                currentOdd->next = current;
                currentOdd = currentOdd->next;
            }
        }
        //toggle even
        if(isEven == 1){
            isEven = 0;
        } else { 
            isEven = 1;
        }
        restore = current->next;
        current->next = NULL; //remove ordering of inital list 
        current = restore;
    }

    if(oddHead == NULL) {
        return evenHead;
    }
    if(evenHead == NULL){
        return oddHead;
    }
    currentOdd->next = evenHead; 
    return oddHead; 
}

/*
===============================
| Leetcode Submission Results |
===============================
 |Runtime 	               |
 |3ms        beats 87.6%   |
 |-------------------------|
 |Memory                   |
 |11.43m     beats 28.55%  | 
 |-------------------------|
*/