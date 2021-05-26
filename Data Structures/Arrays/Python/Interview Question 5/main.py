# Interview Question 5
# Duplicates in an array problem overview

# The problem is that we want to find duplicates in a one-dimensional array of integers in O(N) running time where the integer values are smaller than the length of the array

# For example, if we have a list [1, 2, 3, 1, 5] then the algorithm can detect that there are duplicate with value 1.

# Note: the array can not contain items smaller than 0 and items with values greater than the size of the list. This is how we can achieve O(N) linear running time complexity

def find_duplicates(nums):

    # O(N) linear running time where N = len(nums)
    for num in nums:
        if nums[abs(num)] >= 0:
            nums[abs(num)] = -nums[abs(num)]
        else:
            print('Repetition found: %s' % str(abs(num)))

if __name__ == '__main__':

    # This method cannot handle values smaller than 0
    # The maximum item is smaller than the size of the list
    n = [2, 6, 5, 1, 4, 3, 2]
    find_duplicates(n)