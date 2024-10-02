// Lowest Common Ancestor (LCA) in a Binary Tree
// You are given a binary tree and two distinct nodes within the tree. Your task is to find the lowest common ancestor (LCA) of these two nodes. The LCA of two nodes p and q is defined as the lowest node in the tree that has both p and q as descendants (where we allow a node to be a descendant of itself).

// Input : root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1

// Output : 3


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function lowestCommonAncestor(root, p, q) {
    // Base case: if root is null, return null
    if (root === null) return null;
    
    if (root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);


    if (left !== null && right !== null) return root;

    return left !== null ? left : right;
}

// Test Case 1
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

const p = root.left; // Node 5
const q = root.right; // Node 1

console.log(lowestCommonAncestor(root, p, q).val); // Output: 3

// Test Case 2
const p2 = root.left; // Node 5
const q2 = root.left.right.right; // Node 4
console.log(lowestCommonAncestor(root, p2, q2).val); // Output: 5

// Test Case 3
const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
const p3 = root2; // Node 1
const q3 = root2.left; // Node 2
console.log(lowestCommonAncestor(root2, p3, q3).val); // Output: 1
