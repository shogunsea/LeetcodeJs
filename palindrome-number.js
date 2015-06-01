/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var highWeight = Math.log10(x) | 0;
    var highBit, lowBit, highMult;
    
    while (x > 0) {
        lowBit = x % 10 | 0;
        highMult = Math.pow(10, highWeight);
        highBit = x / highMult | 0;
        if (lowBit !== highBit) {
            return false;
        }
        x -= highMult * highBit;
        x = x / 10 | 0;
        highWeight -= 2;
        
    }
    
    return true;
};