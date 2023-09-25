const groupAnagram = (strs) => {
    const anagramCheck = {}

    for(let str of strs){
        const sortedStr = str.split('').sort().join('')
        if(anagramCheck[sortedStr]){
            anagramCheck[sortedStr].push(str)
        }else{
            anagramCheck[sortedStr] = str
        }
    }

    return Object.values(anagramCheck)
    
}