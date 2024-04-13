'''num=input("enter num value:")
for i in num:
    print(i)
'''

'''
for i in range(100,0,-2):
    print(i)'''

'''
for i in range(1,21):
    if (i%5!=0):
        print(i)
        '''
x=int(input("enter how many candies you want?"))
i=1
while i<=x:
    print("candy")
    i+=2

av=5
p=int(input("enter num"))
i=1
while i<=p:
     if i>av:
         print("out")
         break
     print("candy")
     i=i+1
print("bye")

#5table

nums=[12,13,14,18,15]
for num in nums:
      if(num%5==0):
           print(num)
           break
      else:
          print("not found")


