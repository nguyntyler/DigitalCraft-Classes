things = ["water bottle", "monitor", "ipad", "window"]
counter = 0

for i in things:
    print(f"{counter}. {i}")
    counter += 1

choice = int(input("Which do you find the most interesting? (Pick 0-3)\n> "))

if choice == 0:
    print("You chose the water bottle! You must like water.")
elif choice == 1:
    print("You chose the monitor! You must like watching things.")
elif choice == 2:
    print("You chose the ipad! It was very expensive.")
elif choice == 3:
    print("You chose the window! The better to see out of I say.")

# print(f"You chose the {things[choice]}! You must like that a lot!")
