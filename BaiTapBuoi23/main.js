// Task 1.
const classifyTriangle = (a, b, c) => {
    if (a + b > c && a + c > b && b + c > a) {

        if (a === b && b === c) {
            return "Equilateral Triangle"
        }
        if (
            a * a === b * b + c * c ||
            b * b === a * a + c * c ||
            c * c === a * a + b * b
        ) {
            return "Right Triangle"
        }
        if (a === b || b === c || a === c) {
            return "Isosceles Triangle"
        }
        return "Triangle"
    }
    return "Not a triangle"
}
let checkTriangle = classifyTriangle(1, 2, 3)
console.log(checkTriangle)

// Task 2.
const isPerfectSquare = (n) => {
    if (!Number.isInteger(n) || n < 0) {
        return "Invalid number"
    }
    for (let i = 0; i * i <= n; i++) {
        if (i * i === n) {
            return `${n} is a perfect square`
        }
    }
    return `${n} is not a perfect square`
}
console.log(isPerfectSquare(9))
console.log(isPerfectSquare(-12))
console.log(isPerfectSquare(11))

