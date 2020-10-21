def total_count(args):
    return {
        "list_length": len(args),
        "total_chars": len("".join(args).replace(" ", ""))
    }


print(total_count(["I", "am", "doing it."]))
