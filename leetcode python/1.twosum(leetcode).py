def two_Sum(nums,target):
    for i in range(len(nums)):
      for j in range(i+1,len(nums)):
         if (i!=j and nums[i]+nums[j]==target):
             return [i,j]
    # If no solution is found, return an empty list
    return []
nums = [2,11,7,15]
#nums=[3,2,4]
#nums=[3,3]
target = 9
result = two_Sum(nums, target)
print(result)