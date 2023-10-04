const maxConsecutiveOnes = (nums)=> {
    let left = 0
    
    let globalMax  = 0
    
    for(let right = 0; right <= nums.length; right++){
        globalMax = Math.max(globalMax, right - left )
        if(nums[right] === 0){
            left = right + 1
        }
    }
    
    return globalMax
}

console.log(maxConsecutiveOnes([1,1,0,1,1,1]))
console.log(maxConsecutiveOnes([1,0,1,1,0,1]))

