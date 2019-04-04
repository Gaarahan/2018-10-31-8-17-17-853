import Person from "../../main/practice_6/person.js";
export default class Student extends  Person{
  constructor(name,age,className){
    super(name,age);
    this.klass = className;
  }
  introduce(){
    return super.introduce() + ` I am a Student. I am at Class ${this.klass}.`
  }
}
