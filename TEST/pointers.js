// 1. Valid Palindrome 
var isPalindrome = (s) => {
    let res = ""
    let alphabet ="abcdefghijklmnopqrstuvwxyz0123456789"

    for(let i = 0; i < s.length; i++){
        let char = s[i].toLowerCase()

        if(alphabet.indexOf(char) !== -1){
            res += char
        }
    }

    let left = 0 
    let right = res.length - 1


    while(left <= right){
        if(res[left] !== res[right]){
            return false
        }else{
            left++
            right--
        }
    }
    
    return true
}

// console.log(isPalindrome("A man, a plan, a icanal: Panama"))

var palindrome = (s, left, right) => {
    while(left <= right){
        if(s[left] == s[right]){
            left++
            right--
        }else{
            return false
        }
    }
    return true
}

// 2. Valid Palindrome II
var validPalindrome = (s) => {

    if(s.length < 2) return true

    let left  = 0 
    let right = s.length - 1

    while(left <= right){
        if (s[left] !== s[right]){
            return palindrome(s, left +1, right) || palindrome(s, left, right -1)
        }
        left++
        right--
    }

    return true
}


// console.log(validPalindrome("abca"))

// 3. Minimun Diffrence 
var minimumDifference = (nums, k) => {}

// 4. Merge Alternatively 
var mergeAlternatively = (word1, word2) => {
    let res = []
    let maxLength = Math.max(word1.length, word2.length)

    for(let i = 0; i <maxLength; i++){
        if(word1[i]) res.push(word1[i])
        if(word2[i]) res.push(word2[i])
    }

    return res.join(" ")
}

// 5. Reverse String 
var reverseString = (s) => {
    let left = 0 
    let right = s.length - 1

    while (left <= right){
        let temp =  s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right --
    }

    return s
}

console.log(reverseString(["H","a","n","n","a","h"]))
// 6. Merge Sorted Array
var merge = (nums1, m , nums2, n) =>{}


// 7. Remove Duplicates 
var removeDuplicates = (nums) => {}

