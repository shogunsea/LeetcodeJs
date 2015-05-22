// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var dict = {'(':')','[':']','{':'}'}, stack = [], i = -1;
    while (++i < s.length) {
		if (dict[s[i]]) {
			stack.push(s[i]);
		} else {
			if (stack.length === 0 ||  dict[stack.pop()] !== s[i]) {
				return false;
			}
		}
	}
	return stack.length === 0;
};