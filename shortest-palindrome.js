// Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

// For example:

// Given "aacecaaa", return "aaacecaaa".

// Given "abcd", return "dcbabcd".

/**
 * @param {string} s
 * @return {string}
 */

var shortestPalindrome = function(s) {
    // find the center that can cover all its left chars.
    // if no such center, just make a mirror of ths string to left
    // of first char.
    if (!s || s.length === 0) {
        return s;
    }

    var len = s.length;
    var prefix = '';
    var i = Math.floor(len / 2), j;
    var prefixEndIndex;
    var left, right;
    var isValid = false;

    while (i > 0) {
        left = right = i;
        while (left > 0 && s[left] === s[left - 1]) {
            left--;
            i--;
        }
        while (right < len -1 && s[right] === s[right + 1]) {
            right++;
        }

        if(isCenter(s, left, right)) {
            //   012345678910
            //   abcdFFFdcbaXXXX
            prefixEndIndex = left + right;
            isValid = true;
            break;
        }
        i--;
    }

    if (!isValid) {
    	prefixEndIndex = 0;
	    while (s[prefixEndIndex] === s[prefixEndIndex + 1]) {
	        prefixEndIndex++;
	    }
    }
    // 0123456
    // hhhhhsdfasdfsdf
    for (j = len - 1; j > prefixEndIndex; j--) {
        prefix += s[j];
    }

    return prefix + s;

};
// asdfasfsadfsdfXXfdsfdasfsafdsaOOPPPP
function isCenter(s, left, right) {
    var isSame = true;
    var len = s.length;
    var matchCount = 0;
    while (left >= 0) {
        if (right < len && s[left--] === s[right++]) {
            matchCount++;
            continue;
        } else {
            isSame = false;
            break;
        }
    }
    return isSame && (matchCount > 1);
}
