k=3
name=input("Name: ")
print("Cipher: ",end="")
for c in name:
    if(ord(c)>=65 and ord(c)<=97):
        print(chr((ord(c)+k-65)%26+65),end="")
    elif(ord(c)>=97 and ord(c)<=122):
        print(chr((ord(c)+k-97)%26+97),end="")
    else:
        print(chr(ord(c)+k),end="")
