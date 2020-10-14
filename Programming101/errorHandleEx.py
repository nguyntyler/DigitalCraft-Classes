try:
    number = int(input("Please say a number.\n> "))
    while number > 0:
        print(number)
        number -= 1
except ValueError:
    print("You need to put a number.")


try:
    print("We're going to add, multiply, and divide.")
    print("-"*10)
    num1 = int(input("Please choose a number.\n> "))
    num2 = int(input("Please choose a second number.\n> "))
    print('-'*10)

    sum = num1 + num2
    multiply = num1 * num2
    division = num1 / num2

    print(
        f"Your numbers added is {sum}.\nYour numbers numtiplied is {multiply}.\nYour numbers divided is {division}.")
except ValueError:
    print("You need to input two numbers.")
except ZeroDivisionError:
    print("Your second number cannot be 0. You can't divide by 0.")
