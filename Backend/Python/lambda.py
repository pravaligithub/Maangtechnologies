'''
def square(a):
    return a*a
r=square(5)
print(r)
'''
#Anonymous functions are objects in function
f=lambda a,b,c,d,e : a+b+c+d+e
r=f(5,6,7,8,9)
print(r)
'''
#filter,map,reduce
def is_even(n):
    return n%2==0
nums=[3,2,4,5,6]
evens=tuple(filter(is_even,nums))
print(evens)
'''

nums=[32,67,94,37,12,19,10]
evens=tuple(filter(lambda n:n%2==0,nums))
print(evens)

nums=[32,67,94,37,12,19,10]
odds=tuple(filter(lambda n:n%2!=0,nums))
print(odds)

