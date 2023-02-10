// count number of divisor in current num
// count number of divisor of each number less
// check if any number has the number of divisor greater than or equal
// the divisor of N

let divisorCount = function(num) { // counts divisors of the input
    let countDivisor = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            countDivisor++;
        }
    }
    return countDivisor;
};


//see if any numbers below num can be divided more than num
let isAntiPrime = function(num) {
    let numDivisorCount = divisorCount(num); // the num divisor count
    let iDivisorCount = 0;                   // the divisor count of "test" integers below num

    for (let i = 1; i < num; i++) {
        iDivisorCount += divisorCount(i);  // add count of "test interger" interger to count
        if (numDivisorCount > iDivisorCount) { // if num still has highest divisor
            iDivisorCount = 0; // let the count reset and try next "test integer"
        } else {return false} // if "test integer" is acutally higher, end the function with false
    }
    return true; // none of the test interger has more divisor than num, and there for "true" // num is the most devided above all numbers below
};


console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false
