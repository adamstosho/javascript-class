// Javascript Variables, Data Types and operators

// Variable types: let and const

let a = 3
console.log(a)
a = 25;
console.log(a)

const myNumber = 30; 
console.log(myNumber)


let b = 3;
let c = 4;
let d;

d = c;
c = b;
b = c;


console.log(`b: ${b}, c: ${c}`)
console.log({b, c})

console.log(c);
console.log(b);

 let f = 7; g = 8; h = 10;
console.log(f, g, h)
// Javascript Data Types - Primitive and non-primitive data types
let studentNames = ["Dolapo", "Ridwan", "Mueez", "Feranmi"]; //non-primitive

// primitive data types
let primitive = 10; //primitive
let anotherPrimitive = primitive;
primitive = 30;
console.log({primitive, anotherPrimitive})

// non-primitive
let newStudentsNames = studentNames;
// studentNames = ["Soliu", "Abdullahi"];

// console.log({studentNames, newStudentsNames});

studentNames [0] = "Amodu"
console.log({studentNames, newStudentsNames})


// DATA OPERATORS
// ARITHMETIC
// let a = 10;
// let b = 3;
// console.log(a + b); // Output: 13
// console.log(a - b); // Output: 7
// console.log(a * b); // Output: 30
// console.log(a / b); // Output: 3.3333
// console.log(a % b); // Output: 1
// console.log(a ** b); // Output: 1000

// ASSIGNMENT
let x = 10;
x += 5; // x = x + 5 (x is now 15)
x -= 3; // x = x - 3 (x is now 12)
x *= 2; // x = x * 2 (x is now 24)
x /= 4; // x = x / 4 (x is now 6)
console.log(x); // Output: 6

// COMPARISONS
console.log(5 == "5"); // true (type conversion allowed)
console.log(5 === "5"); // false (strict comparison)
console.log(10 > 5); // true
console.log(3 <= 3); // true
console.log(4 !== 4); // false

// LOGICAL
// let a = true;
// let b = false;
// console.log(a && b); // false
// console.log(a || b); // true
// console.log(!a); // false

// TERNARY 
// let age = 18;
// let message = (age >= 18) ? 'Adult' : 'Minor';
// console.log(message); // 'Adult'


// LOGICAL
const num1 = 18;
const name1 = 0;

const trueValue = num1 && name1 ? "It is truthy value" : "it is false"
console.log(`${trueValue}`)

// comparisons operator 
let num2 = 10;
num2++
let num3 = 20;


let result = num2 || num3 ? "yes" : "no"
console.log(++num2);


// Equality operations examples
//strict equality

console.log(5 === "5")
console.log(5 === 5)
console.log(true === 1)
console.log(null === undefined)
// console.log([1, 2, 3] === [1, 2, 3])
// console.log({} === {})

let obj1 = {name: "lateefa"};
let obj2 = {name: "lateefa"};

console.log( obj1 === obj2)

let array1 = [1, 2]
let array2 = [1, 2]
console.log(array1 === array2)


//loose equality

console.log(5 == "5")
console.log(5 == 5)
console.log(true == 1)
console.log(null == undefined)

let aray1 = [1, 2]
let aray2 = [1, 2]
console.log(aray1 == aray2)

console.log(true == 1)
console.log(false == 0)
console.log("" == 0) 
// note that empty string is automatically converted to zero

console.log([ ] == 0) 
console.log([] == 1)
// the empty array will also be converted to string then zero to match the zero in ==

// console.log([ ] === 0) take note of this too.

console.log([2] == 2)
console.log(null == undefined)
// the both will be converted into special case

console.log({} == 0)

console.log("Redox" == "Latty")

console.log("Redox" == 1)

console.log([1, 2] == "1,2")


