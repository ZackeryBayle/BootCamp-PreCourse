
users = ['John', 'Tiffany', 'Kyle']
tags = ['python', 'development', 'tutorials', 'code']
tag_rang = tags[:-1]

users.insert(0, 'Tony')
num_tags = len(tags)

print(users)
print(num_tags)


users.sort()

print(users)

users.sort(reverse = True)
print(users)
print(tag_rang)
