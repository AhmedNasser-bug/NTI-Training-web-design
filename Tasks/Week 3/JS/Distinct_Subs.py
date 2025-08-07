s= [1, 2, 2]

subs = []
for i in range(len(s)):
    current = [s[i]]
    for j in range(i+1, len(s)):
        current.append(s[j])
        subs.append(current[:])
    subs.append(current)

print(subs)