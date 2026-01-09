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
function isPerfectSquare(a) {
    if (a < 0) return false;
    const b = a ** 0.5;
    return Number.isInteger(b);
}
console.log(isPerfectSquare(6));
console.log(isPerfectSquare(9));


