var removeNthFromEnd = (head, n) =>{
    // taking in the head and the nth node 
    // output : return the new head 

    //brute force => reverse the linked list and remove the node return the head 


    const dummy = new ListNode(0)
    dummy.next = head 

    // first, sec
    const first = dummy 
    const second = dummy

    for(let i =0; i <= n; i++){
        first = first.next 
    }

    while(first !== null){
        first = first.next
        second = second.next
    }

    second.next = second.next.next 

    return dummy.next 
}