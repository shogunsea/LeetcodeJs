/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var dict = {};
    var i = 0;
    for (; i < nums.length; i++) {
        if (dict[nums[i]]) {
            return true;
        } else {
            dict[nums[i]] = 1;
        }
    }
    return false;
};