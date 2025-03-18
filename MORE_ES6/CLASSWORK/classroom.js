import {Student} from "./student.js";

class Classroom {
  constructor(){
    this.students =[];
  }

  addStudent(name, age, grade){
    const student = new Student (name, age, grade)

    this.students.push(student);
  }
 
  filterStudentGradeAndName() {
    const students = this.students;
    const filteredResult = students?.filter((student) => student?.grade > 50 && student?.name?.charAt(0) === student?.name?.charAt(0)?.toUpperCase()
    );

    return filteredResult
  }

  getMappedResult(){
    const students = this.students;
    const MapResult = students.map((student) => ({name: student?.name, grade: student?.grade}));
    return MapResult;
  }

}

export {Classroom}