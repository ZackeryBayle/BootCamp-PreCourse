import math

sale_price = [100, 83, 220, 40, 100, 400, 10, 1, 3]
sorted_list = sorted(sale_price)
number_of_sales = len(sorted_list)
half_slice = math.floor(number_of_sales/2)

first_sale_items = sorted_list[:half_slice]
last_sale_items = sorted_list[-(half_slice):]
median = sorted_list[half_slice:(half_slice + 1)]
print(median)