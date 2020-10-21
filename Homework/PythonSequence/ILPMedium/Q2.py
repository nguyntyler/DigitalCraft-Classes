a = [
    [1, 2],
    [2, 5]
]

b = [
    [2, 2],
    [5, 10]
]

c = [
    [],
    []
]

sub_count = 0
count = 0

for i in a:
    c[count].append(i[sub_count] + b[count][sub_count])
    sub_count += 1
    c[count].append(i[sub_count] + b[count][sub_count])
    sub_count = 0
    count += 1

print(c[0])
print(c[1])
