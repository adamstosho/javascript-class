// 4 ways of creating objects 

// 1. literal notation: not inheritable and reusable but readily available for use

const student = {
  name: "Kabeer", 
  age: 89,
  printAge: function (){
    console.log(`${this.name}'s age is ${this.age}`)
  }
}
console.log(student.printAge())


//2. object constructor: it is the same as literation noration just that it helps to creare object dynamically using "new Object()"

const person = new Object();
person.name = "Feranmi"
person.age = 30
console.log(person)
person.age = 40
console.log(person)
console.log(person.age)


// 3. Constructor function: this creates a blueprint and is reusable. But inheritance is likely complex to structure.

function car(name, color, brand, horsePower){
  this.name = name;
  this.color = color;
  this.brand = brand;
  this.horsePower = horsePower

  this.printColor = function (){
    console.log(`${this.color}`)
  }
}

// to create the function outside, kindly follow this... and this is recommended bcos of the memory functionality. This uses PROTOTYPE

car.prototype.printName = function (){
  console.log(`the name of the car is ${this.name}`)
}
const car1 = new car("toyota camry", "white", "toyota", 200);
console.log(car1)
console.log(car1.printColor());
console.log(car1.printName());


// 4. class: it is inheritable and also reusable. it extends the functionality of constructor function 
// class makes it possible to create method inside the class with any inefficiency unless the constructor function

class House {
  constructor (type, color, address){
    this.type = type;
    this.color = color;
    this.address = address;
  }

  printHouseAddress() {
    console.log(`${this.address} is the address of the house with ${this.color} color`)
  }
}

const house1 = new House("Storey", "Brown", "No 17, Pegamut Estate")
console.log(house1)
console.log(house1.printHouseAddress())

// now INHERITANCE - note that there is overriding here

class storeyBuilding extends House {
  constructor (type, color, address, height, windowSize){
   
  super(type, color, address)
  this.height = height
  this.windowSize = windowSize
  }

  printHouseAddress(){
    console.log(`${this.address} is the address of the house wuth ${this.height} height`)
  }
  printType(){
    console.log(`${this.type} is the house type`)
  }

}

const newStoreyBuilding = new storeyBuilding(
  "storey",
  "white",
  "Ijagbo, Offa Road",
  200, 
  15
);

console.log(newStoreyBuilding)
console.log(newStoreyBuilding.printType())
console.log(newStoreyBuilding.printHouseAddress())


  