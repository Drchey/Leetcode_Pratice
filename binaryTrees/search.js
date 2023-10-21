
var search = (nums, target) => {
    let left = 0 
    let right = nums.length - 1
     while(left <= right){
        let mid =  Math.floor((right + left) / 2)
        let guess = nums[mid]

        if(guess === target){
          return mid
        }else if(guess < target){
           left = mid + 1
        }else{
           right = mid -1
        }

    }

    return -1
}


console.log(search([-1,0,3,5,9,12], 9))