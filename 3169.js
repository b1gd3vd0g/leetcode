// https://leetcode.com/problems/count-days-without-meetings/

const countDays = (days, meetings) => {
    if (meetings.length === 0) return days;
    meetings.sort((a, b) => a[0] - b[0]);

    let blockStart, blockFinish;
    let meetingDays = 0;
    for (const [start, finish] of meetings) {
        if (!blockStart) {
            blockStart = start;
            blockFinish = finish;
            continue;
        }
        if (start <= blockFinish + 1) {
            blockFinish = Math.max(blockFinish, finish);
        } else {
            meetingDays += 1 + blockFinish - blockStart;
            blockStart = start;
            blockFinish = finish;
        }
    }
    meetingDays += 1 + blockFinish - blockStart;
    return days - meetingDays;
};
