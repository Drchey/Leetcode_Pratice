var isValid = (s) => {
    const stack = []
    const hashMap = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

   // "()[]{}" 
    for(let i = 0; i < s.length; i++){
        if(hashMap[s[i]]){
            stack.push[s[i]]
        }else{
            let removed = stack.pop()

            if(hashMap[removed] !== s[i]) return false
        }
    }

    return stack.length === 0
}