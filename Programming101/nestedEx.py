pet_name = input("What is your pet's name?\n> ")
if len(pet_name) < 3:
    print("That name is too short.")
elif len(pet_name) > 3:
    print(f"Aww, sweet {pet_name}!")

    if pet_name == "Shadow":
        print("El gato diablo!")
    elif pet_name == "Daisy":
        print("Good dog!")
else:
    print("That's as short as 'Tom'.")
