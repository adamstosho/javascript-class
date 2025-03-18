import {Person} from "./pearson.js";

class Student extends Person {
  constructor (name, age, grade){


  super (name, age)
  this.grade = grade
  }

}




export {Student}