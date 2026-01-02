// Task 1

const classA = ["An", "Binh", "Chi"]
const classB = classA
console.log(classB)
classB[0] = "An Updated"
console.log(classA)
// For example, if the address of classA is currently 0x01, then when you set 'const classB = classA', classB will copy the address at 0x01.
// -> When modify 'classB[0] = "An Updated"', also modifying the data at address 0x01, so classA is also changed.


// Task 2
let x = "10"
let y = 2
console.log(x + y)       // Result 1
console.log(x - y)       // Result 2
console.log(x * "3")     // Result 3
console.log("Hello" - y) // Result 4

// 1.
// Result 1: Because a string cannot be added directly to a number, the toString() method implicitly coerces the number into a string, and then performs string concatenation, resulting in the expression evaluating to 'x + y = "10" + "2" = 102'.
// Result 2: Because when a string is subtracted by a number, it cannot perform string concatenation like with addition, so it is forced to compute the operation as a numeric calculation. Therefore, the string is coerced into a number and the operation is executed as 'x - y = 10 - 2 = 8'.

// 2.
// "Hello" - y = "Hello - 2 = NaN
// Because when performing a subtraction between a string and a number, string concatenation is not possible like with addition, JavaScript is forced to coerce "Hello" into a number; however, since "Hello" cannot be converted into a valid number, the result is NaN.


// Task 3
let age, mathScore, isVip

// Case 1
age = 9
mathScore = 10
isVip = false
let canEnter = ((age >= 10 && mathScore > 7) || isVip)
console.log(canEnter) // => false

// Case 2
age = 9
mathScore = 10
isVip = true
canEnter = (age >= 10 && mathScore > 7) || isVip
console.log(canEnter) // => true

// Logic Question
// Because age < 10 means it is less than 10
// !(age < 10) means it is not less than 10 => age >= 10
// => !(age < 10) <=> age >= 10


// Task 4
const laptop = {
    brand: "Dell",
    price: 1000,
    spec: {ram: "8GB", ssd: "256GB"}
}

const myLaptop = laptop
myLaptop.brand = "Apple"

const mySpec = laptop.spec
mySpec.ram = "16GB"

console.log(laptop.brand)
console.log(laptop.spec.ram)

// myLaptop
// Prediction: brand = "Apple"
// When creating a laptop object at an address (e.g., 0x01), the laptop variable will store the address at 0x01.
// When you assign 'const myLaptop = laptop', myLaptop will copy address 0x01 and point to the same object.
// Therefore, changing 'myLaptop.brand = "Apple"' also changes the brand at 0x01.
// Since laptop also points to 0x01, laptop.brand is also changed.

// mySpec
// Prediction: ram = "16GB"
// Since spec is also a child object in memory at address (e.g., 0x04), laptop.spec will store the address at 0x04.
// When you assign 'const mySpec = laptop.spec', both mySpec and laptop.spec point to the address 0x04.
// Therefore, when you change 'mySpec.ram = "16GB"', the change is also happening at address 0x04, so laptop.spec.ram will also change.




