list1 = [1, 2, 3, 4, 5]

total = 0

for i in list1:
    total += i

print(total)

list2 = []
sum = 0

while True:
    try:
        list2.append(
            int(input("Choose numbers. Or press any other key to finish.\n> ")))
        print(list2)
    except:
        for i in list2:
            sum += i
        print("The total sum of your numbers is: " + str(sum))
        break
