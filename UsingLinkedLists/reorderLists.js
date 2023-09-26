var reorderLists = (head) => {
    //return new Head
    
    //check for empty head and head.next 
    if(!head) return null
    if(!head.next) return head
    // split the list to two 
    let slow =  head 
    let fast = head

    while(fast && fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }

    let curr = slow.next
    slow.next = null

    // reverse the second list
    let prev = null
    
    while(curr){
        let nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
    }

    // merge 
    let h1 = head
    let h2 = prev

    while(h2){
        let temp = h1.next
        h1.next= h2
        h1 = h2
        h2 = temp
    }
}