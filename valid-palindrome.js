// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var trim = s.replace(/\W/g, '').toLowerCase();
    // var start = 0, end = trim.length - 1;
    // while (start <= end) {
    //     if (trim[start++] != trim[end--]) {
    //         return false;
    //     }
    // }
    // return true;
    return  trim === trim.split('').reverse().join('');
};