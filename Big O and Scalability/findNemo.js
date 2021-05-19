const { performance } = require('perf_hooks');

// O(n) - Linear Time

const { performance } = require('perf_hooks');

const nemo = ['nemo']; // O(1)
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']; // O(10)
const large = new Array(100).fill('nemo') // O(100)

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break;
        }
    }
}

findNemo(large); // O(n)