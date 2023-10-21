// Given the root node of a binary search tree and two integers low and high, 
// return the sum of values of all nodes with a value
//  in the inclusive range [low, high].


var rangeSumBST = (root, low, high) => {
    if(!root) return 0 

    let sum = 0 

    if(root.val  > low){
        sum += rangeSumBST(root.left, low, high)
    }

    if(root.val >= low && root.val <= high){
        sum += root.val
    }

    if(root.val < high){
        sum += rangeSumBST(root.right, low, high)
    }

    return sum
}