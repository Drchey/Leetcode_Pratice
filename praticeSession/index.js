// Most Repeated Character

function isAlphabet(char) {
    return /^[a-zA-Z]$/.test(char)
}

var solution = function(s) {

    let res = ""
    let hashMap = {}
    let maxCount = 0
    let maxChar;

    for (let i = 0; i < s.length; i++) {
        let count = s[i].toLowerCase()

        if (isAlphabet(count)) {
            res += count
        }
    }
    // loop thru the string and check if there are alphabets

    for (let val of res) {
        hashMap[val] ? hashMap[val] += 1 : hashMap[val] = 1

        if (hashMap[val] > maxCount) {
            maxCount = hashMap[val]
            maxChar = val
        }
    }

    // if yes, push them to a hashMap 

    // check and find the max Length of each 


    // return the alphabet witth the highest one 




    return maxChar
}

// console.log(solution("ABBbaaaa1245"))

// Two Sum Challenge

var twoSum = (nums, target) => {
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        let num = target - nums[i]

        if (num in hashMap) {
            return [hashMap[num], i]
        } else {
            hashMap[nums[i]] = i
        }
    }
}

console.log(twoSum())


var threeSum = () => {
    let res = []
}