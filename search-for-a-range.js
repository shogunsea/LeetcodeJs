// Given a sorted array of integers, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	var numLen = nums.length;
	var res = [-1, -1];
	var start, end, mid;

	if (numLen === 0) {
		return res;
	}

	start = 0;
	end = numLen - 1;
	while (start + 1 < end) {
		mid = Math.floor((start + end) / 2);
		//  1 1 1 1 1 1 1  2  2  3  4
		if (nums[mid] >= target) {
			end = mid;
		} else {
			start = mid;
		}
	}

	if (nums[start] === target) {
		res[0] = start;
	} else if (nums[end] === target) {
		res[0] = end;
	} else {
		return res;
	}

	start = 0;
	end = numLen - 1;
	while (start + 1 < end) {
		mid = Math.floor((start + end) / 2);
		// 1 1 1 1 2 2 2 3  4
		if (nums[mid] <= target) {
			start = mid; 
		} else {
			end = mid;
		}
	}

	if (nums[end] == target) {
		res[1] = end;
	} else {
		res[1] = start;
	}

	return res;
};