// https://leetcode.com/problems/climbing-stairs

const climbStairs = (n) => {
    if (n <= 3) return n;
    const waysThere = Array.from({ length: n + 1 });
    waysThere[1] = 1;
    waysThere[2] = 2;
    let index = 3;
    while (index <= n) {
        waysThere[index] = waysThere[index - 1] + waysThere[index - 2];
        index += 1;
    }
    return waysThere[n];
};
