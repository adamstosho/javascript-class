// Objects: HTMLBodyElement, values and methods
// examples 1 - for demonstrating the structure of an object
const carA = {
  model: 2013,
  colour: "Black",
  brand: "Toyota",
  price: 2000,
  horsePower: 900
}

console.log(`${carA.model}\n${carA.brand}\n${carA.price}\n${carA["horsePower"]}`)
// or you console it separately

// Nested Objects
// example 2
const cars = {
  firstCars: carA,
  secondCars: {
    model: 2015,
    colour: "Black",
    brand: "Toyota",
    price: 3750,
    horsePower: 1205
  },
};

const carAPrice = cars.firstCars.price

// const carPrice = cars["firstCars"]["price"]

console.log({ carAPrice })

// examples with different value types
let person = {
  firstName: "Alice",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "swimming"],
  address: {
    street: "123 Main St",
    city: "New York"
  }
};

console.log(person.firstName);
console.log(person.hobbies[0]);
console.log(person.address.city);

const cohort6 = {
  male: {
    names: ["Abdullah", "Mueez", "Idrees", "Ridwan"]
  },
  female: { name: "Lateefah" }
}
const firstStudent = cohort6.male.names[0];
console.log({ firstStudent });


// another example
const dltAfrica = [
  {
    cohorts: {
      cohort1: {
        names: ["Biodun", "Dolu", "Anike", "Shola"],
        hobbies: {
          Biodun: "Football",
          Dolu: "Eating",
          Anike: "Dancing",
          Shola: "Racing"
        },
      },
    },
  },

  {
    tutors: {
      names: ["Anate", "SoliuA", "SoliuM", "Abdullah"],
      hobbies: {
        Anate: "Football",
        SoliuA: "Eating",
        SoliuM: "Dancing",
        Abdullah: "Racing"
      },
    },
  },
];

const callMe = dltAfrica[1].tutors.names[3];
console.log(callMe)

const sholaHobby = dltAfrica[0].cohorts.cohort1.hobbies.Shola
console.log({ sholaHobby })

//  dynamic rending 
const studentAndTutors = { [dltAfrica[1].tutors.names[0]]: dltAfrica[0].cohorts.cohort1.names[2] }
console.log(studentAndTutors)

// object with method

const dynamicKey = "date"

const carB = {
  name: "big daddy",
  brand: "Toyota",
  date: 2023,
  updateYear: function (newDate) {
    this.date = newDate
  }
}

carB.updateYear(3004)

// console.log(carB.date)
// console.log(carB)

// more example
let cat = {
  name: "Whiskers",
  age: 2,
  meow: function () {
    console.log("Meow meow!");
  }
};
cat.meow();


const students = {
  name: "Kabri",
  age: 30,
  favNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  favSum: function () {
    return this.favNumber.reduce((a, b) => {
      return a + b
    }, 0)
  }
}
console.log(students.favSum());
console.log(students);
// alternative method:  const sum = this.favNum.reduce((acc, curr) => arr + curr, 0)
// return sum
// console.log({sum: student.favSum()})
console.log(person)


// it is very easy to modify anything in the objects 
let book = {
  title: "Harry Potter",
  pages: 400
};

book.author = "J.K. Rowling"; // Add a new property
console.log(book.author);      // "J.K. Rowling"
console.log(book)

book.pages = 500; // Modify an existing property
console.log(book.pages); // 500
console.log(book)

// kindly note that the we modify the same way we add...

// delete a property  
delete book.pages;

console.log(book.pages); // undefined
console.log(book)

book.describe = function () {
  return `${this.title} by ${this.author} has ${this.pages} pages.`;
}

book.pages = 400;
console.log(book.describe());


let player = {
  firstName: "Ronaldo",
  lastName: "Christiano",
  age: 41,
  team:
  {
    clubName: "Manchester United",
    location: "Portugal",
    Manager: "Sir Alex Ferguson",
    position: "Forward"
  },
  jerseryNumber: 7,
}

console.log(player)
console.log(player.team.clubName)

player.team.location = "South Africa"
console.log(player.team.location)
console.log(player.team)

player.team.Manager = "Ole Gunnar Solskjaer"
console.log(player.team.Manager)

// built-in method is a method that is already defined by the object - like when they give value a function in the object

const myObject = {
  myMethod:  () => {},  //arrow function
  myMethod2: function () {}, //function declaration
  myMethod3() {}  //function expression
}

// console.log(myObject.myMethod())

const dog = {
  name: "Fluffy",
  age: 3,
  bark: () => {
    console.log("Woof woof!");
  }
}
dog.bark();


// Object Methods
// The following are some of the methods of an object

// 1. object.keys() - it returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
// 2. object.values() - it returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
// 3. object.entries() - it returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
// 4. object.freeze() - it freezes an object: other code can't delete or change any properties.
// 5. object.seal() - it seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.


// 6. object.hasOwnProperty() - it returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
// 7. object.assign() - it copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
// 8. object.create() - it creates a new object with the specified prototype object and properties.
// 9. object.defineProperties() - it defines new or modifies existing properties directly on an object, returning the object.
// 10. object.defineProperties() - it defines new or modifies existing properties directly on an object, returning the object.
// 11. object.defineProperty() - it defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
// 12. object.fromEntries() - it transforms a list of key-value pairs into an object.
// 13. object.is() - it determines whether two values are the same value.
// 14. object.isExtensible() - it determines if extending of an object is allowed.
// 15. object.isFrozen() - it determines if an object was frozen.
// 16. object.isSealed() - it determines if an object is sealed.
// 17. object.keys() - it returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
// 18. object.preventExtensions() - it prevents any extensions of an object.
// 19. object.prototype - it allows the addition of properties to all objects of a given type.


// Object.keys() and Object.values()
const employees = {
  boss: "Aliu Bello",
  secretary: 'Lateefah',
  accotuntant: 'Abdullah',
  sales: "Damilare"
}

const employeeInfo = Object.keys(employees)
console.log(employeeInfo)

const employeeInf = Object.values(employees)
console.log(employeeInf)

// entries create a nested array of the key-value pairs of the object
const employeeIn = Object.entries(employees)
console.log(employeeIn)

const session = {
    id: 1,
    date: "10-03-2025",
    device: "mobile",
    browser: "chrome",

}
const sessionValue = Object.entries(session)
console.log(sessionValue)


const operatingSystem = {
  name: 'Ubuntu',
  version: 18.04,
  license: 'Open Source'
};


// freeze- prevent modification of existing properties and prevent properties from being added or removed

const user = {
  username: "Ridwan",
  password: "12345",
}

const frozenUser = Object.freeze(user)
frozenUser.username = "Mueez"
console.log(frozenUser)

// seal - prevent new objects from being added or removed 

const userOne = {
  username: "Ridwan",
  password: "12345",
}

const sealedUser = Object.seal(userOne)
sealedUser.username = "Mueez"
console.log(sealedUser)

