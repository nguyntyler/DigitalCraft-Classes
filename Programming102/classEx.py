class Vehicle:
    def __init__(self, category, wheels=4):
        self.category = category
        self.wheels = wheels
        print(
            f"Your vehicle is a {self.category} and has {self.wheels} wheels.")


v1 = Vehicle("motorcycle", 2)

v2 = Vehicle("bike", 2)

v3 = Vehicle("van")

v4 = Vehicle("truck", 6)

v5 = Vehicle("unicycle", 1)
