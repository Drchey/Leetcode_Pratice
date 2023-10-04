var longestOnes = (nums, k) => {
    let left = 0 
    let maxOutput = 0 
    let count_of_zeros = 0 

    for(let right = 0; right <= nums.length; right++){
       maxOutput = Math.max(maxOutput, right - left) 
       if(nums[right] === 0){
            count_of_zeros++
       }

       while (count_of_zeros > k){
           if(nums[left] === 0) count_of_zeros--
           left++

       }
    }

    return maxOutput
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))