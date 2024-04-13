#tuple
tup=(21,22,23,24,25)
print(tup)
print(tup[1])
print(tup[-1])
print(tup[::-1])
print(tup[1:4])

#Set=unique elements,unordered elements,not support index
s={22,23,24,25}
print(s)
#print(s[2])-error

#Dictionary-keyvaluepairs
data={1:'one',2:'Two'}
print(data)
print(data[2])
print(data.get(2))
print(data.get(4,'NOT found'))
keys=[9,8,7]
values=['nine','eight','seven']
data=dict(zip(keys,values))
print(data)
del data[7]
print(data)
prog={'JS':'Atom','CS':'VS','python':['Pycharm','Sublime'],'java':{'js','notepad'}}
print(prog)
print(prog['CS'])
print(prog['python'])
print(prog['python'][1])
print(prog['java'])