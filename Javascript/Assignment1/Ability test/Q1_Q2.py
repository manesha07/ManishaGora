# Write a short program that prints each number from 1 to 100 on a new line. 
# For each multiple of 3, print "Fizz" instead of the number. 
# For each multiple of 5, print "Buzz" instead of the number. 
# For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
for x in range(1,101):
    if(x % 3 ==0 and  x % 5==0):
        print("Fizzbuzz")
    elif(x % 5 ==0):
        print("buzz")
    elif(x % 3 ==0):
        print("fizz")
    else:
        print(x)

# Find the Smallest and Biggest Numbers  
# Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
def minMax(Number):
    return([min(Number),max(Number)])
mM=minMax([1])
print(mM)