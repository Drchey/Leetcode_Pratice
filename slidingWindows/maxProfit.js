const maxProfit = (prices) => {
    //[7,1, 5, 3,6,4]
    let maxProfit = 0 
    let buyPrice = prices[0]
    let currentPrice  = 0

    for(let i = 0; i < prices.length; i++){
        if(buyPrice >= prices[i]){
            buyPrice = prices[i]
        }else{
            currentPrice = prices[i] - buyPrice
            maxProfit = Math.max(maxProfit, currentPrice)
        }
    }

    return maxProfit
}

console.log(maxProfit([7,1, 5, 3,6,4]))