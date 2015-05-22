// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// For example,
// S = "ADOBECODEBANC"
// T = "ABC"
// Minimum window is "BANC".

// Note:
// If there is no such window in S that covers all characters in T, return the emtpy string "".

// If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var sLen = s.length;
    var tLen = t.length;
    var dict = {};
    var tempDict = {};
    var fast = 0;
    var slow = 0;
    var curChar;
    var res;
    var key;
    var matchCount = 0;

    t.split('').forEach(function(item) {
        dict[item] = dict[item]? dict[item] + 1 : 1;
    });

    while (fast < sLen) {
        curChar = s[fast];
        if (!dict[curChar]) {
            fast++;
            continue;
        }

        tempDict[curChar] = tempDict[curChar]? tempDict[curChar] + 1 : 1;
        if (tempDict[curChar] <= dict[curChar]) {
            matchCount++;
        }

        if (matchCount >= tLen) {
            // shrink window
            while (slow <= fast && (dict[s[slow]] === undefined || tempDict[s[slow]] > dict[s[slow]])) {
                if (dict[s[slow]] < tempDict[s[slow]]) {
                    tempDict[s[slow]] = tempDict[s[slow]] - 1;
                }
                slow++;
            }

            if (res === undefined || res.length > (fast - slow + 1)) {
                res = s.substring(slow, fast + 1);
            }
        }
        fast++;
    }

    return res === undefined? "" : res;
};