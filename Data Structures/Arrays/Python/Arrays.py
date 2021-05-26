print("Hello world from PyCharm and Python!")

# One dimensional array
array = [10, 3.0, 77, 5]

# Print out all items
print(array)

# To print out first, second, or third item... use indexes
# Random indexing
# Indexes start with 0
print(array[0])
print(array[1])
print(array[2])
print(array[3])

# Fetch all items
print(array[:])
print("Last item: ", array[-1])

# Fetch all items - except the last one
print(array[:-1])

# Linear search O(N)
max = array[0]
for num in array:
    if num > max:
        max = num

print(max)