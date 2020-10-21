class Vehicle:
    def __init__(self, category, topspeed, acceleration, wheels=4):
        self.category = category
        self.wheels = wheels
        self.topspeed = topspeed
        self.speed = 0
        self.position = 0
        self.acceleration = acceleration
        print(
            f"Your vehicle is a {self.category} and has {self.wheels} wheels with a topspeed of {topspeed}.")

    def move(self):
        self.position = self.position + self.speed

    def accelerate(self):
        self.speed = self.speed + self.acceleration
        if self.speed > self.topspeed:
            # print("You've reached topspeed. You cannot go any faster.")
            self.speed = self.topspeed

        # print(f"The speed has accelerated to {self.speed}.")


def moving():
    bike.accelerate()
    bike.move()
    van.accelerate()
    van.move()
    truck.accelerate()
    truck.move()
    unicycle.accelerate()
    unicycle.move()


def where():
    print(
        f"Bike is at {bike.position}m.\nVan is at {van.position}m.\nTruck is at {truck.position}m.\nUnicycle is at {unicycle.position}m.")
    print("-"*10)


bike = Vehicle("bike", 50, 2, 2)
van = Vehicle("van", 90, 3)
truck = Vehicle("truck", 80, 4)
unicycle = Vehicle("unicycle", 40, 2, 2)

seconds = 0

distance = int(input(
    "How long is your race? (Choose a number divisible by 3 if possible.)\n> "))

while seconds < distance:
    while seconds < (distance / 3):
        moving()
        seconds += 1
    print(f" *** At {seconds} seconds, the results are: ***")
    where()
    while seconds < (distance / 3) * 2:
        moving()
        seconds += 1
    print(f" *** At {seconds} seconds, the results are: ***")
    where()
    while seconds < distance:
        moving()
        seconds += 1
    print(f" *** At {seconds} seconds, the results are: ***")
    where()
