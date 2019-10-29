import numpy as np
def weighted_lottery(weights):
    container_list = []

    for (name, weight) in weights.items():
        for _ in range(weight):
            container_list.append(name)
    return np.random.choice(container_list)

other_weights = {
    'winning': 1,
    'break_even': 2,
    'loosing': 4
}

print (weighted_lottery(other_weights))