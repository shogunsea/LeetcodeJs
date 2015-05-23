// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// For example,
// Given words = ["oath","pea","eat","rain"] and board =

// [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]
// Return ["eat","oath"].
// Note:
// You may assume that all inputs are consist of lowercase letters a-z.
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    if (!words || words.length === 0) {
        return [];
    }

    var root = buildTrie(words);
    var row = board.length;
    var col = board[0].length;
    var visited = new Array(row);
    var res = [];
    var i,j;
    var curChar;
    for (i = 0; i < row; i++) {
        visited[i] = new Array(col);
    }


    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {
            curChar = board[i][j];
            if (root.dict[curChar]) {
                visited[i][j] = true;
                helper(board, visited, row, col, i, j, root.dict[curChar], res);
                visited[i][j] = false;
            }
        }
    }

    return res;
};

function helper(board, visited, row, col, i, j, node, res) {
    var runner = node;
    var curChar;
    if (node.isWord) {
    	var word = node.getWord();
    	if (res.indexOf(word) === -1) {
        	res.push(node.getWord());
    	}
    }

    // check up
    if (i > 0) {
        curChar = board[i - 1][j];
        if (!visited[i - 1][j] && runner.dict[curChar]) {
            visited[i - 1][j] = true;
            helper(board, visited, row, col, i - 1, j, runner.dict[curChar], res);
            visited[i - 1][j] = false;
        }
    }
    // check down
    if (i < row - 1) {
        curChar = board[i + 1][j];
        if (!visited[i + 1][j] && runner.dict[curChar]) {
            visited[i + 1][j] = true;
            helper(board, visited, row, col, i + 1, j, runner.dict[curChar], res);
            visited[i + 1][j] = false;
        }
    }
    // check left
    if (j > 0) {
        curChar = board[i][j - 1];
        if (!visited[i][j - 1] && runner.dict[curChar]) {
            visited[i][j - 1] = true;
            helper(board, visited, row, col, i, j - 1, runner.dict[curChar], res);
            visited[i][j - 1] = false;
        }
    }
    // check right
    if (j < col - 1) {
        curChar = board[i][j + 1];
        if (!visited[i][j + 1] && runner.dict[curChar]) {
            visited[i][j + 1] = true;
            helper(board, visited, row, col, i, j + 1, runner.dict[curChar], res);
            visited[i][j + 1] = false;

        }
    }
}

var TrieNode = function(char) {
    this.char = char;
    this.dict = {};
    this.isWord = false;
    this.parent;
    this.getWord = function() {
        var str = [];
        var runner = this;
        str.push(this.char);
        while (runner.parent) {
            runner = runner.parent;
            if (runner.char) {
                str.push(runner.char);
            }
        }
        return str.reverse().join('');
    };
};

function buildTrie(words) {
    var root = new TrieNode();
    var len = words.length;
    var i;
    var runner = root;
    var curWord;
    var j;
    var curChar;
    var newNode;

    for (i = 0; i < len; i++) {
        curWord = words[i];
        j = 0;
        runner = root;
        while (j < curWord.length) {
            curChar = curWord[j];
            if (runner.dict[curChar]) {
                runner = runner.dict[curChar];
            } else {
                newNode = new TrieNode(curChar);
                newNode.parent = runner;
                runner.dict[curChar] = newNode;
                runner = newNode;
            }
            j++;
        }
        runner.isWord = true;
    }
    return root;
}

