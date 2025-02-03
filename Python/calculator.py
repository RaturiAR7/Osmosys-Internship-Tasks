a=int(input("Enter a number"))
# a=int(a)
b=int(input("Enter another number"))
# b=int(b)


def add(a,b):
    return a+b

def sub(a,b):
    return abs(a-b)

def mul(a,b):
    return a*b

def div(a,b):
    if(a>b):
        return a/b
    else:
        return b/a

print(f"Addition:{add(a,b)}")
print(f"Substraction:{sub(a,b)}")
print(f"Multiply:{mul(a,b)}")
print(f"Division:{div(a,b):.3}")     ## 3 decimal points