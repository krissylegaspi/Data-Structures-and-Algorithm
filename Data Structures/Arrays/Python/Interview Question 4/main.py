# Interview Question 4
# Anagram problem overview

# Construct an algorithm to check whether two words (or phrases) are anagrams or not
# "An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the origin letters exactly once"
# For example: restful and fluster

def is_anagram(str1, str2):

    # If the length of the strings differ - they are not anagrams
    if len(str1) != len(str2):
        return False

    # Sort the letters of the strings
    # Compare the letters with the same indexes
    # Bottleneck because O(NlogN)
    str1 = sorted(str1)
    str2 = sorted(str2)

    print(str1)
    print(str2)

    # Check letters with same indexes
    for i in range(len(str1)):
        if str1[i] != str2[i]:
            return False

    # Overall running time is O(NlogN) + O(N) = O(NlogN)

    return True

if __name__ == '__main__':

    s1 = ['f', 'l', 'u', 's', 't', 'e', 'r']
    s2 = ['r', 'e', 's', 't', 'f', 'u', 'l']

    print(is_anagram(s1, s2))