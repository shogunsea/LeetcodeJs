/**
 * @constructor
 */
var MinStack = function() {
    this.st = [];
    this.min = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    if (x === undefined || x === null) {
        return;
    }
    
    if (this.st.length === 0) {
        this.st.push(x);
        this.min.push(x);
    } else {
        this.st.push(x);
        var last = this.min[this.min.length - 1];
        if (x <= last) {
            this.min.push(x);
        }
    }
    
    
    
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var val = this.st.pop();
    if (this.min[this.min.length - 1] === val) {
        this.min.pop();
    }
    return val;
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    return this.st[this.st.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};