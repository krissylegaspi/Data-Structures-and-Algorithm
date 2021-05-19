// Rule Book:
// 1. Worst case
// 2. Remove Constants
// 3. Different terms for inputs
// 4. Drop Non Dominants

// Rule 1. Worst Case



function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break; // Adding the break
            // In hopes that what is being searched is not at the end
        }
    }
}

// Rule 2. Remove Constants

// In O of n, what matters is not how steep the line is, it's about how the line moves based on the inputs

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}

// O(1 + n/2 + 100)
// O(n/2 + 101) Only matters when n scales
// O(n/2 + 1) Decreasing significant effect, drop constant
// O(n + 1) If n was a million, 1 is insignificant
// O(n)

// 3. Different terms for inputs

function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}

// Only boxes as parameter
// O(2n)
// O(n)

// Added second parameter
// O(a + b)

// 4. Drop non-dominants

function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
        console.log(number);
    });
    
    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
        numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
        });
    });
    }

printAllNumbersThenAllPairSums([1,2,3,4,5])

// O(n + n^2) Drop the n, non-dominant
// O(n^2)