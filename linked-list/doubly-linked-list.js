class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}

let addNode = (node, nodeToAdd) => {
  let prevNode = node.prev;
  nodeToAdd.next = node;
  nodeToAdd.prev = prevNode;
  prevNode.next = nodeToAdd;
  node.prev = nodeToAdd;
}

let deleteNode = node => {
  let prevNode = node.prev;
  let nextNode = node.next;
  prevNode.next = nextNode;
  nextNode.prev = prevNode;
}
