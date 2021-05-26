# Interview Question 1
# Reversing an array in-place overview

# The problem is that we want to reverse a T[] array in O(N) linear time complexity and we want the algorithm to be in-place as well - so no additional memory can be used!
# For example, input is [1, 2, 3, 4, 5] then the output is [5, 4, 3, 2, 1]

def reverse(nums):

    start_index = 0  # Pointing to the first item
    end_index = len(nums)-1  # Pointing to the last item

    while end_index > start_index:
        nums[start_index], nums[end_index] = nums[end_index], nums[start_index]  # Keep swapping the items
        start_index += 1   # Increment start_index by 1
        end_index -= 1  # Decrement end_index by 1

if __name__ == '__main__':
    n = [1, 2, 3, 4]
    reverse(n)
    print(n)