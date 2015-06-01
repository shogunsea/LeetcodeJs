// Given a collection of numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	if (typeof nums === undefined || nums === null) {
		return null;
	}

	var len = nums.length;
	var i = 0;
	var res = [];
	var tempList = [];
	var visited = [];
	nums.sort(function(a, b) {return a - b});
	nums.forEach(function(item){
		visited.push(false);
	})

	for (; i < len; i++) {
		if (i !== 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		tempList.push(nums[i]);
		visited[i] = true;
		helper(nums, res, tempList, visited);
		visited[i] = false;
		tempList.pop();
	}
    
    return res;
};

function helper(nums, res, tempList, visited) {
	if (tempList.length === nums.length) {
		res.push(tempList.slice());
		return;
	}

	var i = 0;
	var len = nums.length;

	for (; i < len; i++) {
		if (visited[i]) {
			continue;
		}

		if (i !== 0 && nums[i] === nums[i - 1]) {
			contienu;
		}

		tempList.push(nums[i]);
		visited[i] = true;
		helper(nums, res, tempList, visited);
		tempList.pop();
		visited[i] = false;
	}
}












