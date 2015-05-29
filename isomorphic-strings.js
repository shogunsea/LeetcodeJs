// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// For example,
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// Given "paper", "title", return true.

// Note:
// You may assume both s and t have the same length.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	if (!s || !t) return true;

    var sLen = s.length;
    var tLen = t.length;

    if (sLen !== tLen) return false;

    var sTot = {};
    var tTos = {};
    var i = 0;
    var sChar, tChar;

    while (i < sLen) {
    	sChar = s[i];
    	tChar = t[i];
    	if (!sTot[sChar] && !tTos[tChar]) {
    		sTot[sChar] = tChar;
    		tTos[tChar] = sChar;
    	} else {
    		if (sTot[sChar] !== tChar || tTos[tChar] !== sChar) {
    			return false;
    		}
    	}
    	i++;
    }

    return true;
};









