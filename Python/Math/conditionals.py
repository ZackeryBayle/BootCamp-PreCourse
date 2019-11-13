# age = 66

# if age < 25:
#     print(f"I'm sorry, you need to be atleast 25 years old")
# elif age > 65:
#     print(f"I'm sorry, {age} is too old enough to rent a car.")
# else:
#     print(f"You're approved, {age} is old enough to rent a car.")


# 
# Ternary Operator
# 

# role = 'Guest'

# auth = 'can access' if role == 'admin' else 'cannot access'
# print(auth)

# if role == 'admin':
#     auth = 'can access'
# else:
#     auth = f'{role} cannot access'

# print(auth)

# END


# check value

sentance = 'The quick brow fox jumped over the lazy brown dog.'
word = 'quick'
nums = [1,2,3,4]

# if word.lower() in sentance.lower():
#     print(f'{word} was found')
# else:
#     print(f'{word} NOT found')
# ---
# if 3 in nums:
#     print(f'3 was found')
# else:
#     print(f'Number not found')

# 
# Compound Conditionals
# 
username = 'john'
email = 'jon@snow.com'
password = 'king'
logged_in = False
standard_user = True

if (username == 'john' or email == 'jon@snow.com') and password == 'king':
    print(f'Access permitted {username}')
    logged_in = True
    if logged_in and not standard_user:
        print(f'Welcome {username}, you can access the dashboard')
    else:
        print('You are a standard user. No Dashboard access')
else:
    print(f'Access Denied {username}')


