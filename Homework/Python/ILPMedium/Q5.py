width = int(input("How big is your triangle? \n> "))

if (width % 2) == 0:
    width += 1

white_amount = int((width - 1) / 2)
star_amount = 1

while star_amount <= width:
    white = " " * white_amount
    star = "*" * star_amount
    print(white + star)
    star_amount += 2
    white_amount -= 1
