sentence = "I am a leet programmer"

sentence1 = list(sentence.upper())

print(sentence1)

for idx, i in enumerate(sentence1):
    if i == "A":
        sentence1[idx] = "4"
    elif i == "E":
        sentence1[idx] = "3"
    elif i == "G":
        sentence1[idx] = "6"
    elif i == "I":
        sentence1[idx] = "1"
    elif i == "O":
        sentence1[idx] = "0"
    elif i == "S":
        sentence1[idx] = "5"
    elif i == "T":
        sentence1[idx] = "7"

final = "".join(sentence1)
print(final)
