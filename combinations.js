// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// For example,
// If n = 4 and k = 2, a solution is:

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (typeof n === undefined || n === null) {
    	return null;
    }

    var tempList = [];
    var res = [];
    var dict = [];
    var i = 1;

    for (; i <= n; i++) {
    	dict.push(i);
    }

    for (i = 0; i < n; i++) {
    	tempList.push(dict[i]);
    	helper(dict, res, tempList, k, i + 1);
    	tempList.pop();
    }

    return res;
};

function helper(dict, res, tempList, k, index) {
	if (tempList.length === k) {
		res.push(tempList.slice());
		return;
	}

	var i = index;
	var len = dict.length;

	for (; i < len; i++) {
		tempList.push(dict[i]);
		helper(dict, res, tempList, k, i + 1);
		tempList.pop();
	}
}

console.log(combine(4, 2));




