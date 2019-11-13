
# 
#  FizzBuzz Manual Print and range
# 
def fizzbuzz(start_range, end_range):


    for x in range(start_range, end_range + 1):
        if x % 3 == 0 and x % 5 == 0:
            print('FizzBuzz')
        elif x % 3 == 0:
            print('Fizz')
        elif x % 5 == 0:
            print('Buzz')
        else:
            print(x)
fizzbuzz(1,100)


# 
# fizzbuzz user input
# 
def fizzbuzz_manual(**kwargs):
    start_range = int(input('Enter Start Range:'))
    end_range = int(input('Enter Ending Range:'))

    for x in range(start_range, end_range + 1):
        if x % 3 == 0 and x % 5 == 0:
            print('FizzBuzz')
        elif x % 3 == 0:
            print('Fizz')
        elif x % 5 == 0:
            print('Buzz')
        else:
            print(x)

fizzbuzz_manual()