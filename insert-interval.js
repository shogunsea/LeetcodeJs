// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:
// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

// Example 2:
// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if (!newInterval) {
        return intervals;
    }

    var insertIndex = 0, i, curItem, res = [];

    for (i = 0; i < intervals.length; i++) {
        curItem = intervals[i];
        if (curItem.end < newInterval.start) {
            insertIndex++;
            res.push(curItem);
        } else if (curItem.start > newInterval.end) {
            res.push(curItem);
        } else {
            newInterval.start = newInterval.start < curItem.start? newInterval.start : curItem.start;
            newInterval.end = newInterval.end > curItem.end? newInterval.end : curItem.end;
        }
    }

    res.splice(insertIndex, 0, newInterval);
    return res;
};








