// count number of divisor in current num
// count number of divisor of each number less
// check if any number has the number of divisor greater than or equal
// the divisor of N

let divisorCount = function(num) {
    let countDivisor = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            countDivisor++;
        }
    }
    return countDivisor;
};



let isAntiPrime = function(num) {
    let numDivisorCount = divisorCount(num);
    let iDivisorCount = 0;

    for (let i = 1; i < num; i++) {
        iDivisorCount += divisorCount(i);
        if (numDivisorCount > iDivisorCount) {
            iDivisorCount = 0;
        } else {return false}
    }
    return true;
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
