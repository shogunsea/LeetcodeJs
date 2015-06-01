/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var res = 0;
    var min = 999999999;
    prices.forEach(function(val) {
        min = val < min? val : min;
        res = (val - min) > res? val - min : res;
    });
    
    return res;
    
};