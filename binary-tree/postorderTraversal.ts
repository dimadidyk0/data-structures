// https://leetcode.com/problems/binary-tree-postorder-traversal/?envType=daily-question&envId=2024-08-25
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param { TreeNode } root
 * @return {number[]}
 */
function postorderTraversal(root) {
  const result = [];
  function put(node) {
      if (!node) {
          return;
      }
      if (node.left) {
          put(node.left);
      }
      if (node.right) {
          put(node.right);
      }
      if (node.val) {
          result.push(node.val);
      }
  }
  put(root);
  return result;
};
