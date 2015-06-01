// Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.

// Note:
// All numbers (including target) will be positive integers.
// Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
// The solution set must not contain duplicate combinations.
// For example, given candidate set 2,3,6,7 and target 7, 
// A solution set is: 
// [7] 
// [2, 2, 3] 

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	if (typeof candidates === undefined || candidates === null) {
		return null;
	}    

	var len = candidates.length;
	var i = 0;
	var res = [];
	var tempList = [];
	var curSum = 0;
	var curElem = 0;
	candidates.sort(function(a,b){ return a - b});

	for (; i < len; i++) {
		if (i !== 0 && candidates[i] === candidates[i - 1]) {
			continue;
		}
		curElem = candidates[i];
		tempList.push(curElem);
		curSum += curElem;
		if (curSum <= target) {
			helper(res, tempList, candidates, curSum, target, i);
		}
		tempList.pop();
		curSum -= curElem;
	}

	return res;
};


function helper(res, tempList, candidates, curSum, target, index) {
	if (curSum === target) {
		res.push(tempList.slice());
		return;
	}

	var i = index;
	var len = candidates.length;
	var curElem = 0;

	for (; i < len; i++) {
		if (i !== 0 && candidates[i] === candidates[i - 1]) {
			continue;
		}
		curElem = candidates[i];
		curSum += curElem;
		tempList.push(curElem);
		if (curSum <= target) {
			helper(res, tempList, candidates, curSum, target, i);
		}
		tempList.pop();
		curSum -= curElem;
	}
}

var candidates = [2,3,6,7];
var target = 7;

console.log(combinationSum(candidates, target));













