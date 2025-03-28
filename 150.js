// https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function (tokens) {
    const stk = [];

    for (let token of tokens) {
        // Attempt to parse an integer.
        const parsed = parseInt(token);

        if (isNaN(parsed)) {
            // token is an operator.
            const b = stk.pop();
            const a = stk.pop();
            switch (token) {
                case '+':
                    stk.push(a + b);
                    break;
                case '-':
                    stk.push(a - b);
                    break;
                case '*':
                    stk.push(a * b);
                    break;
                case '/':
                    const exact = a / b;
                    if (exact > 0) {
                        stk.push(Math.floor(a / b));
                    } else {
                        stk.push(Math.ceil(a / b));
                    }
                    break;
            }
        } else {
            // token is an operand.
            stk.push(parsed);
        }
    }
    return stk.pop();
};
