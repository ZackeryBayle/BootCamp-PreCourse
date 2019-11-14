import numpy as np

def greeting(first,last):
    return f'Hi {first} {last}'


def reshape_range():
    num_range = np.arange(16)
    reshape_range = num_range.reshape(4,4)
    print(reshape_range)