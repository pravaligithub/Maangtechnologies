class TreeNode:
    def __init__(self,val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def inorderTraversal(self, root):
        result = []
        self.inorderHelper(root,result)
        return result
    def inorderHelper(self,node,result):
        if node:
            self.inorderHelper(node.left,result)
            result.append(node.val)
            self.inorderHelper(node.right,result)
# Example usage:
# Construct the tree [1, null, 2, 3]
root = TreeNode(1, None, TreeNode(2, TreeNode(3)))
solution = Solution()
output = solution.inorderTraversal(root)
print(output)
        