/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var previousSum = 0;
    var max = nums[0];
    
    nums.forEach(function(val) {
        previousSum = Math.max(val, val + previousSum);
        max = max < previousSum? previousSum : max;
    });
    
    return max;
};