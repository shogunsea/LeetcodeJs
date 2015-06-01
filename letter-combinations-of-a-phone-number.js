// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.



// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (typeof digits === undefined || digits === null || digits.length	=== 0 ) {
    	return [];
    }

    var len = digits.length;
    var dict = {
    	1: '',
    	2: 'abc',
    	3: 'def',
    	4: 'ghi',
    	5: 'jkl',
    	6: 'mno',
    	7: 'pqrs',
    	8: 'tuv',
    	9: 'wxyz'
    };
    var tempList = [];
    var res = [];

    helper(res, tempList, digits, 0, dict);

    return res;

};


function helper(res, tempList, digits, index, dict) {
	if (index === digits.length) {
		res.push(tempList.join(''));
		return;
	}

	var curChar = digits[index];
	var curDict = dict[curChar].split('');

	curDict.forEach(function(c){
		tempList.push(c);
		helper(res, tempList, digits, index + 1, dict);
		tempList.pop();
	});
}






