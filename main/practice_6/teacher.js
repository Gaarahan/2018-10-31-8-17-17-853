import Person from "../../main/practice_6/person.js"
export default class Teacher extends Person{
  constructor(name,age,klass){
    super(name,age);
    this.klass = klass;
  }
  introduce(){
    return super.introduce() +
        ` I am a Teacher. I teach ${this.klass? `Class ${this.klass}` : "No Class"}.`
  }
}

