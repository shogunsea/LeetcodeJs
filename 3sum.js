// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:
// Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
// The solution set must not contain duplicate triplets.
//     For example, given array S = {-1 0 1 2 -1 -4},

//     A solution set is:
//     (-1, 0, 1)
//     (-1, -1, 2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	if (!nums || nums.length === 0) {
		return nums;
	}

	var len = nums.length;
	var res = [];
	var first, second, third;
	var start, end;
	nums.sort(function(a, b){return a - b});

	for (var i = 0; i < len - 2; i++) {
		// remove dups
		if (i !== 0 && nums[i] === nums[i - 1]) {
			continue;
		}

		first = nums[i];
		start = i + 1;
		end = len - 1;

		while (start < end) {
			second = nums[start];
			third = nums[end];
			if (first + second + third === 0) {
				res.push([first, second, third]);
				start++;
				end--;
				while (start < end && nums[start] == nums[start - 1]) {
					start++;
				}
				while (start < end && nums[end] === nums[end + 1]) {
					end--;
				}
				
			} else if (first + second + third > 0) {
				end--;
				while (start < end && nums[end] === nums[end + 1]) {
					end--;
				}
			} else {
				start++;
				while (start < end && nums[start] == nums[start - 1]) {
					start++;
				}
			}
			
		}
	}
	return res;
};