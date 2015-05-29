// Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// For example, given the array [2,3,1,2,4,3] and s = 7,
// the subarray [4,3] has the minimal length under the problem constraint.

// click to show more practice.



/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

 // sliding window: O(n)
 // increase the window size when temp sum 
 // is less than the target value.
 // shrink the window from left when temp 
 // sum is greater than the target value
var minSubArrayLen = function(s, nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    
    var len = nums.length;
    var start = 0, end = 0;
    var tempVal = nums[start];
    var resLen = len;
    
    while (start <= end && end < len) {
        if (tempVal >= s) {
            resLen = Math.min(end - start + 1, resLen);
            start++;
            tempVal -= nums[start - 1];
        } else {
            if (end === len - 1) {
                tempVal -= nums[start++];
            } else {
                tempVal += nums[++end];
            }
        }
    }
    
    return resLen === len? 0 : resLen;
    
};