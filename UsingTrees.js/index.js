/** Invert A Binary Tree */


var invertTree = function(root){

    if(root === null) return [];

    let queue = [root];


    while(queue.length > 0){

        const node = queue.pop()
        
        // Swap the Left & Right Node 
        let temp = node.left 
        node.left = node.right
        node.right = temp
        // Push to the Node 
        queue.push(node.left)
        queue.push(node.right)
    }
}


/** Maximum Depth of A Binary Tree  */

var maxDepth = function(root){
    if(!root) return 0;

    let depth = 0 
    let queue = [root]

    while(queue.length){ 

        let levelSize = queue.length

        for(i =0; i < levelSize; i++){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        depth++

    }

    return depth
}

/** Diameter of A Binary Tree: The Length of the longest path of a binary tree */

var diameterBinary = (root) => {
   let diameter = 0 
   
   dfs(root)

    function dfs(node){
        const left = dfs(node.left)
        const right = dfs(node.right)

        diameter = Math.max(diameter, left + right)

        return 1 + Math.max(left, right)
    }

   return diameter
}

/** Same Tree*/

var isSameTree = (p,q) => {
    const root1 = p
    const root2 = q
    const queue = [p, q]

    while(queue.length > 0){
        const node1 = queue.shift()
        const node2 = queue.shift()

        if(node1 == null && node2 == null) continue

        if(!node1 || !node2 || node1.val !== node2.val){
            return false
        }

        queue.push(node1.left)
        queue.push(node2.left)
        queue.push(node1.right)
        queue.push(node2.right)
    }

    return true
}

/** Level Traversal */

var levelOrder = (root) => {
    if(!root) return []
    const res = []
    const queue = [root]

    while(queue.length > 0){
        const levelSize = queue.length
        const currentSize = []

        for(let i = 0; i < levelSize; i++){
            const node = queue.shift()
            currentSize.push(node.val)
        }

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)

        res.push(currentSize)
    }
        return res

}