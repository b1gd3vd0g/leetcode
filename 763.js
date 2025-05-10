// https://leetcode.com/problems/partition-labels/

const partitionLabels = (s) => {
    /** A map of a character to its last index in s. */
    const lastIndex = new Map();
    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }

    /** An array of all partition lengths. */
    const partitions = [];
    /** The interval [a, b] (inclusive) of this CURRENT partition. */
    const interval = [0, 0];

    for (let i = 0; i < s.length; i++) {
        // Find the last instance of c, and reset interval[1] if necessary.
        const c = s[i];
        const lastC = lastIndex.get(c);
        interval[1] = Math.max(interval[1], lastC);
        // If the interval is over, we need to append this partition
        // and start another.
        if (interval[1] === i) {
            partitions.push(interval[1] - interval[0] + 1);
            interval.fill(i + 1);
        }
    }
    return partitions;
};
