var evalPRN = (tokens) => {

    const stack = []

    for(const token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token))
        }else{
            let op1 = stack.pop()
            let op2 = stack.pop()

            if(token === "*"){
                stack.push(op1 * op2)
            }else if(token === "+"){
                stack.push(op1 + op2)
            }else if(token === "-"){
                stack.push(op1 - op2)
            }else if(token === '/'){
                const res = Math.trunc(op1 / op2)
                stack.push(res)
            }
        }
    }
    return stack[0]
}