const isPalidrome=(s)=>{
   //A man, a plan, a canal: Panama 
    const clean = "abcdefghijklmnopqrstuvwxyz"
    const res = ""

    for(let i =0; i < s.length; i++){
        let str = s[i].toLowerCase()
        if(clean.indexOf[str] !== -1){
            res += str
        }
    }

    let left= 0 
    let right = res.length - 1

    while(left < right){
        if(res[left] !== res[right]){
            return false
        }
        left++
        right--
    }
    return true
}