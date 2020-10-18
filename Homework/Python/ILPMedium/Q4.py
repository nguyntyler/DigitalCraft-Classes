width = int(input("How wide is your box?\n> "))
height = int(input("How high is your box?\n> ")) - 2

# Each Row
out_row = '*' * width

white_width = width - 2
middle_rows = '*' + ' ' * white_width + '*'

# Full box
print(out_row + '\n' + (middle_rows + '\n') * height + out_row)
