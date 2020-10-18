# While loop. Game not in try block. Still has errors.

import random

dash = ("-" * 10)

guess = 0

while guess == 0:
    num = random.randint(1, 10)
    errors = 5
    while guess != num:
        try:
            guess = int(input("Choose a number from 1-10!\n> "))
        except ValueError:
            print("Please give a number!")
            break
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
                    guess = 0
                    errors = 5
                    break
                else:
                    print("Thanks for playing!")
                    exit()
            elif guess == 0:
                break
        else:
            print(dash)
            print(
                "That's the number! You win!")
            print(dash)
            choice = input("Do you want to play again? [Y / N]\n> ")
            print(dash)
            if choice.lower() == "y":
                guess = 0
                errors = 5
                break
            else:
                print("Thanks for playing!")
                exit()
        if guess == 0:
            break
