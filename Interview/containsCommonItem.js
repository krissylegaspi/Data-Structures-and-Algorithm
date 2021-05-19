// Given 2 arrays, create a funciton that lets a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// Should return false
// -------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// Should return true

// Solve

// 1. When the interviewer says the question, write down the key points at the top (i.e. sorted array). Make sure you have all the details. Show how organized you are.
// 2 parameters
// return true or false

// 2. Make sure you double check: What are the inputs? What are the outputs?
// 2 parameters - arrays
// return true or false

// 3. What is the most important value of the problem? Do you have time, and space and memory, etc.. What is the main goal?
// How large is the array going to get? If 5 is max, then no need to worry about Big O or complexity
// Is the goal to be as efficient as possible with function? What is more important? Time complexity or space compexity?
// Arrays with no size limit

// 5. Start with the naive/brute force approach. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).
// No need to write this code
// Not the most efficient but easiest one that comes to mind
// Nested loop -> O(n^2)

// 6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
// O(n^2) is not efficient

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
        for (let j = 0; i < array2.length; j++) {
            if (array1[i] === array2[j]) {
                return true;
            }
        }
    }
    return false;
}

// O(a*b) since the arrays are different lengths - Time Complexity
// O(n^2) if arrays are same length

// O(1) - Space Complexity

containsCommonItem(array1, array2);

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// 7. Walk through your approach, comment things and see where you may be able to break things. Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.

// array1 ==> obj {
//     a: true,
//     b: true,
//     c: true,
//     x: true;
// }

// array2[idex] === obj.properties

// 8. Before you start coding, walk through your code and write down the steps you are going to follow.

function containsCommonItem2(array1, array2) {
    // 1. Loop through first array and create object where properties === items in the array
    // 2. Loop through second array and check if item in second array exists on created object

    // 10 - Can we always assume 2 params?
    // 1.
    let map = {};
    for (let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }

    // 2.
    for (let j = 0; j < array2.length; j++) {
        if (map[array2[j]]) {
            return true;
        }
    }

    return false;

}

// O(a + b) Time Complexity
// O(a) Space Complexity

// containsCommonItem2(array1, array2);

function containsCommonItem3(array1, array2) {
    return array1.some(item => array2.includes(item))
}

containsCommonItem3(array1, array2)