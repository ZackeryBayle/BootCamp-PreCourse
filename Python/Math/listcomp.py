num_list = range(1,11)

even_numbers = []

# for num in num_list:
#     if num % 2 == 0:
#         even_numbers.append(num)

even_numbers = [num for num in num_list if num % 2 == 0]

# cubed_nums = []

# for num in num_list:
#     cubed_nums.append(num ** 3)

# cubed_nums = [num ** 3 for num in num_list]


# print(cubed_nums)
print(even_numbers)