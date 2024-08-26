// https://leetcode.com/problems/n-ary-tree-postorder-traversal/
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const result = [];

  (function util(node) {
      if (root?.children?.length > 0) {
          node.children.forEach(util);
      }
      typeof node?.val === 'number' && result.push(node.val);
  })(root);

  return result;
};
