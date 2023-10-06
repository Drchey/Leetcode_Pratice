// You are given a string ‘S’, you need to find the length of the longest
// substring that contains at most two distinct characters.

var lengthOfLongestSubstring = (s) => {

    let left = 0
    let right = 0

    let uniqueChar = {}
    let globalMax = 0 


    while( right < s.length){

        let char = s[right]


        if(uniqueChar[char] !== undefined && uniqueChar[char] >= left){
            left = uniqueChar[char] + 1
        }
        
        if(!uniqueChar[char]) {
            uniqueChar[char] = right
            globalMax = Math.max(globalMax, right - left + 1)
        }



        

        right++
    }

}