// const lengthOfLongestSubString = (s) => {
//   let maxLength = 0; 
  
//   for(let i=0; i<s.length; i++){
//     let substring = ""
//     for(let j = i; j < s.length; j++){
//       if(substring.includes(s[j])){
//         break;
//       }
//       substring += s[j]
//     }
//     maxLength = Math.max(maxLength, substring.length)
//   }

//   return maxLength
// }

const lengthOfLongestSubString = (s) => {
  let maxLength = 0; 
  let start = 0 
  const charMap = {}

  for(let end = 0; end < s.length; end++){
    if(charMap[s[end]] == undefined && charMap[s[end]] >= start){
       start = charMap[s[end]] + 1
    }    
    charMap[s[end]] = end

    currentLength = end - start + 1
    maxLength = Math.max(maxLength, currentLength)

  }

  return maxLength
}


const lengthOfLongestSubStrings = (s) => {
  let maxLength = 0;
  let start = 0
  let substring = ""
  for(end=0; end < s.length; end++){
        

        if(!substring.includes(s[end])){
          substring += s[end]
          maxLength = Math.max(maxLength, substring.length)

        }else{
          // while (substring.includes(s[end])) {
            substring = substring.slice(1);
            start++;
          // }
        }
  }

  return maxLength
}

console.log(lengthOfLongestSubString("bbbbb"))