/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNeg = x < 0;
    var res = 0;
    x = isNeg? -x : x;
    
    while (x > 0) {
        res = res * 10 + x % 10;
        x = x / 10 | 0;
    }
    
    if (res > 2147483648) {
        return 0;
    }
    
    return isNeg? -res : res;
};