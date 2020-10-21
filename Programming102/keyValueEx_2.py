person = {
    "first_name": "Tyler",
    "last_name": "Nguyen",
    "age": 24,
    "hair_color": "black"
}

for i in person:
    print(f"{i}: {person[i]}")

print("Hello %s %s. Since you are %s years old, you are too young to ride this ride. " %
      (person["first_name"], person["last_name"], person["age"]))
