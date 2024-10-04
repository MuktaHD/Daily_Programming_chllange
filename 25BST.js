
// Check if a Binary Tree is a Binary Search Tree (BST)
// You are given the root of a binary tree. Your task is to determine whether the tree is a valid Binary Search Tree (BST)

// Input : root = [2, 1, 3]

// Output : true


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isValidBST(root) {
   
    function validate(node, min, max) {
        if (!node) return true;  
        
        if (node.val <= min || node.val >= max) return false;

        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }

    return validate(root, -Infinity, Infinity);
}


let root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root1));  

let root2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(root2)); 

let root3 = new TreeNode(10, new TreeNode(5), new TreeNode(15, new TreeNode(6), new TreeNode(20)));
console.log(isValidBST(root3));  

let singleNode = new TreeNode(1);
console.log(isValidBST(singleNode)); 


let rootWithDuplicates = new TreeNode(2, new TreeNode(2), new TreeNode(2));
console.log(isValidBST(rootWithDuplicates)); 
