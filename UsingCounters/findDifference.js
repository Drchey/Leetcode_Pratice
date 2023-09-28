var findDifference = (nums1, nums2) => {
   let obj1 = {}
   let obj2 = {}


   let first = []
   let second = []

   for(let num of nums1){
        if(!obj1[num]){
            obj1[num] = true
        }
   }

   for(let num of nums2){
        if(!obj2[num]){
            obj2[num] = true
         }
    }

    for(let i = 0; i < nums1.length; i++){
        if(!obj2[num]){
            first.push(nums1[i])
        }
    }

    for(let i = 0; i < nums2.length; i++){
        if(!obj1[num]){
            second.push(nums2[i])
        }
    }

    return [first, second]
}