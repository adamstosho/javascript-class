console.log("hello world!");

// Control Flows --> determines how programmes are executed based on conditions and iteration.

// conditionals --> if, else-if, else, ternary operator

if ("condition") {
  // code to execute if condition is met
}

let age = 30;
if (age === 25) {
  console.log("Age is greater than 25")
} else if (age < 25) {
  console.log("Age is lesser than 25")
} else{
  console.log("Age is 30")
}


let isLoggedInn = true;
let userRole = "admin";

if (!isLoggedInn) {
    console.log("Please log in to continue.");
} else if (userRole === "admin") {
    console.log("Welcome, Admin! Access granted to dashboard.");
} else if (userRole === "member") {
    console.log("Welcome, Member! Enjoy your content.");
} else {
    console.log("Welcome, Guest! Limited access granted.");
}




// let isLoggedIn = true;

// if (!isLoggedIn) {
//   console.log("You are not logged in")
// }
// else{
//   console.log("You are logged in...")
// }

let balance = 500;
let withdrawalAmount = 1000;

if (withdrawalAmount > balance) {
  console.log("Insufficient amount")
} else if (withdrawalAmount == balance){
  console.log("Alajetan nio")
} else {
  console.log("Successful..Owo ti tan")
}
// else if (withdrawalAmount < balance){
//   console.log("Withdrawing")
// }

let votingAge = 18

if (votingAge >= 18){
  console.log("You are eligible to vote")
}else{
  console.log("you are not eligible, wait till your time")
}

let purchaseAmount = 100;
let discount;

if(purchaseAmount >= 250){
  discount = 10
}else if(purchaseAmount >=250){
  discount = 5
}else if (purchaseAmount = 100){
  discount = 1.5
}else{
  discount = 0
}
// console.log(discount)
console.log(`You  got a discount of ${discount}`)

// Ternary Operator
// condition ? expression_if_true : expression_if_false

let newAge = 18;
let message = age >= 18 ? "You are an adult!" : "You are a minor"
console.log(message); 

let threshold = 40;
threshold >= 40 ? console.log ("Marry") : console.log ("You are still a minor");


const number = 9;
const result = number % 2 === 0 ? "even" : "odd"
console.log(result);

let temperature = 37;
const statusTemp = temperature > 37 ? "Hot weather 🥵" : "Cold weather❄️"
console.log(statusTemp);

let temperatures = 25;
console.log(temperatures > 20 ? "It’s warm!" : "It’s cool."); // "It’s warm!"

// Ternary with expression
let price = 100;
let discount2 = true;
let finalPrice = discount2 ? price * 0.9 : price; // 10% off if discount applies
console.log(finalPrice); // 90



// Greeting
let isLoggedIn = true;
let name = "Alex";
let time = 14; // 2 PM

// Ternary (good for this)
// let light = isDarkMode ? "off" : "on";

// if-else (better for this)
// let isDarkMode = true;
// if (isDarkMode) {
//     console.log("Turning off lights...");
//     console.log("Activating night mode...");
// } else {
//     console.log("Turning on lights...");
//     console.log("Activating day mode...");
// }

let greeting = isLoggedIn 
    ? time < 12 
        ? `Good morning, ${name}!` 
        : `Good afternoon, ${name}!` 
    : "Please log in.";
console.log(greeting); // "Good afternoon, Alex!"


// Switch statement --> used when there are multiple possible value for a variable.

// example 1
let day = "Tuesday"

switch (day){
  case "Monday":
    console.log("Today is bright!");
    break;
  case "Friday": 
    console.log("Jimoh Oloyin")
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default: 
  console.log("It is a normal day!")
}

// example 2
let loginStatus = "logged_in";

switch (loginStatus) {
    case "logged_in":
        console.log("Welcome back!");
        break;
    case "logged_out":
        console.log("Please log in.");
        break;
    case "pending":
        console.log("Account approval in progress.");
        break;
    default:
        console.log("Unknown status—contact support.");
}

// using switch with numbers
let score = 85;

switch (true) {
    case score >= 90:
        console.log("A");
        break;
    case score >= 80:
        console.log("B");
        break;
    case score >= 70:
        console.log("C");
        break;
    default:
        console.log("D");
}

