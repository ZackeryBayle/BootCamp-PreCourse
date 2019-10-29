teams = [
    {
        'astros': {
            '2b': 'Altuve',
            'ss': 'Correa',
            '3b': 'Bregman'
        }
    },
    {
        'angels': {
            'of': 'Trout',
            'dh': 'Pujols',
        } 
    }
]

# print(teams[0])

angels = teams[1].get('angels', 'Team not found')

print(list(angels.values())[1])