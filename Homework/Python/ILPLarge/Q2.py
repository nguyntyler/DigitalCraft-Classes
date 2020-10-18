choice = int(input("Choose a number.\n> "))

max_range = choice + 1

factors = []

for i in range(1, max_range):
    if choice % i == 0:
        factors.append(i)

print(f"Your factors of {choice} are: \n{factors}")
