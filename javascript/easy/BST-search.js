

//recursive solution with ternary

function search(root,val){
	if(root === null || root.val === val) return root;
	return val < root.val 
		? search(root.left,val)
		: search(root.right,val)

}

//iterative solution
function searchIterative(root,val){
	while(root){
		if(val < root.val) root = root.left
		else if( val > root.val) root = root.right
		else return root;
	}
	return null;
}
