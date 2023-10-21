/**  
 * A Tree is a data structure that consists of a nodes in a Parent-Child relationship.
 *              [1]
 *             /    \
 *          [2]      [3]
 *          /           \
 * 
 * A root is the top node of the tree and the child is the node connected to another node 
 * when moving away from the root.A parent is the converse notion of a child. Siblings are
 * groups of nodes with the same parent. A leaf is a node with no child.An Edge is the connection 
 * between two nodes.
 * 
 * The Use of Trees: 
 * 1. HTML DOM 2. Network Routing 3. Abstract Syntax Trees 
 * 4. Artifical Intellgence 5. Files In System 6. JSON 
 */


/**
 * Binary Trees : In a binary tree, a parent node can have at most 2 nodes. 
 * Binary Search Trees : In a binary (BST) Search Tree, the have at most 2 nodes 
 *                      and the nodes stored at the left have are less than the parent node and nodes
 *                       stored to the right have are greater than the parent node
 */

class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    // Inserting to A BST

    insert(val){
        const newNode = new Node(val)

        if(!root){
            this.root = newNode
            return this.root
        }else{ 
            let current = this.root
          while(true){   
            if(newNode < current.val){
                if(current.left === null){
                    current.left = newNode
                    return this
                }else{
                    current = current.left
                }
            }else if(newNode > current.val){
                if(current.right === null){
                    current.right = newNode
                    return this
                }else{
                    current.right = newNode
                }
            }else{
                return undefined;
            }
        }  
        }

        
    }

    // Find a Node in a BST
    contains(val){
        if(this.root === null) return false

        let current = this.root
        let found = false
        while(current && !found){
             if(val > current.val){
                current = current.left
            }else if (val > current.val){
                current = current.right
            }else{
                found = true
            }
        }

        return found
    }


    // ----- TREE TRAVERSAL ----- // 

// Breadth First Search


    bfs(){
        var data = []
        var  queue = [root]
        while(queue.length > 0){
            var node = queue.shift()
            queue.push(node)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }

    // Depth Traversal

    //InOrder

    DFSInOrder(){
        var data = []
        var current = this.root

        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            data.push(node.val)
            if(node.right){
                traverse(node.right)
            }
          
        }
        traverse(current)
        return data
    }


    //PreOrder

    PreOrder(){
        var data = []
        var current = this.root

        function traverse(node){
            data.push(node.val)
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(current)
        return data
    }
    //PostOrder

    DFSPostOrder(){
        var data = []
        var current = this.root

        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            data.push(node.val)
        }
        traverse(current)
        return data
    }
}

var tree = new BST();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9)






