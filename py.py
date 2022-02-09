


from calendar import c
from hashlib import new
from unicodedata import name


p={
    'name':"p",
    'home':'timapur',
    'age':20,
    'fav_colors':['red','blue','green','yellow'],


}

p['fav_colors'][3]='black'
print(p['fav_colors'][3])
r=7
print(r!=7)
a=['1','2', '','','3','4']
c=[6,7,8,9,10]
b=[]
for i in a:
    if i == '':
        i='0'
    
    b.append(int(i))

print(b)

name=['John','Jane','Mary','Mark','Bob']
lastNames=['Smith']
newarray=[]
for i in range(len(name)):
    fullname=(name[i]+' '+lastNames[0])
    newarray.append(fullname)
print(newarray)