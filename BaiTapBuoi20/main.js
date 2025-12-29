// Part 1: Declaring variables & console.log

// 1.
const name = "Luu Tran Quang Vu"
let age = 19
let isStudent = true

console.log("Name:", name)
console.log("Age:", age)
console.log("isStudent:", isStudent)

// 2.
let a = 5
let b = 10
a = 12
b = 11
console.log("a =", a, "b =", b)

// Part 2: const / let / var

// 1.
// Differences between const and let:
// let allows reassignment of values
// let does not require an initial value
// const does not allow reassignment of values
// const requires an initial value
// let does not require an initial value
// Use "const" when:
// We should use "const" when we want to assign a fixed value that doesn't change throughout the program.

// 2.
// const x = 10
// x = 20
// Wrong because "const" can only be assigned a fixed value and cannot be changed.

// Part 3: Data type

// 1.
// 100 - number
// 100 - number
// TRUE - boolean
// [1, 2, 3] - object
// { name: "An", age: 20 } - object
// null - object
// undefined - undefined

// 2.
let student = {name: "Luu Tran Quang Vu", age: 20, scores: [8, 9, 10]}
console.log(student)

// Part 4: Type casting
let v = "1"
console.log(v)
v = Number(v)
console.log(v)
console.log(typeof v)

let u = 2
console.log(u)
u = String(u)
console.log(u)
console.log(typeof u)

let x = true
console.log(typeof x)
x = String(x)
console.log(typeof x)

// Part 5: Truthy/Falsy
// Boolean(0) - false
// Boolean(1) - true
// Boolean("") - false
// Boolean("hello") - true
// Boolean(null) - false
// Boolean([]) - true

// Part 6: Array

// 1.
const numbers = [4, 3, 1, 5, 1];
console.log("First Element:",numbers[0])
console.log("Last Element:",numbers[4])

// 2.
// The `numbers` variable (array/object) doesn't directly store data; it only stores the memory address where that data is located.
// Therefore, when assign `const a = numbers`, `a` doesn't create new data, but instead receives the same memory address as `numbers`.
