const checkValidCuts = (n, rectangles) => {
    rectangles.sort((a, b) => a[0] - b[0]);
    let cuts = -1;
    const bounds = [-1, -1];
    for (const [ax, ay, bx, by] of rectangles) {
        if (ax >= bounds[1]) {
            bounds[0] = ax;
            bounds[1] = bx;
            cuts++;
            if (cuts >= 2) return true;
        } else {
            bounds[1] = Math.max(bounds[1], bx);
        }
    }
    rectangles.sort((a, b) => a[1] - b[1]);
    cuts = -1;
    bounds[0] = -1;
    bounds[1] = -1;
    for (const [ax, ay, bx, by] of rectangles) {
        if (ay >= bounds[1]) {
            bounds[0] = ay;
            bounds[1] = by;
            cuts++;
            if (cuts >= 2) return true;
        } else {
            bounds[1] = Math.max(bounds[1], by);
        }
    }
    return false;
};
