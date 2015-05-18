// A peak element is an element that is greater than its neighbors.

// Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that num[-1] = num[n] = -∞.

// For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (!nums || nums.length === 0) {
    	return null;
    }

    var len = nums.length;
    var start = 0;
    var end = len - 1;
    var mid, res;

    while (start + 1 < end) {
    	mid = Math.floor((start + end) / 2);
    	if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
    		res = mid;
    		break;
    	} else if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) {
    		start = mid;
    	} else {
    		end = mid;
    	}
    }

    if (res === undefined) {
        res = nums[start] > nums[end]? start : end;    
    }

    return res;
};