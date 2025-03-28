// https://leetcode.com/problems/implement-queue-using-stacks

function MyQueue() {
    /** This stack will take in new values. */
    this.input = [];
    /** This stack will give out values. */
    this.output = [];
    /** Number of elements in the stack. */
    this.count = 0;
}

MyQueue.prototype.push = function (x) {
    this.input.push(x);
    this.count++;
};

MyQueue.prototype.peek = function () {
    if (this.count === 0) {
        return null;
    }
    if (!this.output.length) {
        while (this.input.length) {
            this.output.push(this.input.pop());
        }
    }
    return this.output[this.output.length - 1];
};

MyQueue.prototype.pop = function () {
    if (this.peek() === null) return null;
    this.count--;
    return this.output.pop();
};

MyQueue.prototype.empty = function () {
    return this.count === 0;
};
