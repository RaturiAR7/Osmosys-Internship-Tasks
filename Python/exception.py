def get_int(prompt):
    try:
        return int(input(prompt))
    except ValueError:
        print("Not a number")
        return get_int(prompt)

def main():
    x=get_int("Enter a number: ")
    y=get_int("Enter another number: ")
    print(f"Addition: {x+y}")

main()