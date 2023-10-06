var lengthOfLastWorld = (s) => {

    let length = 0 
    let foundLastWord = false

    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === ''){
            length++
            foundLastWord = true
        }else{
            if(foundLastWord) break
        }
    }
    
    return length
}

const s = "Hello World";
const result = lengthOfLastWord(s);
console.log(result); // Output: 5