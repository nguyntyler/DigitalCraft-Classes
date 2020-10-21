def func_multi(a, b):
    try:
        print(int(a) * int(b))
    except ValueError:
        print("You did not provide two numbers.")


func_multi(1, "f")

func_multi(11, 22)

func_multi(38575, 33848)
