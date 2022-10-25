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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root == null) {
        return root;
    }

    // swap the children position
    temporary = root.left
    root.left = root.right
    root.right = temporary

    // recursively invert the subtree
    // recursive: repeat itself till it come to the same spot
    invertTree(root.left)
    invertTree(root.right)
    return root;
};