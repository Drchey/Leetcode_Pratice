// 1. Understand the Problem 
// 2. Concrete Examples
// 3. Break it Down 
// 4. Solve or Simplify
// 5. Look Back & Refactor Code


const containsDuplicate = (nums, target) => {

    const hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]]) {
            return true
        } else {
            hashMap[nums[i]] = 1
        }
    }

    return false
}

// console.log(containsDuplicate([1, 2, 3, 1]))
// console.log(containsDuplicate([1, 2, 3, 4]))
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false
    let hashMap1 = {}

    for (let val of s) {
        hashMap1[val] ? hashMap1[val] += 1 : hashMap1[val] = 1
    }

    for (let i = 0; i < t.length; i++) {
        let char = t[i]

        if (hashMap1[char]) {
            hashMap1[char] -= 1
        } else {
            return false
        }
    }

    return true
}

// console.log(isAnagram("anagram", "nagaram"))
// console.log(isAnagram("rat", "car"))
const getConcatenation = (nums) => {
        let ans = []

        for (let i = 0; i < nums.length; i++) {
            let char = nums[i]

            ans[i] = char
            ans[i + nums.length] = char
        }


        return ans
    }
    // console.log(getConcatenation([1, 2, 1]))
    // console.log(getConcatenation([1, 3, 2, 1]))

const replaceElements = (arr) => {
    let maxRight = -1
    for (let i = arr.length - 1; i >= 0; i--) {
        const currElement = arr[i]
        arr[i] = maxRight
        maxRight = Math.max(maxRight, currElement)
    }

    return arr
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]))


const lengthOfLastWord = (s) => {
    let length = 0
    let foundWord = false

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            length++
            foundWord = true
        } else if (foundWord) {
            break;
        }
    }
    return length
}
const twoSum = () => {}
const groupAnagrams = () => {}
const removeElement = () => {}
const pivotIndex = () => {}
const topKFrequent = () => {}
const sort = () => {}
const containsBinary = () => {}
const findDifference = () => {}