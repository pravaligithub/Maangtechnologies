#array is a collection of elements of same type
'''from array import *
vals=array('i',[1,2,3,4])
print(vals.buffer_info())
for e in vals:
  print(e)
from array import *
arr = array('i', [])
n=int(input("enter the length of array"))
for i in range(n):
    x=int(input("enter the next value:"))
    arr.append(x)
print(arr)
'''
from factorial import *
import factorial as np
arr=array([1,2,3,4,5.0])
arrs=array([1,2,3],float)
print(arrs.dtype)
print(arrs)
a=linspace(0,15,16)
print(a)
b=arange(1,15,2)
print(b)
c=logspace(1,40,5)
print(c)
print(np.ones([5,5]))
print(np.zeros([3,3]))

