class Solution:
    def climbStairs(self,n):
        if n == 1:
            return 1
        if n == 2:
            return 2
        # Initialize an array to store the number of ways to reach each step
        dp = [0] * (n + 1)
        dp[1] = 1  # There is 1 way to reach the first step
        dp[2] = 2  # There are 2 ways to reach the second step (1+1 or 2)
        # Fill in the dp array for steps 3 to n
        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]
n = 7
solution = Solution()
distinct_ways = solution.climbStairs(n)
print(distinct_ways)