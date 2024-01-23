class Solution:
 def longestCommonPrefix(self,strs):
    if not strs:
        return ""

    # Sort the strings to find the common prefix easily 
    # Consider the first and last strings after sorting

    strs.sort()
    first_str = strs[0]
    last_str = strs[-1]
    common_prefix = []

    for i in range(len(first_str)):
        if i <= len(last_str) and first_str[i] == last_str[i]:
            common_prefix.append(first_str[i])
        else:
            break
    return "".join(common_prefix)

strs = ["flower", "flow", "flight"]
solution=Solution()
result =solution.longestCommonPrefix(strs)
print(result)