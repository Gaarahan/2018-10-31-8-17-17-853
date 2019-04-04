import Person from "../../main/practice_10/person.js";
export default class Student extends  Person{
  constructor(id,name,age,classObj){
    super(id,name,age);
    this.klass = classObj;
  }
  introduce(){
    return super.introduce() + ` I am a Student. I am ${this.id === this.klass.leader.id?"Leader of":"at"} Class ${this.klass.number}.`
  }
}
