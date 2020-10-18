# Made with functions.

import random

dash = ("-" * 10)


def restart():
    choice = input("Do you want to play again? [Y / N]\n> ")
    print(dash)
    if choice.lower() == "y":
        startGame()
    else:
        print("Thanks for playing!")
        exit()


def startGame():
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
                print("Nope, try again!")
                if guess > num:
                    print("Try guessing lower!")
                else:
                    print("Try guessing higher!")
                errors -= 1
                print(f"You have {errors} attempts remaining.")
                print(dash)
                if errors == 0:
                    print("You've used all your attempts! You've lost!")
                    restart()

            else:
                print(
                    "That's the number!")
                restart()
        except ValueError:
            print("I said choose a number..")


startGame()
