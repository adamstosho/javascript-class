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

// pop cannot be used to remove more than one element 


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

// the synthax is as follows
// 1. array.forEach(function(item){

// })

// 2. array.forEach(item =>


let colors = ["red", "blue", "green"];
colors.forEach((color, index) => {
    console.log(`${index + 1}: ${color}`);
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


// using it to modify an array 
let scores = [10, 20, 30];
scores.forEach(function(score, index, arr) {
    arr[index] = score * 2;
});
console.log(scores); 

// for each on array of objects
let people = [
  { name: "Alex", age: 25 },
  { name: "Bella", age: 30 }
];
people.forEach(function(person) {
  console.log(`${person.name} is ${person.age}`);
});

let students = [
  { name: "Charlie", grade: "A" },
  { name: "Dana", grade: "B" }
];
students.forEach(function(student) {
  console.log(`${student.name} got a ${student.grade}`);
});

// using foresch to perform simple action on each element 
let team = ["Tom", "Jerry", "Spike"];
team.forEach(function(player) {
    console.log(`Go, ${player}!`);
});


// other method of getting the above 
// let totalVal = 0
// const trans = [42, 45, 26, 4, 13, 16]
// trans.forEach((tran) =>{
//   console.log(totalVal, (totalVal += tran), trn)
// })
// console.log(totalVal)


namez.forEach((name) => console.log(`Congratulations ${name}, you will be representing the team in the UK next month`))

// that that the name can  be named with anything 

// using DOM 
let lists = document.getElementById("colorList");
colors.forEach(color => {
    list.innerHTML += `<li>${color}</li>`;
});

let foods = ["pizza", "burger", "salad"];
let myList = document.getElementById("myList");

foods.forEach(function(food) {
    myList.innerHTML += `<li>${food}</li>`;
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

// USING OPTIONAL CHAIN OPERATOR
const commodities = inventory.map((value) => value.name); 
console.log(commodities)


// ==========================
const arr4 = [1, 2, 3, 4, 5, 6];
const multVal = arr4.map((el) => el * 2);
console.log(multVal);

// ============================
// conversion rate

const priceInUSD = [200, 120, 360, 90];
const xchangeRate = 1490;
console.log(priceInUSD.map((usd) => usd * xchangeRate))

// ===================================
let numb = [1, 2, 3];
let doubled = numb.map(function(num) {
    return num * 2;
});
console.log(doubled);  //
console.log(numb);  // 
// map() method retain the original array unchanged

let fruity = ["apple", "banana", "orange"];
let upperFruits = fruity.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperFruits); 


let clr = ["red", "blue", "green"];
let numberedColors = clr.map(function(color, index) {
    return `${index + 1}. ${color}`;
});
console.log(numberedColors); 


let numd = [1, 2, 3];
let sameNums = numd.map(function(num) {
    return num; // No change
});
console.log(sameNums); 


// note that without return, map() is going to show undefined

let scorez = [10, 20, 30];
let doubledScores = scorez.map(score => score * 2);
console.log(doubledScores); 

// using with arrays of objects
let persons = [
  { name: "Alex", age: 25 },
  { name: "Bella", age: 30 }
];
let person = persons.map(function(paddy) {
  return paddy.name;
});
console.log(names); 


// =====================
let points = [5, 10, 15];
let doublePoints = points.map(function(point) {
    return point * 2;
});
console.log(doublePoints); 

// using map to change words in the array 
let animalz = ["cat", "dog", "bird"];
let bigAnimals = animalz.map(function(animal) {
    return `Big ${animal}`;
});
console.log(bigAnimals); 

// using with DOM to build a list
let foodz = ["pizza", "burger", "salad"];
let myLizt = document.getElementById("myList");

let listItems = foodz.map(function(food) {
    return `<li>${food}</li>`;
});
myList.innerHTML = listItems.join("");


// =======================
const users = [
  {name: "Kabeer", age: 30},
  {name: "Dolapo", age: 30},
  {name: "Muiz", age: 30},
  {name: "Feranmi", age: 30}
]
console.log(users.map((value) => value.name));

const products = [
  {name: "laptop", price: 300},
  {name: "desktop", price: 950},
  {name: "mouse", price: 1450},
  {name: "keyboard", price: 1950}
]

const productWithId = products.map((product, index) => ({
  id: index + 1,
  ...product
}));
console.log(productWithId)

// note that in introducing another value to the Object, we need to use parentheses to wrap the curly braces holding the return

let idNo = productWithId.map((now) => {
  return now.id
})
console.log(idNo);

const wholeNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num = 6;

const lessThanSix = wholeNo.map((less) => {
  return less < 6 ? less : null;
})
console.log(lessThanSix);

// const lessThanSix = wholeNo.map((less) => {
//  if (less < 6){
// return i
// }
// // })
// console.log(lessThanSix);


// 16. Filter()- create new array based on the set conditions. it will only print/show the ones that pass the condition.Array

// synthax
// let newArray = array.filter(function(item) {
//   // Rule to check each item
//   return trueOrFalse;
// });

// // or 

// let newArrays = array.filter(item => trueOrFalse);


let numba = [1, 2, 3, 4, 5];
let bigNumbers = numba.filter(function(num) {
    return num > 3;
});
console.log(bigNumbers); 
console.log(numba);  


const evenNumber = wholeNo.filter((i) => i % 2 === 0)
console.log(evenNumber)

const below = productWithId.filter((product) => product.price <=1000)
console.log(below);

// ==============================
let longFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});
console.log(longFruits);

// ==========================

// filtering out string from the array elements
let er = [1, 3, 7, "Adekola", true, "bola", "123", 90, 200];
let ab = er.filter((i) => typeof i === "string");
console.log(ab);

// ===============================
let scorezz = [85, 90, 95];
let highScores = scores.filter(function(score) {
    return score >= 90;
});
console.log(highScores);


// ===================================
// using filter to find long or short words
let lengtho = productWithId.filter((less) => less.name.length < 7)
console.log(lengtho)

// ---------------------------
let wordy = ["cat", "dog", "elephant"];
let longWords = wordy.filter(function(word) {
    return word.length > 3;
});
console.log(longWords); 

// =====================
let summary = 0;
let summing = productWithId.map((now) => {console.log(summary += now.price)}) 
console.log(summary)


// using it to keep even number
let numy = [1, 2, 3, 4, 5];
let evenNums = numy.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNums);

