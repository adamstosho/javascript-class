// Simple Array

const cohorts = ["Latty", "KB", "Muiz", "DP", "Dammy"];
console.log(cohorts);

// Nested Array

const nested = [[1, [1,2,5]], [3,4,3], [5,6,3]]
console.log(nested);


// Easy way to convert normal numbers to array
let numbers = new Array(1,2,3);
console.log(numbers)

const newArr = nested[0][1][2]
// the above refers to the individual element of the array type
console.log(newArr)
console.log(nested.length)  
// used to know the number of length of an array


// accessing an item in an array 
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"

// to modify
let j = [1,2,3]
j[0] = 5
console.log(j)

// another way
const replace1 = (cohorts[1] = "Abdullahi")
console.log(replace1)
console.log(typeof replace1)

// to add a new element to the last index of an array 
cohorts[5] = "olodo"
console.log(cohorts)
console.log(cohorts.length) 
// the above will print the total number of element in an array 



// using for each to modify each fo the items in an array 
cohorts.forEach((names) => {
  console.log(names.toUpperCase())
})

const student = ["Yemi", "Soliu", "Zimbi", "Fatimah", "Maryam", "Deborah"]
console.log(student)



// we have about 12 array methods
// 1. push () - to add a new element to the end of an array 
const pushed  = student.push("Bisola", "Lateefah")
console.log(pushed)  //to print new array lengths

// =====================
let tasks = [];
let list = document.getElementById("list");
function addTask(task) {
    tasks.push(task);
    list.innerHTML += `<li>${task}</li>`;
}
addTask("Study"); //

// 2. pop() - to remove the last element in an array
const number = [2, 3, 4, 5, 7,  8, 9, 2, 0]
const popped = number.pop() //to save the removed elements
console.log(popped);
console.log(number);


// 3. Unshift () - adds one or more elements to the start of an array 
let numberz = [2, 3];
numberz.unshift(1);
console.log(numberz); 


// 4. Shift () - removes one or more elements from the start of an array 
let animals = ["cat", "dog", "bird"];
let first = animals.shift();
console.log(first);   
console.log(animals); 

// 5. splice () - used to add or remove elements from any position 
// synthax
// splice(start, deleteCount, ...itemsToAdd)

// example (to remove)
let items = ["a", "b", "c", "d"];
items.splice(1, 2); // Start at 1, remove 2 items
console.log(items); // ["a", "d"]

// example (to add)
items.splice(1, 0, "x", "y"); // Start at 1, remove 0 (i.e. no item), add "x", "y"
console.log(items); // ["a", "x", "y", "d"]

const food = ["Amala", "Semo", "Rice", "Wheat", "Bread", "Noodles"]
food.splice(3, 0, "Ila")
console.log(food);

// another example
const wears = ["Gucci", "D&G", "Amani", "Versace", "Nike"]
wears.splice(2)
console.log(wears);

// for the above example, it is going to delete the items from position 2


// 6. sort () - sort the array in place (most in alphateically order or ascending order)
// example 1
let names = ["Charlie", "Alex", "Bella"];
names.sort();
console.log(names); // ["Alex", "Bella", "Charlie"]
// examples 2
let nums = [10, 5, 15];
nums.sort((a, b) => a - b); // Compare function for numbers
console.log(nums); // [5, 10, 15] 

let dig = [1, 99, 100, 5, 7,]
dig.sort((a, b) => b-a);
console.log(dig);

// unmutating methods
// 7. slice () - it copies a portion of an array into a new one:- 

let letters = ["a", "b", "c", "d"];
let part = letters.slice(1, 3);
console.log(part);    // 
console.log(letters); // 

let newPart = letters.slice(1);
console.log(newPart);
// note that the end in the synthax is exclusive

// another example
const male = ["Daodu", "Gbdija", "Alani Pamolekun", "Ogundiji", "Afunimawobe", "Orunmila"]
console.log(male);

const newString = "Adeyemi"
console.log(newString.length)
const slicedString = newString.slice(1,4);
console.log(slicedString)

const warriors = male.slice(1,4)
console.log(warriors)

const stakeHolders = male.slice(4)
console.log(stakeHolders)


// note that slice also take in negative parameters as follows

const stakeHolders2 = male.slice(-2) //this starts counting from -1 element
console.log(stakeHolders2)


// 8. Concat() - helps to combine arrays into a new one

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // 
console.log(arr1);     // 

// 9. join() - helps to join the array items into s string with a separator

let words = ["I", "love", "JS"];
let sentence = words.join(" ");
console.log(sentence); 

// tie-in with backticks
let greeting = `${words.join(" ")}!`;
console.log(greeting); // "I love JS!"


// another example
let int = [1,3,4,5,6];
let lInt = int.join("");
console.log(lInt);


// 10. indexOf() - Finds the first index of an item, returns -1 if not found. It works for the first occurrence.

let fruitz = ["apple", "banana", "banana", "apple", "banana"];
console.log(fruitz.indexOf("banana")); // 1
console.log(fruitz.indexOf("grape"));  // -1


// 11. lastIndexOf() - return the last occurrence of the string.... will pick from the back.
console.log(fruitz.lastIndexOf("banana"))
const lastInd = fruitz.lastIndexOf("apple", fruitz.length)
console.log(lastInd)

// 12. toString() - used to covert array into string
const string = male.toString()
console.log(string)

// another example 
let exam = [1,2,3,4,5]
const str = exam.toString()
console.log(str)



// 13. includes - checks if an item is included/exist in the array or not; and this return true/false.

let no = [1, 2, 3];
console.log(no.includes(2)); // true
console.log(no.includes(4)); // false


const bln = male.includes("Dudu")
console.log(bln);

// Array for Iteration (used to loop over arrays) - These methods process each item, often with a callback function.

// 14. forEach() - runs a function or perform action for each item, but it doesnt return anything. This means tht it will do it there automatically.
let colors = ["red", "blue", "green"];
colors.forEach((color, index) => {
    console.log(`${index + 1}. ${color}`);
});

const namez = ["Abiola", "Abdul", "Dola"]
namez.forEach(function(){
  console.log(names)
})

// another way using arrow function 

names.forEach((value, i, arr) => {
  console.log(value)
  console.log(i)
  console.log(arr)

})


let totalVal = 0
const trans = [42, 45, 26, 4, 13, 16]
trans.forEach((tran) =>{
  totalVal += tran
})
console.log(totalVal)

// other method of getting the above 
// let totalVal = 0
// const trans = [42, 45, 26, 4, 13, 16]
// trans.forEach((tran) =>{
//   console.log(totalVal, (totalVal += tran), trn)
// })
// console.log(totalVal)


namez.forEach((name) => console.log(`Congratulations ${name}, you will be representing the team in the UK next month`))

// using DOM 
let lists = document.getElementById("colorList");
colors.forEach(color => {
    list.innerHTML += `<li>${color}</li>`;
});


// 15. Map method - It is similar to forEach, it also accept up to 3 argument, it allocate memory in all data store and return values

// Array of Objects
const inventory = [
  {name: "Rice", price: 50000},
  {name: "Beans", price: 30000},
  {name: "Garri", price: 20000},
  {name: "Semo", price: 40000},
  {name: "Yam", price: 80000},
]
const price = inventory.map((value) => {
  return value.price

})
console.log(price)
