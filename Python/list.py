scores=[]
for i in range (3):
    score=int(input("Enter a number:"))
    scores.append(score)

average=sum(scores)/len(scores)
print(f"Average: {average}")