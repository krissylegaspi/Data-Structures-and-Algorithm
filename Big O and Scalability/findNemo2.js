// O(n) - Linear Time

// const { performance } = require('perf_hooks');

// const nemo = ['nemo']; // O(1)
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']; // O(10)
// const large = new Array(10000).fill('nemo') // O(10000)

// function findNemo(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'nemo') {
//             console.log('Found NEMO!');
//         }
//     }
// }

// findNemo(large); 

// O(1) - Constant Time

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes) // O(2)