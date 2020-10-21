names = ["Tom", "Mary", "Paimon", "Nick", "Nicole"]

while len(names) > 0:
    print(names)
    print("We are now removing " + names[0])
    del names[0]

print(names)

print(id(1))
x = 1
print(id(x))
