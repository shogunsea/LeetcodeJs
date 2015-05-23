// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (!nums || nums.length === 0) {
    	return 0;
    }

    var len = nums.length;
    // assume no duplicates in nums.
    var n = len - k;
    return quickSelect(nums, n);
};

function quickSelect(nums, n) {
    var len = nums.length;
    var start = 0;
    var end = len - 1;
    var mid;
    var relocateIndex;

    while (start <= end) {
    	mid = Math.floor((start + end) / 2);
    	relocateIndex = partition(nums, start, end, mid);
    	if (relocateIndex === n) {
    		return nums[n];
    	}
    	if (relocateIndex > n) {
    		end = relocateIndex - 1;
    	} else {
    		start = relocateIndex + 1;
    	}
    }

    return -1;
}

function partition(nums, start, end, pivotIndex) {
	var pivotal = nums[pivotIndex];
	var storedIndex = start;
	var i;
	swap(nums, end, pivotIndex);

	for (i = start; i < end; i++) {
		if (nums[i] < pivotal) {
			swap(nums, i, storedIndex++);
		}
	}

	swap(nums, end, storedIndex);

	return storedIndex;
}

function swap(nums, a, b) {
	var temp = nums[a];
	nums[a] = nums[b];
	nums[b] = temp;
}












