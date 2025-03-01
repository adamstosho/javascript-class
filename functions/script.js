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

// Default Parameters 

// note that if you do not provide invocation value, it will display the deafult parameter

function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}
greet("Alex"); // Hello, Alex!
greet();       // Hello, Guest!



// --------------------------

// more exmaples on function 
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log(toCelsius(32)); 
console.log(toCelsius(68)); 


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

