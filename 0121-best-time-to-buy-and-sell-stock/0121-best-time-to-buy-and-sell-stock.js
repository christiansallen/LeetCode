/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let pointerA = 0;
    let pointerB = 1;
    
    while (pointerB < prices.length) {

        if (prices[pointerB] > prices[pointerA]) {
            let calcProfit =  prices[pointerB] - prices[pointerA];
            if (calcProfit > maxProfit) {
                maxProfit = calcProfit;
            }
        }

        // Makes pointerA the lowest
        if (prices[pointerB] < prices[pointerA]) {
            pointerA = pointerB;
        }
        pointerB++;
    }
    return maxProfit;
};