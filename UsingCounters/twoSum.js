const twoSum = (nums, target) => {
    const hashMap = {}

    // for(let val of nums){
    //     hashMap[val] ?  hashMap[val] += 1 : hashMap[val] = 1
    // }

    for(let i = 0; i < nums.length; i++){
        const number = target - nums[i]

        if(hashMap[number]){
            return [hashMap[number], i]
        }

        hashMap[nums[i]] = i
    }

    
}