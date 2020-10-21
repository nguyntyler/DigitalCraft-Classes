allstuff = [
    ["Spinach", "Potato", "Celery"],
    ["Apple", "Orange", "Banana"],
    ["Pizza", "Chips", "Granola"]]
stuff = ["Vegetables", "Fruits", "Snacks"]

counter = 0

for idx, titles in enumerate(stuff):
    print(f"{idx + 1}. {titles}")
    for idx, groups in enumerate(allstuff[counter]):
        print(f"\t{idx + 1}. {groups}")
    counter += 1
