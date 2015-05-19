// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// For example,
// [1,1,2] have the following unique permutations:
// [1,1,2], [1,2,1], and [2,1,1].

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	if(nums === undefined || nums.length === 0) {
		return nums;
	}  

	var len = nums.length;
	var picked = [];
	var res = [];
	var tempList = [];
	nums.sort(function(a,b) {return a - b});
	nums.forEach(function(item){
		picked.push(false);
	});

	for (var i = 0; i < len; i++) {
		if (i !== 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		picked[i] = true;
		tempList.push(nums[i]);
		helper(nums, tempList, picked, res);
		picked[i] = false;
		tempList.pop();
	}
	return res;
};

function helper(nums, tempList, picked, res) {
	if (tempList.length == nums.length) {
		var copy = tempList.slice();
		res.push(copy);
		return;
	}

	for (var i = 0; i < nums.length; i++) {
		if (picked[i]) continue;
		if (i !== 0 && nums[i - 1] === nums[i] && !picked[i - 1]) {
			continue;
		}
		picked[i] = true;
		tempList.push(nums[i]);
		helper(nums, tempList, picked, res);
		picked[i] = false;
		tempList.pop();
	}
}
