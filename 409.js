// https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = (s) => {
    const map = new Map();
    for (const c of s) {
        map.set(c, 1 + (map.get(c) ?? 0));
    }
    let sum = 0;
    let odd = 0;
    for (const quan of map.values()) {
        if (quan % 2 === 0) {
            sum += quan;
        } else {
            odd = 1;
            sum += quan - 1;
        }
    }
    return sum + odd;
};
