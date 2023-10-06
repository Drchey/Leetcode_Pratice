const maxConsecutiveOnes = (nums) => {
    let left = 0
    let globalMax = 0 

    for(let right = 0; right < nums.length; right++){


        if(nums[right] == 0){
            left = right + 1
        }

        globalMax(globalMax, right -left + 1)


    }

    return globalMax
}

