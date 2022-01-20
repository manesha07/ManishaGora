# Write a function to render the following pattern in the console:
# * * * * *   
# * * * *   
# * * *   
# * *   
# *    

def pattern(value):
    for i in range(value):
        for j in range(value):
            print("* ",end=" ")
        print("\n")
        value -= 1
pattern(5)

# Censor Words Longer Than Four Characters  
# Create a function that takes a string and censors words over four characters with *.  
def censor(text):
    word_list = text.split()
    result = ''
    count = 0
    index = 0
    for i in word_list:
        if len(i) > 4:
            stars = '*' * len(i)
            word_list[index] = stars
            stars=0
        index += 1
    result =' '.join(word_list)
    return result

x=censor("The code is fourty")
print(x)

# Converting Objects to Arrays   
# Write a function that converts an object into an array, where each element represents a key-value pair.
def toarray(obj):
    new_arr= []
    for x,y in obj.items():
        new_arr.append(list([x,y]))
    return new_arr
arr={'a':1,'b':2,'c':3}   
result=toarray(arr)
print(result)

# Filter Repeating Character Strings  
# Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
def identical(arr):
    print(arr)
    new_arr = list()
    for i in arr:
        if len(set(i)) == 1:
            new_arr.append(i)
    return new_arr
result=identical(["88","999","22","545","133"])
result1=identical(["xxxxo","oxo","xox","ooxxoo","oxo"])
print(result)
print(result1)  

# Return the Objects Keys and Values  
# Create a function that takes an object and returns the keys and values as separate arrays. 
def separate(obj):
    x=list[obj.keys()]
    y=list[obj.values()]
    return (x,y)
arr={'a':'Apple','b':'microsoft','c':'Google'}   
k,v =list(separate(arr))
print(k)
print(v)