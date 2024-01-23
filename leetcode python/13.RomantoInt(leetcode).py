class Solution:
  def r(self,s):
    r_values={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    total=0
    p=0
    for char in s:
      c_v=r_values[char]
      if c_v > p:
        total=c_v+total-2*p
      else:
        total=c_v+total
      p=c_v
    return total
s= "LVIII"
solution=Solution()
res=solution.r(s)
print(res)