// Given a set of distinct integers, nums, return all possible subsets.

// Note:
// Elements in a subset must be in non-descending order.
// The solution set must not contain duplicate subsets.
// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (typeof nums === undefined || nums === null) {
    	return null;
    }

    var len = nums.length;
    var res = [];
    var tempList = [];
    var i = 0;
    nums.sort(function(a, b) {return a - b});

    for (; i <= len; i++) {
    	helper(nums, tempList,res, i, 0);
    }

    return res;
};

function helper(nums, tempList, res, targetLen, index) {
	if (tempList.length === targetLen) {
		res.push(tempList.slice());
		return;
	}

	var i = index;
	var len = nums.length;

	for (; i < len; i++) {
		tempList.push(nums[i]);
		helper(nums, tempList, res, targetLen, i + 1);
		tempList.pop();
	}
}