// DOM manipulation with filter
let scoress = [85, 92, 78, 95];
let highScoress = scoress.filter(function(score) {
    return score >= 90;
});
let highScoresDiv = document.getElementById("highScores");
highScoresDiv.textContent = `High scores: ${highScoress.join(", ")}`; // note that we first filtered before calling using DOM

// used for picking items by position 
let toys = ["ball", "doll", "car", "kite"];
let laterToys = toys.filter(function(toy, index) {
    return index < 2;
});
console.log(laterToys); 

// ================
let animalsz = ["cat", "dog", "bird"];
let dogs = animalsz.filter(function(animal) {
    return animal === "dog";
});
console.log(dogs);  
console.log(animalsz); 

// 17. reduce () - It loops over an array and combines everything into one result.

// synthax
// let result = array.reduce(function(accumulator, item) {
//   // How to combine accumulator and item
//   return newAccumulator;
// }, startingValue);

// function(accumulator, item): The rule for combining things.
// accumulator: The running total or “mix so far” (starts with startingValue).
// item: The current element in the array.
// return: What the accumulator becomes after each step.
// startingValue: Where to begin (optional, but recommended).
// result: The final single value you get.

// short synthax
// let result = array.reduce((acc, item) => newAccumulator, startingValue);

// application of reduce method
// 1. sum of an array elements
// 2. flatten an array
// 3. occurrence of an element/item in an array
// 4. find the maximum value
// 5. find the maximum or biggest value 
// 6. grouping data by a property

let numbi = [1, 2, 3, 4];
let sum = numbi.reduce(function(total, num) {
    return total + num;
}, 0);
console.log(sum); 

