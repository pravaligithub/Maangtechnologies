'''
import sys
sys.setrecursionlimit(2000)
print(sys.getrecursionlimit())
i=0
def greet():
    global i
    i=i+1
    print("hello",i)
    greet()
greet()
'''
'''
def fact(n):
    if(n==0):
        return 1
    else:
        return n*fact(n-1)
r=fact(5)
print(r)'''

def f(n):
    f=1
    for i in range(1,n+1):
        f=f*i
    print(f)
f(0)