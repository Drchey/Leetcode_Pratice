// Longest SubStrng without repeating characters 

// Problem : Given a string s, find the length of the longest substring without repeating characters 


// Example :  Input => abcabcbb Output=>3 , Input => bbbbbbbb Outpt =>1



// Brute force Approach (Though process)

const lengthOfLongestSubstring = (s) => {
    let hashMap = {} 
    let maxlength = 0 
    let start = 0 

    for(let end = 0; end < s.length; i++){
        let char = s[end]
        

        if(hashMap[char] == undefined && hashMap[char] >= start){
            start = hashMap[char] + 1 
        }
        hashMap[char] = end 
        maxlength = Math.max(maxlength, right- left + 1)
    }
}


console.log(lengthOfLongestSubstring("bbbbb"))