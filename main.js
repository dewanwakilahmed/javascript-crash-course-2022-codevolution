// // Log a statement using console.log()
// console.log("Hello from main.js");

// // Variables

// let age = 25;
// console.log(age);

// const salary = 80000; // Initialization is required
// // salary = 50000; // Can not be reassigned
// console.log(salary);

// let sum; // Initialization is not required
// sum = 90;

// console.log(sum);

// Data Types
// - Primitive
//   - String
//   - Number
//   - Boolean
//   - Undefined
//   - Null
//   - BigInt
//   - Symbol
// - Non-Primitive
//   - Object
//   - Array

// // String
// const name = "Vishwas"; // Within Single-Quotes
// const language = "JavaScript";
// const channel = `Code Evolution`;

// // Number
// const total = 0;
// const PI = 3.14;

// // Boolean
// const isPrimaryNumber = true;
// const isNewUser = false;

// // Undefined - Value not Assigned when a Variable is Declared
// let result;
// console.log(result);

// const res = undefined;
// console.log(res);

// // Null - Empty or Unknown Value
// const data = null;

// // BigInt - Larger Integer Values
// // Symbol - Unique & Unchangeable

// // Object - Collection of Values (Complex Data Type) - Key can only be String or Symbol Data Type & Values can be of any Data Type
// const person = {
//   firstName: "Bruce",
//   lastName: "Wayne",
//   age: 30,
// };

// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// // Array
// const oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers[0]);

// // JS is a Dynamically Typed Language
// let a = 10;
// a = "Vishwas";
// a = true;

// Operators
//   - Assignent
//   - Arithmatic
//   - Comparision
//   - Logical
//   - String
//   - Other

// Assignment
let x = 10;
let y = 5;

// Arithmatic
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

console.log(++x);
console.log(--y);

// Comparision
console.log(x == y); // Compares the Values
console.log(x != y);

console.log(x === y); // Compares both the Values and the Data Types
console.log(x !== y);

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// Logical
const isValidNumber = x > 20 && 8 > y;
console.log(isValidNumber);

const isValidNumber2 = x > 8 || 8 > y;
console.log(isValidNumber2);

const isValid = true;
console.log(!isValid);

// String
console.log("Bruce " + "Wayne");

// Ternary
const isEven = 10 % 2 === 0 ? "No Remainder" : "Leaves Remainder";
console.log(isEven);
