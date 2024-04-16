function countNodes(root){
	if(!root) return 0;
	if(root.left === null && root.right === null) return 1
	else if(root.right === null) return 2
	const lleft = lvl(root.left), lright = lvl(root.right); 
	if(lleft === lright) return 2**lleft+countNodes(root.right)
	else return countNode(root.left) + 2**lright
}


function lvlOf(node){
	let i = 0, ptr = node; 
	while(ptr) {
		i++;
		ptr = ptr.left;
	}
	return i

}
