list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for i in list1:
    for x in list2:
        total = i * x
        print(f"{i} X {x} = {total}")
    print("-" * 10)
