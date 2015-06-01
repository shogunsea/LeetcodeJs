/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var res = 0;
    var min = prices[0];
    prices.forEach(function(val) {
        res = (val - min > 0)? res + val - min : res;
        min = val;
    });
    
    return res;
    
};