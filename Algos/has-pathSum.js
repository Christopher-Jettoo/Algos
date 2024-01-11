

/** 
 Given a tree and a sum, returns true if there is a path from the root 
 down to a leaf, such that adding up all the values along the path 
 equals the given sum. 
 Strategy: subtract the node value from the sum when recurring down, 
 and check to see if the sum is 0 when you run out of tree. 
*/ 


function hasPathSum(root, targetSum) {

      if (!root) {
        return false;
    }

    if (!root.left && !root.right) {
        return targetSum - root.val === 0;
    }

    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );
}