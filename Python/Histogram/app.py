
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


#google_sales = histogram['g'].get('sales').get('total')

histogram_company = list(histogram)
histogram_sales = histogram['g'].get('sales')[0]


for i in histogram:
    # print(histogram_company[0])
    print(histogram_company[0] + ' ' + histogram[i].get('sales')[0] * '$')



# print(histogram_sales)
# print(histogram_company)
# print(4 * 'w')
