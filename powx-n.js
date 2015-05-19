// Implement pow(x, n).

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // n is integer, x is double
    var isNeg = n < 0;
    n = Math.abs(n);

    if (n === 1) {
    	return isNeg? 1/x : x;
    } else if (n === 0) {
    	return 1;
    }

    var isOdd = n % 2 !== 0;
    var halfN = Math.floor(n / 2);
    var halfPow = myPow(x, halfN);
    var res = halfPow * halfPow;
    if (isOdd) {
    	res *= x;
    }
    
    return isNeg? 1 / res : res;
};