// with function 
function getTrafficLight(color) {
  switch (color) {
      case "red":
          return "Stop";
      case "yellow":
          return "Slow down";
      case "green":
          return "Go";
      default:
          return "Invalid color";
  }
}

console.log(getTrafficLight("green")); // "Go"
console.log(getTrafficLight("blue"));  // "Invalid color"

// mood checker with switch
let mood = "happy";

switch (mood) {
    case "happy":
        console.log("😊 Great to hear!");
        break;
    case "sad":
        console.log("😢 Cheer up!");
        break;
    case "angry":
        console.log("😡 Take a deep breath!");
        break;
    default:
        console.log("😐 How are you feeling?");
}

// using break to create intentional fall-through in switch 

let fruit = "apple";

switch (fruit) {
    case "apple":
    case "pear":
        console.log("It's a pome fruit!");
        break;
    case "banana":
    case "mango":
        console.log("It's a tropical fruit!");
        break;
    default:
        console.log("Unknown fruit.");
}

// switch for food ordering
let order = "pizza";

switch (order) {
  case "burger":
    console.log("This is burger");
    break;

  case "pizza":
    console.log("You ordered a pizza");
    break;
  
  case "Doughnut":
      console.log("You ordered a doughnut");
      break;
  default: 
  console.log ("Invalid order, Please select from the menu");
}

let dayNumber = 3;
let dayName;

switch (dayNumber){
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "not existing"
  }
  console.log(`Day ${dayNumber} is ${dayName}`)

// switch for detecting a user role

const role = "admin"

switch (role){
  case "admin":
    console.log("Welcome dear admin., you have full access...")
    break;
  case "editor": 
    console.log("You are not welcome")
    break;
  case "customer":
    console.log("Access denied")
    break;
  default:
    console.log ("Unknown role, contact support")
}

// LOOP
// Loop are used to execute a block of code multiple times.

for(let i = 0; i < 10; i++){
  console.log("iteration:", i)
  // note that the iteration we put in the console is optional
}

for (let i = 1; i <= 5; i++) {
  console.log("Lap " + i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i + "...");
}
console.log("Blast off!");

// using for loop to print a multiplication table

let table = 5;
for (let i = 1; i <=12; i++){
  console.log(`${table} * ${i} = ${table * i}`)
}

let tables = 6;
for (let i = 1; i <=12; i++){
  console.log(`${tables * i}`)
}

let i, x = '';
for (i = 0; i <=5; i++){
  console.log(x += i);
}

// Example: Shopiing Lists
let items = ["milk", "bread", "eggs"];
for (let i = 0; i < items.length; i++) {
    console.log("Buy: " + items[i]);
}

// Sum of numbers
let numbers = [10, 20, 30];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum: " + sum); // Sum: 60\

// searching with break..............................
let names = ["Alex", "Bella", "Charlie"];
let target = "Bella";

for (let i = 0; i < names.length; i++) {
    if (names[i] === target) {
        console.log("Found " + target + " at position " + i);
        break;
    }
}
// for identifying even numbers
let numberss = [1, 2, 3, 4, 5];
for (let i = 1; i < numberss.length; i++) {
    if (numberss[i] % 2 !== 0) {
        continue; // Skip odd numbers
    }
    console.log(numberss[i]);
}

// for odd numbers
let numbersss = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersss.length; i++) {
    if (numbersss[i] % 2 === 0) {
        continue; // Skip odd numbers
    }
    console.log(numbersss[i]);
}

// for another multiplication tables (nested loops)****************
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
      console.log(i + " x " + j + " = " + (i * j));
  }
}

// for calculating intrest per annum
let savings = 100;
let rate = 0.05; // 5% interest
for (let year = 1; year <= 3; year++) {
    savings += savings * rate;
    console.log("Year " + year + ": $" + savings.toFixed(2));
}

// for page numbering
let totalItems = 25;
let itemsPerPage = 5;

for (let i = 0; i < totalItems; i += itemsPerPage) {
    console.log("Page starting at item " + i);
}

// for login status checking
let users = [
  { name: "Alex", loggedIn: true },
  { name: "Bella", loggedIn: false },
  { name: "Charlie", loggedIn: true }
];

for (let i = 0; i < users.length; i++) {
  if (users[i].loggedIn) {
      console.log(users[i].name + " is online");
  }
}

