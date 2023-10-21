var diameterTree = (root) => {
    let diameter = 0 
    dfs(root)

    return diameter

}

var dfs = (node, level) => {
    if(!node) return 0 

    const left = dfs(node.left)
    const right = dfs(node.right)

    diameter = Math.max(left + right)
    return  1+ Math.max(left, right)
}