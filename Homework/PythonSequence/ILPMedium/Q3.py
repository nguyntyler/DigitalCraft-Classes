a = [
    [1, 2],
    [2, 5]
]

b = [
    [2, 2],
    [5, 10]
]

c = [
    [0, 0],
    [0, 0]
]

for i in range(len(a)):
    for j in range(len(a[0])):
        c[i][j] = a[i][j] + b[i][j]

for C in c:
    print(C)
