// Lesson 1
function isPrime(n) {
    if (typeof n !== "number" || isNaN(n)) return false;
    if (n % 1 !== 0) return false;
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime('QuangVu'))
console.log(isPrime(9))
console.log(isPrime(19))

// Lesson 2
function isPerfectNumber(n) {
    if (typeof n !== "number" || isNaN(n)) return false;
    if (n % 1 !== 0) return false;
    if (n <= 0) return false;

    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }

    return sum === n;
}
console.log(isPerfectNumber('QuangVu'))
console.log(isPerfectNumber(6))
console.log(isPerfectNumber(19))


