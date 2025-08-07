from collections import defaultdict
common_chars = []
words = ["bella", "lab", "babel"]
appered = defaultdict(list)

for word in words:

    for char in word:
        appered[char].append(word)
        if len(appered[char]) == len(words): common_chars.append(char)


print(common_chars)


print(len(set(word)) == 26) # Pangram check