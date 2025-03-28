// https://leetcode.com/problems/balanced-binary-tree/

const isBalanced = (root) => {
    /** A recursive function to find the height of a balanced tree, or -1 for an unbalanced tree. */
    const treeHeight = (tree) => {
        // Base case: tree is null.
        if (tree === null) {
            return 0;
        } else {
            // tree must be a node.
            const leftHeight = treeHeight(tree.left);
            if (leftHeight === -1) {
                return -1;
            }
            const rightHeight = treeHeight(tree.right);
            if (rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }
            return 1 + Math.max(rightHeight, leftHeight);
        }
    };

    return treeHeight(root) !== -1;
};
