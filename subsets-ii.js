// Given a collection of integers that might contain duplicates, nums, return all possible subsets.

// Note:
// Elements in a subset must be in non-descending order.
// The solution set must not contain duplicate subsets.
// For example,
// If nums = [1,2,2], a solution is:

// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
	if (!nums) {
		return [];
	}
	var len = nums.length;
	var res = [];
	var tempList = [];
	var i;
	nums.sort(function(a,b) {return a - b});

	for (i = 0; i <= len; i++) {
		helper(nums, i, res, tempList, 0);
	}

	return res;
};

function helper(nums, len, res, tempList, index) {
	if (tempList.length === len) {
		res.push(tempList.slice());
		return;
	}

	var i;
	for (i = index; i < nums.length; i++) {
		if (i !== index && nums[i] === nums[i - 1]) {
			continue;
		}
		tempList.push(nums[i]);
		helper(nums, len, res, tempList, i + 1);
		tempList.pop();
	}

}


