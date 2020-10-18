total_bill = float(input("How much was your bill?\n> "))
service = input(("How was your service? (Good, Fair, Bad)\n> ".lower()))
people = int(input("How many people are splitting the bill?\n> "))

if service == "good":
    tip = total_bill * 0.20
    total = total_bill * 1.20
    split = total / people
elif service == "fair":
    tip = total_bill * 0.15
    total = total_bill * 1.15
    split = total / people
elif service == "bad":
    tip = total_bill * 0.10
    total = total_bill * 1.10
    split = total / people

print(f"Your tip amount is: {tip}.")
print(f"Your total bill is {total}.")
print(f"The amount per person is: {split}.")
