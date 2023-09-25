var findTheDifference = (s, t) => {
    if(s.length === t.length) return null

    let lookup = {}

    for(let str of s){
        lookup[str] ? lookup[str] += 1: lookup[str] = 1
    }


    for(let i = 0; i < t.length; i++){
        let letter = t[i]

        if(lookup[letter]){
            lookup[letter] -= 1
        }else{
            return letter
        }
    }
}

console.log(findTheDifference("", "y"))