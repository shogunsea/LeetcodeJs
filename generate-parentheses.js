// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// "((()))", "(()())", "(())()", "()(())", "()()()"

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var left = n;
    var right = n;
    var res = [];
    var buffer = [];
    if (n === 0) {
    	return res;
    }

    helper(left, right, res, buffer);

    return res;
};

function helper(left, right, res, buffer) {
	if (left === 0 && right === 0) {
		var temp = buffer.join('');
		res.push(temp);
		return;
	}

	if (left > 0) {
		buffer.push('(');
		helper(left - 1, right, res, buffer);
		buffer.pop();
	}

	if (right > left) {
		buffer.push(')');
		helper(left, right - 1, res, buffer);
		buffer.pop();
	}
}