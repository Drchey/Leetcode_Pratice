const validAnagram = (s, t) => {
    if(s.length !== t.length) return false;

    let anagramCheck = {}

    for(let val of s){
        anagramCheck[val] ? anagramCheck[val] += 1: anagramCheck[val] = 1
    }


    for(let i = 0; i < t.length; i++){
        let letter = t[i]

        if(!anagramCheck[letter]){
            return false
        }
        anagramCheck[letter] -= 1
    }

    return true
}
