
// parsing JSON 
const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString);
console.log(obj)
console.log(obj.name); 
console.log(obj.age);


// Stringifying JavaScript
const objj = {name: "Alice", age: 25};
const jsonStringg = JSON.stringify(objj);
console.log(jsonStringg); 


// fetching data from API (planet lists) - note that this is the basic method of fetching data either from API or other external source like JSON file
fetch('https://handlers.education.launchcode.org/static/planets.json')
  .then(response => response.json())
  .then(data => {
    console.log(data[1].name); 
  });  // Explanation: fetch gets the data, response.json() converts it to a JavaScript object, and you can access properties like data[0].name.


  // Storing JSON locally

  const user = {name: "John", age: 30};
localStorage.setItem('user', JSON.stringify(user));

// Later, to retrieve it
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); 

// note - You stringify the object to store it, then parse it back when retrieving.


// sending JSON to a server

const userData = {name: "Alice", email: "alice@example.com"};
// fetch('https://example.com/api/user', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(userData)
// });


// converting date types to string 
const dateObj = new Date();
const jsonStringy = JSON.stringify(dateObj); 
console.log(jsonStringy)
const parsed = JSON.parse(jsonStringy); // Still a string, so convert back: new Date(parsed)
console.log(parsed)






console.log("Welcome to JSON -----{} class")

fetch('./person.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    
    const addId = {id: 1, ...data};
    console.log(addId);

    const add = addId.address;
    const desAdd = [add.number, add.street, add.city];

    // or

    const [first, second, third] = desAdd

    console.log(`I live at ${first}, ${second}, ${third}`)

  });



// exercises 

// Exercise 1: Create a JSON Object
// Exercise 2: Parse a JSON String
// Given the following JSON string, parse it into a JavaScript object and log the author’s name:
const bookString = '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "year": 1925}';
// Exercise 3: Fetch JSON Data
// Fetch the planets JSON from 'https://handlers.education.launchcode.org/static/planets.json' and log the name of the first planet.
// Exercise 4: Stringify a JavaScript Object
// Convert the following JavaScript object into a JSON string:
const books = {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925};

// Exercise 5: Access Nested Data
// Given the following JSON string, parse it and log the city from the address:
// const userString = '{"name": "Alice", "age": 25, "address": {"street": "123 Main St", "city": "New York"}}';

// exercise 6
// From the following, identify the correct JSON:
// { type: "dog", name: "Bernie", age: 3 } 
// { "type": "dog", "name": "Bernie", "age": 3 } 
// { "type": 'dog', "name": 'Bernie', "age": 3 }

// exercise 7
// Convert the JavaScript array var names = ['james', 'jake'] to JSON.

























//solution 1
// {
//   "title": "The Great Gatsby",
//   "author": "F. Scott Fitzgerald",
//   "year": 1925
// }


// solution 2
// const book = JSON.parse(bookString);
// console.log(book.author); 


// // solution 3
// fetch('https://handlers.education.launchcode.org/static/planets.json')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data[0].name);
//   });


//   // soln 4

//   const jsonStrings = JSON.stringify(books);
// console.log(jsonStrings); 


// // soln 5
// const users = JSON.parse(userString);
// console.log(users.address.city);