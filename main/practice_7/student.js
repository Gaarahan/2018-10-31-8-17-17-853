import Person from "../../main/practice_7/person.js";
export default class Student extends  Person{
  constructor(name,age,classObj){
    super(name,age);
    this.klass = classObj;
  }
  introduce(){
    return super.introduce() + ` I am a Student. I am at Class ${this.klass.number}.`
  }
}
