from decimal import Decimal
from functools import reduce

def mathTypes():
    print('Addition')
    print('100 + 42')
    print(100 + 42)
    print('---')

    print('Subtraction')
    print('100 - 42')
    print(100 - 42)
    print('---')

    print('Division')
    print('100 / 42')
    print(100 / 42)
    print('---')

    print('Floor Division')
    print('100 // 42')
    print(100 // 42)
    print('---')

    print('Multiplication')
    print('100 * 42')
    print(100 * 42)
    print('---')

    print('Modulus')
    print('100 % 42')
    print(100 % 42)
    print('---')

    print('Exponets')
    print('10 ** 42')
    print(10 ** 2)
    print('---')

def manual_exponent_demo(n, e):
    counter = e -1
    total = n

    while counter > 0:
        total *= n
        counter -= 1
    return total
print(manual_exponent_demo(2, 3))

def comput_exponent_demo(n, e):
    compute_list = [n] * e
    return (reduce(lambda total, element: total * element, compute_list))



print(comput_exponent_demo(5 , 2))