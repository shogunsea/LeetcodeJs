// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 // iterative version
var isValidBSTIter = function(root) {
    if (!root) {
    	return true;
    }

    var stack = [];
    var runner = root;
    // in order traversal
    var last;

    while (stack.length !== 0 || runner !== null) {
    	if (runner !== null) {
    		stack.push(runner);
    		runner = runner.left;
    	} else {
    		runner = stack.pop();
    		if (last !== undefined) {
    			if (runner.val <= last.val) {
    				return false;
    			}
    		}
    		last = runner;
    		runner = runner.right;
    	}
    }

    return true;
};

//   12
//   /\
//  5  18
// /\  /\


var Data = function(){};
Data.prototype.isValid = false;
Data.prototype.min = 0;
Data.prototype.max = 0;

var isValidBST = function(root) {
	if (!root) {
		return true;
	}

	return helper(root).isValid;
};

function helper(node) {
	if (node === null) {
		return null;
	}

	var leftData = helper(node.left);
	var rightData = helper(node.right);
	var data = new Data();

	if (leftData && !leftData.isValid) {
		return data;
	}
	if (rightData && !rightData.isValid) {
		return data;
	}

	if (!leftData) {
		data.min = node.val;
	} else {
		if (leftData.max >= node.val) {
			return data;
		}
		// data.min = leftData.min < node.val? leftData.min : node.val;
		data.min = leftData.min;
	}
	if (!rightData) {
		data.max = node.val;
	} else {
		if (rightData.min <= node.val) {
			return data;
		}
		// data.max = rightData.max > node.val? rightData.max : node.val;
		data.max = rightData.max;
	}

	data.isValid = true;

	return data;
}


