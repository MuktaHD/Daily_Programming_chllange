// Check if a Binary Tree is Symmetric
// You are given the root of a binary tree. Your task is to determine whether the tree is symmetric. A binary tree is symmetric if the left and right subtrees are mirror images of each other.

// Input : [1, 2, 2, 3, 4, 4, 3]

// Output : true


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSymmetric(root) {
    if (!root) return true; 
    return isMirror(root.left, root.right);
}

function isMirror(left, right) {
  
    if (!left && !right) return true; 
    if (!left || !right) return false; 

    return (
        left.val === right.val &&
        isMirror(left.left, right.right) &&
        isMirror(left.right, right.left)
    );
}

let root1 = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
console.log(isSymmetric(root1)); 

let root2 = new TreeNode(1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
);
console.log(isSymmetric(root2)); 

let root3 = new TreeNode(1);
console.log(isSymmetric(root3)); 

let root4 = null;
console.log(isSymmetric(root4)); 

let root5 = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), null),
    new TreeNode(2, null, new TreeNode(3))
);
console.log(isSymmetric(root5)); 
