


def guessing_game():
    while True:
        print('What is your guess?')
        guess = input()

        if guess == '42':
            print('Correct!')
            return False
        else:
            print(f'{guess} is Incorrect!\n')

guessing_game()