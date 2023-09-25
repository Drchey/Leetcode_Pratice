var containsDuplicate = (nums) => {
    var hashMap = {}

    for(let i = 0 ; i < nums.length; i++){
        let num = nums[i]

        if(hashMap[num]){
            return true
        }else{
            hashMap[num] = 1
        }
    }

    return false
}

console.log(containsDuplicate([1,2, 3,1]))