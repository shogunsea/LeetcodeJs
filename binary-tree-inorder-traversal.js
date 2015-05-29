/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var res = [];
    if (!root) {
        return res;
    }
    var stack = [];
    var runner = root;
    
    while (stack.length !== 0 || runner !== null) {
        if (runner !== null) {
            stack.push(runner);
            runner = runner.left;
        } else {
            runner = stack.pop();
            res.push(runner.val);
            runner = runner.right;
        }
    }
    
    return res;
    
};