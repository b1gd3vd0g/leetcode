// https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/

const minOperations = (grid, x) => {
    const mod = grid[0][0] % x;
    const values = grid.flat();
    for (const value of values) {
        if (value % x !== mod) return -1;
    }
    values.sort((a, b) => a - b);
    const median = values[Math.floor(values.length / 2)];
    let ops = 0;
    for (const value of values) {
        ops += Math.abs(median - value) / x;
    }
    return ops;
};
