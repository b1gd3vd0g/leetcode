// https://leetcode.com/problems/rotting-oranges/

const orangesRotting = (grid) => {
    const height = grid.length;
    const width = grid[0].length;
    // 0)   Do an iteration of the grid to solve for two things:
    //      - Put all rotted oranges in a queue.
    //      - Count all fresh oranges.

    let fresh = 0; // # of fresh oranges remaining.
    const spreaders = []; // A queue of all rotted oranges which have not yet spread their infection.
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const orange = grid[y][x];
            if (orange === 2) spreaders.push([x, y]);
            else if (orange === 1) fresh++;
        }
    }
    if (fresh === 0) return 0;

    // 1)   Now, until spreaders is empty, deal with each spreader.
    //      We need to keep track of how many minutes we spend.
    //      We also need to subtract from freshes to make sure we can get them all.

    let minutes = 0; // The number of minutes passed.
    let leftThisMinute = spreaders.length; // The number of spreaders to deal with before iterating minute.
    while (spreaders.length) {
        const [x, y] = spreaders.shift(); // The first rotted orange.
        leftThisMinute--; // We are going to deal with rotted in this iteration of the loop.
        // Now deal with rotted:
        // Spread to all your neighbors, and add them to the queue if they were fresh.
        const moves = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1]
        ];
        for (const [deltaX, deltaY] of moves) {
            const [x1, y1] = [deltaX + x, deltaY + y];
            if (x1 < 0 || y1 < 0 || x1 >= width || y1 >= height) continue;
            if (grid[y1][x1] === 1) {
                // This is a fresh orange that is now rotted.
                // It is therefore a spreader.
                grid[y1][x1] = 2;
                spreaders.push([x1, y1]);
                fresh--;
            }
        }
        if (leftThisMinute === 0) {
            minutes++; // A minute will have passed.
            leftThisMinute = spreaders.length; // Set up the next iteration.
        }
    }
    minutes--;
    return fresh === 0 ? minutes : -1;
};
