class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isSymmetric(self, root):
        # Helper function for checking symmetry
        def isMirror(left, right):
            # If both nodes are None, they are symmetric
            if not left and not right:
                return True
            # If one of the nodes is None, they are not symmetric
            if not left or not right:
                return False
            # Check if the values are equal and if subtrees are symmetric
            return left.val == right.val and isMirror(left.left, right.right) and isMirror(left.right, right.left)
        # If the root is None, it is symmetric
        if not root:
            return True
        # Check if the left and right subtrees are symmetric
        return isMirror(root.left, root.right)

# Example usage:
# Construct a symmetric tree [1, 2, 2, 3, 4, 4, 3]
root = TreeNode(1, TreeNode(2, TreeNode(3), TreeNode(4)), TreeNode(2, TreeNode(4), TreeNode(3)))
# Construct a non-symmetric tree [1, 2, 2, null, 3, null, 3]
# root = TreeNode(1, TreeNode(2, None, TreeNode(3)), TreeNode(2, None, TreeNode(3)))
solution = Solution()
is_symmetric = solution.isSymmetric(root)
print(is_symmetric)
