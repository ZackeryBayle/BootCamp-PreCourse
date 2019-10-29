
histogram = {
    'g': {
        'sales': [20]
    },
    'f': {
        'sales': [47]
    },
    't': {
        'sales': [12]
    },
    'o': {
        'sales': [18]
    },
}




for k, v in histogram.items():

    # print(k + ' ')
    print(k + ' ' + histogram[k].get('sales')[0] * '▬')