// Given a binary tree, return the postorder traversal of its nodes' values.

// For example:
// Given binary tree {1,#,2,3},
//    1
//     \
//      2
//     /
//    3
// return [3,2,1].

// Note: Recursive solution is trivial, could you do it iteratively?

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
 
// var postorderTraversalRec = function(root) {
//     var res = [];
//     if (!root) {
//     	return res;
//     }

//     helper(res, root);
//     return res;
// };

// function helper(res, root) {
// 	if (!root) {
// 		return;
// 	}
// 	helper(res, root.left);
// 	helper(res, root.right);
// 	res.push(root.val);
// } 
 
var postorderTraversal = function(root) {
    var res = [];
    if (!root) {
    	return res;
    }
    var runner;
    var stack = [];
    stack.push(root);

    while (stack.length !== 0) {
    	runner = stack.pop();
    	if (runner) {
    		res.push(runner.val);
    		stack.push(runner.left);
    		stack.push(runner.right);
    	}
    }

    // return res.reverse().map(function(item){return item.val});
    return res.reverse();
};

