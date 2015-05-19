// Suppose a sorted array is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	if (nums === undefined || nums.length === 0) {
		return -1;
	}

	var len = nums.length;
	var start = 0, end = len - 1, mid;

	while (start + 1 < end) {
		mid = Math.floor((start + end) / 2);
		if (nums[mid] === target) {
			return mid;
		}
		if (nums[mid] > nums[start]) {
			if (nums[mid] > target && nums[start] <= target ) {
				end = mid;
			} else {
				start = mid;
			}
		} else {
			if (nums[mid] < target && nums[end] >= target) {
				start = mid;
			} else {
				end = mid;
			}
		}
	}

	if (nums[start] === target) {
		return start;
	} else if(nums[end] === target) {
		return end;
	} 

	return -1;
};