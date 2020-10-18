day = int(input("Choose a day (0-6). > "))

if day == 0:
    print("Sunday.")
elif day == 1:
    print("Monday.")
elif day == 2:
    print("Tuesday.")
elif day == 3:
    print("Wednesday.")
elif day == 4:
    print("Thursday.")
elif day == 5:
    print("Friday.")
elif day == 6:
    print("Saturday.")

days = ["Sunday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
print(days[day])
