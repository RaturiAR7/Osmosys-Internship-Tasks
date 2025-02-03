#List of dictionaries
# people=[
#     {"name":"Carter","number":"1234567"},
#     {"name":"Anshul","number":"8755508759"},
#     {"name":"Bhaalu","number":"09876543"},
# ]
# name=input("Name: ")

# for person in people:
#     if person["name"]==name:
#         number=person["number"]
#         print(f"Found number of {name} = {number}")
#         break
# else:
#     print("Not found")

#Dictionary
people={
    "Carter":"128391231",
    "Anshul":"8755508759",
    "John":"726387213",
}

name=input("Name: ")
if name in people:
    print(f"Number of {name} is : {people[name]}")
else:
    print("Not present")
