# Interview Question 3
# Integer reversion problem overview

# Our task is to design an efficient algorithm to reverse a given integer
# For example, if the input of the algorithm is 1234 then the output should be 4321

def reverse_integer(n):

    reversed_integer = 0
    remainder = 0

    while n > 0:
        remainder = n % 10
        reversed_integer = reversed_integer * 10 + remainder
        n = n // 10  # Integer division

    return reversed_integer

if __name__ == '__main__':
    print(reverse_integer(1234))