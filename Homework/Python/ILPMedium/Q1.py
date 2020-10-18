total_bill = float(input("How much was your bill?\n> "))
service = input(("How was your service? (Good, Fair, Bad)\n> ".lower()))

if service == "good":
    tip = total_bill * 0.20
    print(f"Your tip amount is: {tip}")
    total = total_bill * 1.20
    print(f"Your total bill is {total}")

elif service == "fair":
    tip = total_bill * 0.15
    print(f"Your tip amount is: {tip}")
    total = total_bill * 1.15
    print(f"Your total bill is {total}")

elif service == "bad":
    tip = total_bill * 0.10
    print(f"Your tip amount is: {tip}")
    total = total_bill * 1.10
    print(f"Your total bill is {total}")
