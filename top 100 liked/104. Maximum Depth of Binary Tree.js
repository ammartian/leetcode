/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

    // DFS Recursive
    if (!root) return null; // return empty root
    let max = Math.max(maxDepth(root.left), maxDepth(root.right)) //compare and return max DFS each root
    return max + 1; // +1 because base root
};