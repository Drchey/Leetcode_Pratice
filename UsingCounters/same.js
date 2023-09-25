function same(arr1, arr2){
        //Naive Approach 
    // if(arr1.length !== arr2.length) return false;

    // for(let i =0 ; i < arr1.length; i++){
    //     let correctIndex = arr2.indexOf(arr1[i] ** 2)

    //     if(correctIndex === -1){
    //         return false 
    //     }else{
    //         arr1.splice(correctIndex, 1)
    //     }
    // }if(arr1.length !== arr2.length) return false;

    // for(let i =0 ; i < arr1.length; i++){
    //     let correctIndex = arr2.indexOf(arr1[i] ** 2)

    //     if(correctIndex === -1){
    //         return false 
    //     }else{
    //         arr1.splice(correctIndex, 1)
    //     }
    // }
    // return true
    // return true

    // enhanced approach 

    if(arr1.length !== arr2.length) return false;

    let freqCounter1 = {}
    let freqCounter2 = {}

    for(let val of arr1){
        freqCounter1[val] ? freqCounter1[val] += 1: freqCounter1[val] = 1
    }
    for(let val of arr2){
        freqCounter2[val] ? freqCounter2[val] += 1 : freqCounter2[val] = 1
    }

    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false
        }
    }
}

console.log(same([1,2,4, 1], [1,3,16]))