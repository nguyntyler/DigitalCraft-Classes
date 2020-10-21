movie = {
    "Title": "Wonderwoman",
    "Genre": "Action",
    "Year": 2016
}


def func_movie(a):
    for idx, i in enumerate(a):
        print(f"{idx+1}. {i} : {a[i]}")


func_movie(movie)
