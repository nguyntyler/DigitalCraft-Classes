people = [
    {
        "name": "Tyler Nguyen",
        "phone": 7707707777,
        "email": "tyler@email.com"
    },
    {
        "name": "Bob Nguyen",
        "phone": 6607707777,
        "email": "bob@email.com"
    },
    {
        "name": "Sally Nguyen",
        "phone": 1107707777,
        "email": "sally@email.com"
    }
]

for person in people:
    for i in person:
        print(i, ":", person[i])
    print("-"*10)
