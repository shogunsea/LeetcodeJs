// You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

// For example, given:
// s: "barfoothefoobarman"
// words: ["foo", "bar"]

// You should return the indices: [0,9].
// (order does not matter).

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var copy = function(obj) {
	var cp = {};
	for (var attr in obj) {
		if (obj.hasOwnProperty(attr)) {
			cp[attr] = obj[attr];
		}
	}
	return cp;
}

var findSubstring = function(s, words) {
	var wordCount = words.length;
	var wordLen = words[0].length;
	var strLen = s.length;
	var res = [];
	var dict = {};
	var windowLen = wordLen * wordCount;

	if (strLen < wordCount * wordLen || wordCount === 0) {
		return res;
	}

	for (var i = 0; i < wordCount; i++) {
		var curString = words[i];
		dict[curString] = dict[curString]? dict[curString] + 1 : 1;
	}

	for (var i = 0; i <= (strLen - windowLen); i++) {
		var dictCopy = copy(dict);
		var matchCount = 0;
		for (var j = 0; j < windowLen; j += wordLen) {
			var tempStr = s.substring(i + j, i + j + wordLen);
			if (dictCopy[tempStr] !== undefined) {
				if (dictCopy[tempStr] === 0) {
					break;
				}
				dictCopy[tempStr] = dictCopy[tempStr] - 1;
				matchCount++;
			}
		}
		if (matchCount == wordCount) {
			res.push(i);
		}
	}
	return res;
    
};