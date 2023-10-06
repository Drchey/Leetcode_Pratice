var minWindow = (s,t) => {
    const sFreq = {}
    const tFreq = {}

    let left = 0
    let right = 0 

    let minLen = Infinity

    let minWindow = ""
    let haveChars = 0
    let needChars = 0


    for(let val of t)
    {
        tFreq[val] ? tFreq[val] += 1: tFreq[val] = 1
    }

    needChars = Object.keys(tFreq).length;

    while (r < s.length){
        let charRight = s[right]

        if(tFreq[charRight] !== undefined && sFreq[charRight] == tFreq[charRight]){
            haveChars++
        }

        while(left <= right && haveChars == needChars){
            let currentLength = right - left + 1

            if(currentLength < minLen){
                minLen = currentLength
                minWindow = s.substring(left, right+ 1)
            }

            const charLeft = s[left]
            sFreq[charLeft]--

            if(tFreq[charLeft] !== undefined && sFreq[charLeft] < tFreq[charLeft]) needChars--

            left++
        }

        right++
    }

    return minLen === Infinity ? "": minWindow
}
