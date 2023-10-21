class TreeNode {
    constructor(val){
        this.val = val
        this.left = this.right = null
    }

    InOrderTraversal(root){
        const res = []

        function traverse(node){
            if(node === null) return null

            traverse(node.left)
            res.push(root.val)
            traverse(node.right)
        }

        traverse(root)

        return res;
    }

    PreOderTraversal(root){
        const res = []


        function traverse(node){
            if(node === null) return null

            res.push(root.val)
            traverse(node.left)
            traverse(node.right)


        }
        
        traverse(root)
        return res
    }

    PostOrderTraversal(root){
        const res = []

        function traverse(node){
            if(node === null) return null

           
            traverse(node.left)
            traverse(node.right)
            res.push(root.val)


        }
        traverse(root)
        return res
    }

    levelOrderTraversal(root){
        if(root === null) return [];

        const res = []
        const queue = [root]

        while(queue.length > 0){
            const node = queue.shift()
            res.push(node.val)

            if(node.left){
                queue.push(node.left)
            }

            if(node.right){
                queue.push(node.right)
            }
        }
        return res
    }
}

