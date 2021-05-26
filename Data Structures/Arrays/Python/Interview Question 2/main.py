# Interview question 2
# Palindrome problem overview

# "A palindrome is a string that reads the same forward and background"

# For example: radar or madam

# Our task is to design an optimal algorithm for checking whether a given string is palindrome or not!

def is_palindrome(string):  # It has O(s) so basically linear running time complexity as far as the number of letters in the string is concerned

    original_string = string;  # O(N) - see def reverse
    reversed_string = reverse(string)

    if original_string == reversed_string:
        return True

    return False

# O(N) linear running time where N is the number of letters in string N=len(string)
def reverse(data):

    data = list(data)  # String into a list of characters

    start_index = 0
    end_index = len(data)-1

    while end_index > start_index:
        data[start_index], data[end_index] = data[end_index], data[start_index]
        start_index += 1
        end_index -= 1

    return ''.join(data)  # Transform list of letters into a string

# def palindrome_python(string):
#
#     if string == string[::-1]:  # String slicing, start at the end of the string and consider in reverse order
#         return True
#
#     return False

if __name__ == '__main__':
    # print(palindrome_python('madam'))
    print(is_palindrome('madam'))