// what can crash the code in for loop is forgetting to update the counter (e.g.  no i++) crashes ur code

// Another examples
// FOR ODD NUMBERS

for (let i=1; i<=10; i+=2)
  {
  console.log("Odd number:", i)
  console.log("Even Number:", i)
}

for (let i=1; i<=5; i++)
{
  if (i === 3){
    continue;
  }
  console.log(i);
}


let fruits = ["Apples", "Mangoes", "Oranges", "Watermelon"];

for (let i = 1; i <fruits.length; i++){
  // if (fruits[i] === "Mangoes"){
  //   continue;
  // }
  console.log(fruits[i]);
}

let brand = "Ridwan";
for (let i = 0; i <brand.length; i++){
  console.log(brand[i]);
}



let count = 1;

while (count <= 3) {
    console.log("Count: " + count);
    count++;
}


// for ----in loop

// examples 1

let user = {name: "Latty", age: 27, city: "Ilorin"};
for(key in user){
  console.log(key + ": " + user[key])
  // console.log(`key: ${user [key]}`)
}


// for summing
let scores = {
  quiz1: 85,
  quiz2: 90,
  quiz3: 88
};
let total = 0;

for (let quiz in scores) {
  total += scores[quiz];
}
console.log("Total score: " + total); // Total score: 263

// to print string only
let data = {
  name: "Bella",
  age: 30,
  active: true,
  city: "London"
};

for (let key in data) {
  if (typeof data[key] === "string") {
      console.log(key + ": " + data[key]);
  }
}


// for cloning an object
let original = {
  color: "blue",
  size: "medium"
};
let copy = {};

for (let key in original) {
  copy[key] = original[key];
}
console.log(copy); // { color: "blue", size: "medium" }




// Practical Applications of for...of Loops

let colours = ["yellow", "blue", "green", "red"]

for (let colour of colours){
  console.log("colour " + [colour])
}


// using for...of for greetings

let friends = ["Alex", "Bella", "Charlie"];

for (let friend of friends) {
    console.log("Hi, " + friend + "!");
}


// for summing 
let scoress = [85, 90, 88];
let totals = 0;

for (let score of scoress) {
    total += score;
}
console.log("Total: " + total); // Total: 263



let word = "cat";

for (let letter of word) {
    console.log(letter);
}

let numberr = [1, 2, 3, 4, 5];

for (let num of numberr) {
    if (num % 2 !== 0) {
        continue; // Skip odds
    }
    console.log("Even: " + num);
}

// for searching 

let itemz = ["pen", "book", "desk"];
let targetz = "book";

for (let item of itemz) {
    if (item === targetz) {
        console.log("Found: " + item);
        break;
    }
}

// for set
let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);

for (let num of uniqueNumbers) {
    console.log(num);
}


// Concatenation
let words = ["I", "love", "to", "code"];
let sentence = "";

for (let word of words) {
    sentence += word + " ";
}
console.log(sentence.trim()); // "I love to code"

// for login (online users)
let userz = [
  { name: "Alex", loggedIn: true },
  { name: "Bella", loggedIn: false },
  { name: "Charlie", loggedIn: true }
];

for (let user of userz) {
  if (user.loggedIn) {
      console.log(user.name + " is online");
  }
}


// WHILE LOOP

// Synthax
// while (condition) {
//   // Code to repeat
// }

// examples
let w = 3;

while(w <= 7){
  console.log(w)
  w++
}


// 2.
let n = 0;
let k = 0;
while (n < 3) {
  n++;
  k += n;
  console.log(k, n)
}



// ===========================
let cookies = 3;

while (cookies > 0) {
    console.log(cookies + " cookies left.");
    cookies--;
}

// ===================_______

let fruitss = ["Apples", "Mangoes", "Oranges", "Watermelon","Dates"];
let z = 0;
while (z < fruitss.length){
  console.log(fruitss[z]);
  z+=3;  

  // z = z+4
}

// ============================..


// forEach 
const students = ['Latty', 'Muba', 'Kb', 'Amosun'];
students.forEach((student, i) => {
  console.log(`index ${i}: ${student}`)
})

// ---------------------------------
let colors = ["red", "blue", "green"];

colors.forEach(function(color) {
    console.log("Color: " + color);
});


