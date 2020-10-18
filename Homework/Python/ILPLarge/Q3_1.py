# Made with while loops.

import random

dash = ("-" * 10)

while True:
    num = random.randint(1, 10)
    errors = 5

    while True:
        try:
            guess = int(input("Choose a number from 1-10!\n> "))
            if guess > 10:
                print("Please choose a smaller number.")
                print(dash)
            elif guess < 1:
                print("Please choose a bigger number.")
                print(dash)
            elif guess != num:
                print("Nope!")
                if guess > num:
                    print("Try guessing lower!")
                else:
                    print("Try guessing higher!")
                errors -= 1
                print(f"You have {errors} attempts remaining.")
                print(dash)
                if errors == 0:
                    print("You've used all your attempts! You've lost!")
                    print(dash)
                    choice = input("Do you want to play again? [Y / N]\n> ")
                    print(dash)
                    if choice.lower() == "y":
                        break
                    else:
                        print("Thanks for playing!")
                        exit()
            else:
                print(dash)
                print(
                    "That's the number! You win!")
                print(dash)
                choice = input("Do you want to play again? [Y / N]\n> ")
                print(dash)
                if choice.lower() == "y":
                    break
                else:
                    print("Thanks for playing!")
                    exit()
        except ValueError:
            print("Maybe you should choose a whole number..?")
