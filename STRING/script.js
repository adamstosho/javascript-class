const mixedStringCase = "Hello, How are you?";
const lowerCaseString = mixedStringCase.toLowerCase();
console.log(lowerCaseString); 
const upperCaseString = mixedStringCase.toUpperCase();
console.log(upperCaseString);

// split() - will separate the words into different arrays
const mixedString = "Hello, How are you?";
const splitString = mixedString.split(" ");
console.log(splitString);

// slice() - will extract a part of a string and return a new string
const extractString = "Hello, How are you?";
const slicedString = extractString.slice(7, 10);
console.log(slicedString);

// replace() - will replace a specified value with another value in a string
const replaceString = "Hello, How are you?";
const newString = replaceString.replace("Hello", "Hi");
console.log(newString);

// charAt() - will return the character at a specified index in a string
const characterString = "Hello, How are you?";
const character = characterString.charAt(7);
console.log(character);

// indexOf() - will return the position of the first occurrence of a specified value in a string
const positionString = "Hello, How are you?";
const position = positionString.indexOf("How");
console.log(position);

// lastIndexOf() - will return the position of the last occurrence of a specified value in a string
const lastPositionString = "Hello, How are you?";
const lastPosition = lastPositionString.lastIndexOf("are");
console.log(lastPosition);

// trim() - will remove whitespace from both ends of a string
const whiteSpaceString = "    Hello, How are you?    ";
const trimmedString = whiteSpaceString.trim();
console.log(trimmedString);

// concat() - will join two or more strings
const firstString = "Hello,";
const secondString = "How are you?";
const joinedString = firstString.concat(" ", secondString);
console.log(joinedString);

// includes() - will check if a string contains a specified value
const checkString = "Hello, How are you?";
const checkValue = checkString.includes("are");
console.log(checkValue);

// startsWith() - will check if a string starts with a specified value
const startString = "Hello, How are you?";
const startValue = startString.startsWith("Hello");
console.log(startValue);

// endsWith() - will check if a string ends with a specified value
const endString = "Hello, How are you?"
const endValue = endString.endsWith("y")
console.log(endValue)

// repeat() - will repeat a string a specified number of times
const repeatString = "Hello, How are you? ";
const repeatedString = repeatString.repeat(3);
console.log(repeatedString);  

// padStart() - will pad a string with another string until it reaches a specified length
const padString = "Hello";
const paddedString = padString.padStart(10, "Hi ");
console.log(paddedString);

// padEnd() - will pad a string with another string until it reaches a specified length
const padEndString = "Hello";
const paddedEndString = padEndString.padEnd(10, " Hi");
console.log(paddedEndString);

// substring() - will extract a part of a string and return a new string, it works like slice as well.
const extractSubString = "Hello, How are you?";
const subString = extractSubString.substring(7, 10); 
console.log(subString); 





// more on string in details 

console.log("welcome to string in details")

// length of a string 
let item = "DLT Africa"
const length = item.length
console.log(length)

// for identifying the character at a specified index
const index = item.charAt(0)
console.log(index)

// for identifying the position of the first occurrence substring 
const firstOccurence = item.indexOf("Africa")
console.log(firstOccurence)

// for extracting part of the string btw 2 index
const extractE1 = item.substring(1, 5) //note that this starts from 0.
console.log(extractE1)

const extractE2 = item.slice(0, 7)
console.log(extractE2)

// for splitting 
const splitting = item.split(" ")
console.log(splitting)

// to uppercase
const upper = item.toUpperCase()
console.log(item)

// to lowercase
const lower = upper.toLowerCase()
console.log(lower)

// for checking the availibility of a particular string or substring 
const checkAvailability = item.includes("Africa")
console.log(checkAvailability)

// for checking if the item starts or ends a particular string or substring
const startsWith = item.startsWith("DLT");
console.log(startsWith)

const endWith = item.endsWith("Nigeria")
console.log(endWith)

const email = "     yourname@gmail.com   "
console.log(email)

// to remove whitspace before and after the string
const trimmedEmail = email.trim()
console.log(trimmedEmail)

// to join

const join = splitting.join(" ")
console.log(join)

// to replace 
const replaceEL =  item.replace("!", "")
console.log(replaceEL)


// VALUES AND REFERENCES In JS

//Primitive (passed by value) - primitive can only take in one value.

let a = 6
let b = 6
console.log(b)
console.log(a)

b = 10
console.log(b)

let firstName = "Oluwaferanmi"
let fullName = firstName
console.log(fullName)

fullName = "Alaba Oluwaferanmi"
console.log(fullName)

//Non-primitive [Passed by Reference]... here, it is not that, the other variable wil be creating another value or cloning but will be referencing 


let firstExample = {age: 12}
let exampleTwo = firstExample
exampleTwo.age = 20
console.log(firstExample)
console.log(exampleTwo) 

// SPREAD OPERATION
// Shallow cloning/copy

const arr = [1, 2, 10, 405]
const arrClone = [...arr] //for cloning an array []
console.log(arrClone)
arrClone.push(4)
console.log(arr)
console.log(arrClone)

// using spread to merge 2 or more  arrays together 

// for array 
let arr1 = [1, 2]
let arr2 = [3, 4]

const merged = [... arr1, ...arr2]
console.log(merged)

// for object 
let obj1 = {name: "Redox", gender: "male", height: "6 feets"}
let obj2 = {hobbies: "researching", country: "nigeria", weight: "70kg"}
const newMerge = {...obj1, ...obj2}
console.log(newMerge)

// for function 
function sum(a,b,c){
  return a+b+c;
}
const values = [12, 12, 12];
const result = sum(...values)
console.log(result)


const numbers = [1, 2, 3];
function add(a, b, c) {
  return a + b + c;
}
const addy = add(...numbers);

// for copying objects 
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };




// note that, before you spread, what you are spreading must be defined

    
// Destructuring 

let person = {name: "Alhaji Agba", age: 25, status: "Dead"}
const {name, age} = person;
console.log(name)

let fruit = ["Apple", "Banana", "Cherry", "Date", "Egg-plant"];
const [aa, bb, cc, dd] = fruit;
console.log(aa)


