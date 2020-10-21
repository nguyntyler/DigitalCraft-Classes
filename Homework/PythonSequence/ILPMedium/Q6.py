string1 = "Hello"
string2 = "Cheese"
string3 = "Teeppee"

a = []
b = []
liststring = list(string3)

final = []

for i in (liststring):
    final.append(i)
    a = i
    if b == a and (a == "e" or a == "a" or a == "i" or "a" == "o" or a == "u"):
        final.append(i)
        final.append(i)
        final.append(i)
    b = a

print("".join(final))
