i = 0
x = int(input("How many rows do you want?\n> "))
y = int(input("How many columns do you want?\n> "))

while i < x:
    i += 1
    print("*" * y)

print("-" * 10)

y_line = ("*" * y) + "\n"
print(x * y_line)
