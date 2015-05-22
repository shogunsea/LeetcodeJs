// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// For example, 
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	if (!height || height.length === 0) {
		return 0;
	}

	var len = height.length;
	var leftHeight = new Array(len);
	var i;
	var leftMax = height[0];
	var rightMax = height[len - 1];
	var water = 0;
	var lower;

	for (i = 1; i < len; i++) {
		leftHeight[i] = leftMax;
		leftMax = leftMax < height[i]? height[i] : leftMax;
	}

	for (i = len - 2; i >= 1; i--) {
		lower = leftHeight[i] < rightMax? leftHeight[i] : rightMax;
		rightMax = rightMax < height[i]? height[i] : rightMax;
		water = lower > height[i]? water + (lower - height[i]) : water;
	}

	return water;
    
};