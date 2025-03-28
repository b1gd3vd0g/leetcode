// https://leetcode.com/problems/minimum-index-of-a-valid-split/

const minimumIndex = (nums) => {
    // 0) Solve for the most common element (candidate).
    if (nums.length <= 1) return -1;
    let score = 0;
    let candidate;
    for (const num of nums) {
        if (score === 0) {
            candidate = num;
            score++;
        } else if (candidate === num) {
            score++;
        } else {
            score--;
        }
    }

    // 1) Find the frequency of candidate.
    const freq = nums.reduce(
        (prev, curr) => (curr === candidate ? prev + 1 : prev),
        0
    );

    // 2) Find the first index with a valid split.
    let occsA = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === candidate) occsA++;
        const lenA = i + 1;
        if (occsA / lenA > 0.5) {
            // We MAY have the first split.
            const lenB = nums.length - lenA;
            const occsB = freq - occsA;
            if (occsB / lenB > 0.5) return i;
        }
    }
    return -1;
};
