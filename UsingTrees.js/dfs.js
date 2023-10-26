// Invert A Binary Tree 

var invertTree = (root) => {
    if(!root) return null; 

    temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)
}