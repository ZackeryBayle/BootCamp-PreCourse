
# def full_name(first_name, last_name):
#     print(f'Hello,{first_name} {last_name}')

# full_name('zac','bayle')

# def auth(email, password):
#     if email == 'office@zbsites.com' and password == 'secret':
#         print('Authorised')
#     else:
#         print('NOT Authorised')
# auth('office@zbsites.com', 'secret')


# def hundred():
#     for num in range(1, 101):
#         print(num)
# hundred()

# def counter (max):
#     for num in range(1, max):
#         print(num)
# counter(20)


# 
# What are returns
# 




# def greeting(first, last):

#     def full_name():
#         return f'{first} {last}'

#     print(f'Hello, {full_name()}')
# greeting('zac', 'bayle')

# end

# Defult Arguments - unmutable ONLY
# 
# 
# def greeting(name = 'Guest'):
#     print(f'Hi {name}!')
# greeting('zac')


# 
# Unpacking Arguments & Keyword Args
# 

# def greeting(*args):
#     print(f"Hi {' '.join(args)}")
# greeting('Tiffany', 'Hudgens')

# def users(**kwargs):
#     if kwargs:
#         print(f"Hello, {kwargs['first_name']} {kwargs['last_name']} welcome!")
#     else:
#         print(f"Hello, Guest!")
# users(first_name = 'zac', last_name = 'bayle')

# 
# Full function
#
# 
# 


def greeting(time, *args, **kwargs):
    print(f"Hi {' '.join(args)}, Have a great {time}")

    if kwargs:
        print('Your tasks for the day are: ')
        for key, val in kwargs.items():
            print(f"{key} => {val}")

greeting('Morning',
        'Zac','Bayle',
        first = 'Empty Dishwasher',
        second = 'Walk Dog',
        third = 'Homework'
        )