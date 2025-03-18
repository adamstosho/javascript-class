// // classwork

// using JS ES6 class and modules, create three separate modules (person.js, classroom.js, student.js), and create primary javascript file (main.js). The pearson property should be just "name" and "age". Student class should extend person. The property of a student is name, age and CanvasGradient.apply
// 1. use Array.push to add new students into array of students
// 2. use array.filter to filter students who grades exceeds 50 and also their names start with uppercase
// 3. use array.map to return the student's name and their current 

import {Classroom} from "./classroom.js";

const myClassroom = new Classroom()

myClassroom.addStudent("Lateefat", 200, 51)
myClassroom.addStudent("Ridwan", 40, 80)
myClassroom.addStudent("Mueez", 30, 52)
myClassroom.addStudent("soliu", 25, 100)
myClassroom.addStudent("Dolu", 20, 10)

const filteredResult = myClassroom.filterStudentGradeAndName();
const MapResult = myClassroom.getMappedResult();

console.log(filteredResult)
console.log(MapResult);

