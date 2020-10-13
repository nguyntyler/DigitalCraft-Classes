a = "My name is: "
b = "Tyler Nguyen."

print(a + b)

print(f"Today's question is: What is your name?\n{a} \n{b}")

print("-"*10)

print("This is a haiku\nThis is a haiku okay\nThis is a haiku")

print("-"*10)

person = "Tyler"
today = "Tuesday"
emotion = "great"

print("Hello %s,\nI hope that your %s is going well.\nI'm personally really %s." %
      (person, today, emotion))

print("-"*10)

print(f"Hello {person},\nI hope that your {today} is going well.\nI'm personally really {emotion}.")

print("-"*10)

print("Hello", person + ",\nI hope that your", today,
      "is going well.\nI'm personally really", emotion, ".")
