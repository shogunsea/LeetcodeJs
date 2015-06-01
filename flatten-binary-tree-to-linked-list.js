// Given a binary tree, flatten it to a linked list in-place.

// For example,
// Given

//          1
//         / \
//        2   5
//       / \   \
//      3   4   6
// The flattened tree should look like:
//    1
//     \
//      2
//       \
//        3
//         \
//          4
//           \
//            5
//             \
//              6



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return;
    }
    var runner = root;
    var left, right, leftEnd;
    
    while (runner !== null) {
        left = runner.left;
        right = runner.right;
        if (left !== null) {
            runner.left = null;
            runner.right = left;
            leftEnd = left;
            while (leftEnd.right !== null) {
                leftEnd = leftEnd.right;
            }
            leftEnd.right = right;
        } 
        runner = runner.right;
    }
};