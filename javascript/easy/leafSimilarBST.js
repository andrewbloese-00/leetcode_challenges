
//compare two BST to determine if they share the same 'leaves'
function leafSimilar(root1,root2){
	let leaves1 = [], leaves2 = []
	leafGrab(root1,leaves1); 
	leafGrab(root2,leaves2);
	return leaves1.join(",") === leaves2.join(",")
}


function leafGrab(root,leaves){
	if(!root) return 
	if(root.left === null && root.right === null)
		leaves.push(root.val)
	leafGrab(root.left,leaves)
	leafGrab(root.right, leaves)

}
//leetcode results 
// 58ms		|	45.06mb
// 61.20%	|	8.05%
