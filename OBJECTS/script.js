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
console.log({sholaHobby})

//  dynamic rending 
const studentAndTutors = {[dltAfrica[1].tutors.names[0]]:dltAfrica[0].cohorts.cohort1.names[2]}
console.log(studentAndTutors)

// object with method

const dynamicKey = "date"

const carB = {
  name: "big daddy",
  brand: "Toyota",
  date: 2023,
  updateYear: function (newDate){
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
  meow: function() {
    console.log("Meow meow!");
  }
};
cat.meow(); 


const students = {
  name: "Kabri",
  age: 30,
  favNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  favSum: function (){
      return this.favNumber.reduce((a, b) => {
      return a+AudioBufferSourceNode
    }, 0)
  }
}
  console.log(students.favSum());
// alternative method:  const sum = this.favNum.reduce((acc, curr) => arr + curr, 0)
// return sum
// console.log({sum: student.favSum()})



