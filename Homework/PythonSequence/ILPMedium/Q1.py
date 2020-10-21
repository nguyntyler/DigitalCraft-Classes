list1 = [2, 4, 5]
list2 = [2, 3, 6]

list3 = []
counter = 0

while len(list3) < len(list1):
    list3.append(list1[counter] * list2[counter])
    counter += 1

print(list3)
