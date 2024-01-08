

//helper function to calculate the hash of a tree recursively
function hashTree(root){
	if(root === null) return "NIL"
	return `[${root.val}${hashTree(root.left)}${hashTree(root.right)}]`
}

//if the trees are the same their hashes should be the same
const isSameTree = (p,q) => hashTree(p) === hashTree(q);

//leetcode results
//48ms		| 	42.49mb
//79.53%	|	19.49%
