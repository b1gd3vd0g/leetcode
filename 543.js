// THIS IS STILL NOT GOOD ENOUGH. IT IS CORRECT BUT INEFFICIENT.

const diameterOfBinaryTree = (root) => {
    /**
     * Recursively solve for the edgeHeight of a binary tree.\
     * The edgeHeight is the number of edges to get to its deepest leaf.\
     * NOTE:
     * > NULL will return an edgeHeight of -1.\
     * > A leaf node will return an edgeHeight of 0.
     */
    const edgeHeight = (tree) => {
        if (tree === null) return -1;
        const leftHeight = edgeHeight(tree.left);
        const rightHeight = edgeHeight(tree.right);
        const soln = 1 + Math.max(leftHeight, rightHeight);
        console.log(tree.value + ' edgeHeight: ' + soln);
        return soln;
    };

    /*
    My thinking is as follows:

    Starting at the root node, calculate the diameter that DOES
    pass through the root; that is, calculate the height of both subtrees,
    and add them together (plus 2 if they're both non-zero).

    If that diameter is greater than maxDiameter, it should replace maxDiameter.

    Now, IF the height of both subtrees is equal, that means there cannot be a
    greater diameter within either subtree. In this case, you can escape the loop.

    OTHERWISE, there could possibly be a greater diameter within the larger of
    the two subtrees. Let node be its child with the greater height, and repeat.
    */

    let maxDiameter = 0;
    let ptr = root;

    while (1) {
        const { left, right } = ptr;
        const leftHeight = edgeHeight(left);
        const rightHeight = edgeHeight(right);
        let diameter = leftHeight + rightHeight + 2;
        maxDiameter = Math.max(maxDiameter, diameter);
        if (leftHeight === rightHeight) break;
        if (Math.max(leftHeight, rightHeight) * 2 <= maxDiameter) {
            break;
        }
        ptr = leftHeight > rightHeight ? left : right;
    }

    return maxDiameter;
};
