function postorder(root,traversed=[]) {
    if(root){
        if(root.left) postorder(root.left,traversed);
        if(root.right) postorder(root.right,traversed);
        traversed.push(root.val);
    }
    return traversed;
};

//leetcode results
//57ms 		|	42.2mb
//26.93%	| 	26.63%
