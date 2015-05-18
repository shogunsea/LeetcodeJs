// Given a non-negative number represented as an array of digits, plus one to the number.

// The digits are stored such that the most significant digit is at the head of the list.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;
    var res = [];
    var num;

    for (var i = digits.length - 1; i >= 0; i--) {
        num = carry + digits[i];
        carry = Math.floor(num / 10);
        num %= 10;
        res.push(num);

    }
    if (carry === 1) {
        res.push(1);
    }

    return res.reverse();
};
