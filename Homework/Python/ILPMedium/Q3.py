coins = 0

while True:
    print(f"You have {coins} coins.")
    choice = input("Do you want another coin? [Yes / No]\n> ").lower()
    if choice == "yes":
        coins += 1
    elif choice == "no":
        print("Bye.")
        break
    else:
        print("Please write a valid response.")
