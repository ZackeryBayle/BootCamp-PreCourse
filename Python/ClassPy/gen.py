class Inflineup:
    def __init__(self, players):
        self.players = players

    def lineup(self):
        lineup_max = len(self.players)
        idx = 0

        while True:
            if idx < lineup_max:
                yield self.players[idx]
            else:
                idx = 0
                yield self.players[idx]
            idx += 1

    def __repr__(self):
        return f'<Inflineup({self.players})'
    def __str__(self):
        return f'Players Loop {self.players}'



astros = [
    'Bregman',
    'Altuve',
    'Correa',
    'Reddick',
    'Gonzalaz'
]


full_lineup = Inflineup(astros)
astros_lineup = full_lineup.lineup()

print(next(astros_lineup))
print(next(astros_lineup))
print(next(astros_lineup))



# print(repr(astros_lineup))
# print(str(astros_lineup))


