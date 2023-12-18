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
function maxDepth(root){
    return dfs(root);
}
function dfs(node,d=0){
    return node 
        ? Math.max(
            dfs(node.left,d+1),
            dfs(node.right,d+1)
        )
        : d
}

//Leetcode Results
// Runtime      |     Memory
// 54ms         |    44.74mb
// 83.88%       |     82.29%