var findDuplicate = (nums) => {
    // var hashMap = {}


    // for (let i = 0; i < nums.length; i++){
    //     if(!hashMap[nums[i]]){
    //         hashMap[nums[i]] = 1
    //     }else{
    //         return [nums[i]]
    //     }
    // }

    let slow = nums[0]
    let fast = nums[0]

    while(true){
        slow = nums[slow]
        fast = nums[nums[fast]]

        if(fast === slow) break;
    }

    slow = nums[0]
    while(slow !== fast){
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
}