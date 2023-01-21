'use strict';
// Task-15 (83. Remove Duplicates from Sorted List from lettcode.com)

/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 */


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
 var deleteDuplicates = function(head)  {
  let curr = head;
  while (curr && curr.next) {
      if(curr.val === curr.next.val) {
         
          curr.next = curr.next.next;
      } else {
          curr = curr.next;
      }
         
      
  }

  return head;
};


/**
 * Runtime 96 ms
   Beats 40.93
 */

/**
 * Memory 44.5 MB
   Beats 22.47%
 */