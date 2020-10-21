name = "Tyler"


def myfunc(newname):
    global name
    name = newname


print(name)
myfunc("Carl")
print(name)
myfunc("Sally")
print(name)
myfunc("Aang")
print(name)
