// Function Declaration 

function myName (){
  return "Hello World!"
}

// Function with Expressions
const myLife = function() {
  return "Hello World!"
}


// Arrow Function
const myBabe =  () => {
  return "Hello World!"
}
// -------------------------
function add (a, b){
  return a + b;
}
console.log(add(1,2));
// or

function add (a, b){
  console.log(a + b);
}
add(1, 2);
add(3, 10)


// ----------------------------------



// NO RETURN FUNCTION DISPLAY WHAT IS IN console.log

function noReturn() {
  console.log("Hi");
}
let value = noReturn(); // Hi
console.log(value);     // undefined (no return value)

// converting temperature 
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log(toCelsius(32)); // 0
console.log(toCelsius(68)); // 20


// --------------------------


// functions used in summing an array 

let nums = [1, 2, 3, 4];

function sumArray(numbers) {
  let total = 0;
  for (let num of numbers) {
      total += num;
  }
  return total;
}

console.log(sumArray(nums)); 

// ----------------------------
function jamb(age){
  if (age > 30){
    return "You are too old to register"
  } else if (age < 30 && age > 18){
    return "You are qualified"
  } else {
    return "Too young to register"
  }
}
console.log(jamb(12))


// user login 
function checkLogin(user) {
  if (user.isLoggedIn) {
      return "Welcome, " + user.name + "!";
  } else {
      return "Please log in.";
  }
}
let user = { name: "Bella", isLoggedIn: true };
console.log(checkLogin(user)); // Welcome, Bella!

// Functions can take other functions as arguments:

function repeat(action, times) {
  for (let i = 0; i < times; i++) {
      action();
  }
}
function sayHi() {
  console.log("Hi!");
}
repeat(sayHi, 3);
// Hi!
// Hi!
// Hi!


// illustration of argument functions
function greet(name, time) {
  console.log(`Good ${time}, ${name}!`);
}
greet("Alex", "morning"); // Good morning, Alex!
greet("Bella", "evening"); // Good evening, Bella!

// skipping argument
function sayHi(name) {
  console.log("Hi, " + name + "!");
}
sayHi("Charlie"); // Hi, Charlie!
sayHi();          // Hi, undefined!

// Default Parameters 

// note that if you do not provide invocation value, it will display the defult parameter

function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greet("Alex"); // Hello, Alex!
greet();       // Hello, Guest!


// example of object argument (built in arguments)

function showArgs() {
  console.log(arguments);
}
showArgs(1, "hello", true);
// Arguments(3) [1, "hello", true, ...]

function addAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
  }
  return total;
}
console.log(addAll(1, 2, 3, 4)); // 10



// hoisting
// var
// function declaration


function day(weather){
  switch (weather){
    case "Monday": 
    return "It is a bright day";
    case "Tuesday": 
    return "It is a sunny day"
    case "Wednesday": 
    return "It is a rainy day"
    default:
    return "It is none"
  }
}
console.log(day("Tuesday"))

// or

let dayss = "Tuesday"
function days(forecast){
  switch (forecast){
  case "Sunday":
    return "It is a normal day"
    break;
  case "Monday": 
  return "It is a rainy day"
  break;
  case "Tuesday":
    return "It is a sunny day"
    break;
  default:
    return "Invalid"
  }
}
console.log(days(dayss))



// ---------------------------

const checknumber = (num) => {
  if (num > 0) {
    return "positive"
  } else if (num < 0){
    return "negative"
  }else {
    return "zero"
  }
}
console.log(checknumber(0));
console.log(checknumber(4));
console.log(checknumber(-4));

// -------------------------------
const isEven = (num) => num % 2 === 0 ? "even" : "odd"
console.log(isEven(4))


// ---------------------------------
const login = (username, password, isAdmin) => {

  if (!username || !password) return "please fill the required fields";
  
  if (isAdmin) return "admin login successful";
  
  return username === "user" && password === "pass123" ? "user login successful": "invalid credentials";

}
console.log(login("user", "pass123", false))

// Question - write a function that handles registration 

const registration = (username, password, country, state, email) => {
  if (!username || !password) return "please fill the required fields"
  if (password.length < 6) return "minimum of 6 characters";
  return username === "ridwan" && password === "123456" ? "User already exist": `${username} successfully registered` 
}
console.log(registration("ridwan", "123d56", "nigeria", "kwara", "email"))

// SCOPE 

// GLOBAL SCOPE

let globalVar = "I am global"

function showVar(){
  console.log(globalVar)
}
showVar()


// LOCAL SCOPE

function revealVar(){
  let localVar = "I am local"
  console.log(localVar)
}
revealVar()


// lexical scope
function outterFunc(){
  let outerVar = "I am an outer";
  
  function innerFunc(){
    
    function innerMost(){
      console.log(outerVar)
    }
    innerMost()
  }
  innerFunc()
}
outterFunc()

// note: the local scope serving as the global for the rest of the nested functions can also be turned to global scope. Hence, it will still serve the same function.



// Exercise

function outer(name) {
      
      function inner() {
      console.log(`Hello ${name}`); 
    }
    inner()
}
outer("Adam")


// BLOCK SCOPE

console.log(`Ridwan \n Adam` )
let data = null;
console.log(data)

let ab = Symbol("id");
console.log(ab); // Symbol(id)