// for joining words
let worddy = ["I", "love", "to", "code"];
let sentency = worddy.reduce(function(phrase, word) {
    return phrase + " " + word;
}, "");
console.log(sentency); 

let letterz = ["a", "b", "c"];
let numbered = letterz.reduce(function(text, letter, index) {
    return text + `${index + 1}. ${letter} `;
}, "");
console.log(numbered);


let numu = [1, 2, 3];
let total = numu.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log(total); 

// counting items with reduce ()

let votes = ["yes", "no", "yes", "yes"];
let voteCount = votes.reduce(function(counts, vote) {
    if (vote === "yes") {
        counts.yes += 1;
    } else {
        counts.no += 1;
    }
    return counts;
}, { yes: 0, no: 0 });
console.log(voteCount); 

// using reduce to find the biggest number

let digit = [10, 5, 15, 8, 200];
let biggest = digit.reduce(function(max, num) {
    return num > max ? num : max;
}, [0]);
console.log(biggest);



// using with DOM
let prices = [5, 10, 15];
let totalPrice = prices.reduce(function(sum, price) {
    return sum + price;
}, 0);
let totalDiv = document.getElementById("total");
totalDiv.textContent = `Total: $${totalPrice}`;

// another synthax for reduce: Array.reduce(accumulator, currentValue, currentIndex, Array), initialValue)
// more examples on the application of reduce
// 1. sum of an array elements
// 2. flatten an array
// 3. occurrence of an element/item in an array
// 4. find the maximum value
// 5. find the maximum or biggest value 
// 6. grouping data by a property


// Example 1: sum of array elements
const myNums = [1,2,3,4,5];
const sums = myNums.reduce((acc, curr) => {return acc + curr},0)
console.log(sums)

// Example 2: Flatten an array - to convert nested array to single array...

const nestedArray = [[1, 2], [3, 4], [4, 6]]

const flattenedArray = nestedArray.reduce((acc, curr) => (acc.concat(curr)), []).reduce((acc,curr)=> {
  if(!acc.includes(curr)){
  acc.push(curr)
  }
  return acc;
}, [])

console.log(flattenedArray)

// to remove duplicate from the result, u can use reduce, filter and also for each method

const flatFilter = flattenedArray.filter((e, index, array) => array.indexOf(e) === index) 
console.log(flatFilter)

// ===========================================

// chaining different 
const namo = ["Dolu", "soliu", "Feranmi", "Abdullah"]
const namy = namo.filter((nam) => {
  if (nam.charAt(0) === nam.charAt(0).toLowerCase()) return nam
}).map((element) => element + "s")
namy.push("Idrees")
console.log([namy]) 


// for each vs map

const userz = [{name: "Soliu", age: 15}, {name: "feranmi", age: 10}]

// add 5 to each of the age
userz.forEach((now) => {return `${now.age += 5}`})
console.log(userz)

// using map method for the above
const userzz = [{name: "Soliu", age: 15}, {name: "feranmi", age: 10}]

const usa = userzz.map((now, index) => ({id: index + 1, ...now, age: now.age+5, height: now.age +10}))
console.log(userzz)
console.log(usa)


// another example with multiple nested arrays
// const multiNested = [[1, 2] [[3, 4], [5, 6]], [7, 8]]
// const flatMulti = multiNested.reduce((acc, curr, currIn, array) => {
//   if (curr =)
// })


// 3. occurrence of an element/item in an array
const fruitty = ["Orange", "Banana", "Banana", "Grape"]
const fruitsCount = fruitty.reduce((acc, curr) => { acc[curr] = (acc[curr] || 0) + 1;

  return acc
}, [])
console.log({fruitsCount} ) 



// 4. find the maximum value

const maxExample = [10, 30, 3, 100, 4]
const max = maxExample.reduce((acc, curr) => curr > acc ? curr : acc, maxExample[0])

console.log(max)

// 5. find the maximum or biggest value 
// 6. grouping data by a property