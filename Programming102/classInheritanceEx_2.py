class Vehicle:
    def __init__(self, topspeed, acceleration, wheels=4):
        self.wheels = wheels
        self.position = 0
        self.speed = 0
        self.topspeed = topspeed
        self.acceleration = acceleration
        self.race_stats = []

    def move(self):
        # You can run this so that when you move you accelerate.
        self.accelerate()
        self.position += self.speed
        self.race_stats.append(
            {"speed": self.speed, "position": self.position})

    def accelerate(self):
        self.speed += self.acceleration
        if self.speed > self.topspeed:
            self.speed = self.topspeed

    def reset(self):
        self.speed = 0
        self.accelerate = 0


# bike = Vehicle(50, 5, 2)
# van = Vehicle(90, 3)
# truck = Vehicle(80, 4)
# unicycle = Vehicle(100, 2, 2)

all_cars = {
    "bike": Vehicle(50, 5),
    "van": Vehicle(90, 3),
    "truck": Vehicle(80, 4),
    "unicycle": Vehicle(100, 2)
}

print("  *** 20 Second Run! ***")


def run_race(time):
    for i in range(time):
        for car_name in all_cars:
            all_cars[car_name].move()

    print("Race is over.")

    for car_name in all_cars:
        print(f"{car_name} - {all_cars[car_name].position}")

    for car_name in all_cars:
        print(f"{car_name}: ")
        for i in range(len(all_cars[car_name].race_stats)):
            print(all_cars[car_name].race_stats[i])