// --------------------------------
let namez = ["Alex", "Bella", "Charlie"];

namez.forEach(name => console.log("Hello, " + name + "!"));

// ----------------------------------
let tasks = ["Code", "Test", "Deploy"];

tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
});

// summing
let numberzz = [10, 20, 30];
let sumzz = 0;

numberzz.forEach(num => {
    sumzz += num;
});
console.log("Sum: " + sumzz); // Sum: 60

// ------------------------------

let values = [1, 2, 3];

values.forEach((value, index, arr) => {
    arr[index] = value * 2;
});
console.log(values); // [2, 4, 6]


// using for DOM manipulation
let divs = document.querySelectorAll("div"); // Pretend this grabs <div> tags
divs = Array.from(divs); // Convert NodeList to array

divs.forEach(div => {
    div.style.color = "blue";
});


// -----------------------------
let temperaturez = [35, 40, 32];

temperaturez.forEach(temp => {
    if (temp > 38) {
        console.log("Warning: " + temp + "°C is too hot!");
    }
});


// do while statement 

// A do...while loop is a control structure that executes a block of code at least once, then keeps going as long as a condition is true. Unlike a while loop (which checks the condition first), do...while runs the code before asking, “Should I keep going?” It’s perfect when you need to guarantee at least one iteration—like trying something once before deciding to continue.

// synthax
// do {
//   // Code to repeat
// } while (condition);

let counts = 1;

do {
    console.log("Count: " + counts);
    counts++;
} while (counts <= 3);
// ------------------------
let guess;
let secret = "blue";

do {
    guess = "blue"; // Pretend this is user input
    console.log("Guess my favorite color: " + guess);
} while (guess !== secret);

console.log("You got it!");


// ---------------------

let nums = 0;

do {
    nums++;
    if (nums % 2 !== 0) {
        continue; // Skip odds
    }
    console.log("Even: " + nums);
} while (nums < 6);



// using labelled statement
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
      if (i === 2 && j === 2) {
          console.log("Breaking out of outer loop!");
          break outerLoop; // Exits both loops
      }
      console.log(`i=${i}, j=${j}`);
  }
}

// more on using break
let abC = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < abC.length; i++) {
  if (abC[i] === 1) {
    break;
  }
}


// let u = 0;
// let v = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", u);
//   u += 1;
//   v = 1;
//   while (true) {
//     console.log("Inner loops:", v);
//     v += 1;
//     if (v === 10 && u === 10) {
//       break labelCancelLoops;
//     } else if (v === 10) {
//       break;
//     }
//   }
// }

// more on using continue statement
// 1.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
      continue; // Skips even numbers
  }
  console.log(i); // Only odd numbers are printed
}

// 2.
let num = 0;
while (num < 10) {
    num++;
    if (num === 5) {
        continue; // Skip when num is 5
    }
    if (num === 6) {
      continue; // Skip when num is also 6
  }
  if (num === 8) {
    break; // stop when number is 8
}
    console.log(num);
}

// using continue with label
let f = 0;
let j = 10;
checkFandJ: while (f < 4) {
  console.log(f);
  f += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue checkJ;
    }
    console.log(j, "is odd.");
  }
  console.log("f =", f);
  console.log("j =", j);
}
// ---------------------------------
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
      if (i === 2 && j === 2) {
          console.log("Skipping iteration for i=2, j=2");
          continue outerLoop; // Skips to the next i value
      }
      console.log(`i=${i}, j=${j}`);
  }
}
// --------------------------------------




const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7
// ---------------------------------

// extra class

let purchasePrice =100
let discounts;


if (purchasePrice >= 300) {
  discount = 10
  console.log(`You have ${discount}% discount`)
}else if (purchasePrice >= 200){
  discount = 5
  console.log(`You have ${discount}% discount`)
}else if (purchasePrice >= 100){
  discount = 2
  console.log(`You have ${discount}% discount`)
}else{
  console.log("Koshi danu")
}



// note that you can push like this

let numberz = [1, 2, 3, 4, 5, 6];
let evens = [];

for (let i = 0; i < numberz.length; i++) {
    if (numberz[i] % 2 !== 0) {
        continue; // Skip odd numbers
    }
    evens.push(numberz[i]);
}
console.log("Even numbers: " + evens); // Even numbers: 2,4,6

