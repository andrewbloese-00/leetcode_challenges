/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
function createBinaryTree(descriptions) {
    const nodes = {}
    const children = {}
    for(const [parent,child,isLeft] of descriptions){
        children[child]=true;
        if(!nodes[parent]) {
            nodes[parent] = new TreeNode(parent)
        }
        
        if(isLeft == 1){
            if(!nodes[child]) nodes[child] = new TreeNode(child)
            nodes[parent].left = nodes[child]
        } else { 
            if(!nodes[child]) nodes[child] = new TreeNode(child)
            nodes[parent].right = nodes[child]
        }

    }
    
    const [root] = Object.keys(nodes).filter(key => !children[key])



    return nodes[root]
};
