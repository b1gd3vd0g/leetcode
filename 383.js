// https://leetcode.com/problems/ransom-note/

var canConstruct = function (ransomNote, magazine) {
    const rMap = new Map();
    const mMap = new Map();
    for (const letter of ransomNote) {
        rMap.set(letter, (rMap.get(letter) ?? 0) + 1);
    }
    for (const letter of magazine) {
        mMap.set(letter, (mMap.get(letter) ?? 0) + 1);
    }
    for (const [letter, rQuan] of rMap.entries()) {
        const mQuan = mMap.get(letter) ?? 0;
        if (mQuan < rQuan) {
            return false;
        }
    }
    return true;
};
