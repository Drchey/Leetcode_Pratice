

//  Given a binary array, find the maximum number of consecutive 1s in this array
//  if you can flip at most one 0.
//  Stop Expanding when count_of_zeroes == 2

// Example        Input: [1,0,1,1,0] Output: 4


const maxConsecutiveTwo = (nums) => {
    let left = 0
    let right = 0
    let count_of_zeroes = 0
    let globalMax = 0



    while(right < nums.length){

        if(nums[right] === 0) count_of_zeroes++

        while(count_of_zeroes == 2){
            globalMax = Math.max(globalMax, right - left)

            if(nums[left] === 0) count_of_zeroes--

            left++
        }

        right++
    }
    
    if(count_of_zeroes < 2){
        globalMax = Math.max(globalMax, right - left)
    }

    return globalMax
}

console.log(maxConsecutiveTwo([1,0, 1, 1,0]))


// Given an array A of 0s and 1s, we may change up to K values from 0 to 1. 
// Return the length of the longest (contiguous) subarray that contains only 1s.

var longestOnes = (nums, k) => {
        let left = 0
        let right = 0
        let globalMax = 0
        let count_of_zeroes = 0 

        while(right < nums.length){

            if(nums[right] === 0) count_of_zeroes++

            while(count_of_zeroes > k) {
                globalMax = Math.max(globalMax, right - left)

                if(nums[left] === 0) count_of_zeroes--
                left++


            }

            right++
        }

        return globalMax
}