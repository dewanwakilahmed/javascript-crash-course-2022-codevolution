// LOG A STATEMENT USING console.log()
console.log("Hello from main.js");

// VARIABLES
let age = 25;
console.log(age);

const salary = 80000; // initialization is required
// salary = 50000; // can not be reassigned
console.log(salary);

let number; // initialization is not required
number = 90; // can be reassigned
console.log(number);

// DATA TYPES
// - Primitive Types
//   - String Type
//   - Number Type
//   - Boolean Type
//   - Undefined Type
//   - Null Type
//   - BigInt Type
//   - Symbol Type
// - Non-Primitive Types
//   - Object Type
//   - Array Type

// String Data Type
const name = "Vishwas"; // within single quotes possible
const language = "JavaScript";
const channel = `Code Evolution`;

// Number Data Type
const total = 0;
const PI = 3.14;

// Boolean Data Type
const isPrimaryNumber = true;
const isNewUser = false;

// Undefined Data Type - value not assigned when a variable is declared
let result;
console.log(result);

const res = undefined;
console.log(res);

// Null Data Type - empty or unknown value
const data = null;

// BigInt Data Type - larger integer values
// Symbol Data Type - unique & unchangeable values

// Object Data Type - collection of values (complex data tsype) - key can only be string or symbol data type & values can be of any data type
const person = {
  firstName: "Bruce",
  lastName: "Wayne",
  age: 30,
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// Array Data Type
const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers[0]);

// JS is a Dynamically Typed Language
let a = 10;
a = "Vishwas";
a = true;

// OPERATORS
// - Assignent Operator
// - Arithmatic Operator
// - Comparision Operator
// - Logical Operator
// - String Operator
// - Other Operator

// Assignment Operator
let x = 10;
let y = 5;

// Arithmatic Operator
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

console.log(++x);
console.log(--y);

// Comparision Operator
console.log(x == y); // compares the values
console.log(x != y);

console.log(x === y); // compares both the values and the data types
console.log(x !== y);

console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// Logical Operator
const isValidNumber = x > 20 && 8 > y;
console.log(isValidNumber);

const isValidNumber2 = x > 8 || 8 > y;
console.log(isValidNumber2);

const isValid = true;
console.log(!isValid);

// String Operator
console.log("Bruce " + "Wayne");

// Ternary Operator
const isEven = 10 % 2 === 0 ? "No Remainder" : "Leaves Remainder";
console.log(isEven);

// TYPE CONVERSIONS

// - Implicit Conversion
console.log(2 + "3");
console.log(true + "3");
console.log("4" - "2");
console.log("Bruce" - "Wayne");
console.log("5" - true);
console.log("5" - false);
console.log("5" - null);
console.log("5" + undefined);

// - Explicit Conversion
console.log(Number("5"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(""));

console.log(parseInt("5"));
console.log(parseFloat("3.14"));
console.log(String(500));
console.log(String(true));
console.log(String(undefined));
console.log((500).toString());
console.log(Boolean(10));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(NaN));

// EQUALITY
const var1 = "test";
const var2 = "test";

console.log(var1 == var2);
console.log(var1 === var2);

const var3 = 10;
const var4 = "10";

console.log(var3 == var4);
console.log(var3 === var4);

const var5 = 0;
const var6 = "";

console.log(var5 == var6);
console.log(var5 === var6);

const var7 = null;
const var8 = undefined;

console.log(var7 == var8);
console.log(var7 === var8);

// CONDITIONAL STATEMENTS
const num = 0;

if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

const color = 10;

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "green":
    console.log("Color is green");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  default:
    console.log("Not a valid color");
}

// LOOPING CODE
// - For Loop
// - While Loop
// - Do While Loop
// - For Of Loop

// For Loop
for (let i = 1; i <= 5; i++) {
  console.log("Iteration number " + i);
}

// While Loop
let j = 1;
while (j <= 5) {
  console.log("Iteration number " + j);
  j++;
}

// Do While Loop - runs at least once
let k = 6;
do {
  console.log("Iteration number " + k);
  k++;
} while (k <= 5);

// For Of Loop - loop through a collection of data like an array
const numArray = [1, 2, 3, 4, 5];

for (const num of numArray) {
  console.log("Iteration number " + num);
}

// FUNCTIONS
function greet() {
  console.log("Good morning Vishwas");
}

greet();
greet();

function greetWithName(username) {
  console.log("Good morning " + username);
}

greetWithName("Bruce");
greetWithName("Clark");
greetWithName("Diana");

function add(a, b) {
  return a + b;
}

const sum = add(5, 10);
console.log(sum);

const arrowSum = (a, b) => {
  return a + b;
};

// const arrowSum = (a, b) => a + b; // if function logic is only one line of code

const sum2 = arrowSum(5, 10);
console.log(sum2);

// SCOPE
// - Block Scope
// - Function Scope
// - Global Scope

const myNum = 100;
const myName = "Superman"; // won't overwrite block or function scoped variables

if (true) {
  const myName = "Vishwas";
  console.log(myName);
  console.log(myNum);
}
// console.log(myName); // can't access

function testFn() {
  const myName = "Batman";
  console.log(myName);
  console.log(myNum);
}
// console.log(myName); // can't access

testFn();
