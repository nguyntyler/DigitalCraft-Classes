list1 = ["hi", 1, 2, 3, "bye", 1, 1, "hi"]

no_dupes = []
for i in list1:
    if i not in no_dupes:
        no_dupes.append(i)

print(no_dupes)
