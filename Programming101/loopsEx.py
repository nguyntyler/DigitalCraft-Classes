i = 1
while i < 11:
    print(i)
    i += 1

i = 10
while i > 0:
    print(i)
    i -= 1

username = "tnguyen"
password = "abc"

usern = ""
passw = ""

attempts = 3
while True:
    usern = input("What is your username?\n> ")
    passw = input("What is your password?\n> ")
    if usern != username or passw != password:
        print("-"*10)
        print("Wrong credentials.")
        print("-"*10)
        attempts -= 1

        if attempts == 2:
            print(f"You have 2 attempts remaining.")
            print("-"*10)
        elif attempts == 1:
            print("You only have one more attempt before your account is deactivated.")
            print("-"*10)
        elif attempts == 0:
            print("Your account has been deactivated. Please contact customer service.")
            print("-"*10)
            break
    elif usern == username and passw == password:
        print("-"*10)
        print("Access granted!")
        break
