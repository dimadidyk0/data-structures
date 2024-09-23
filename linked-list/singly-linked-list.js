class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

// Let prevNode be the node at position i - 1
let addNode = (prevNode, nodeToAdd) => {
  nodeToAdd.next = prevNode.next;
  prevNode.next = nodeToAdd;
}

// Let prevNode be the node at position i - 1
let deleteNode = prevNode => {
    prevNode.next = prevNode.next.next;
}
