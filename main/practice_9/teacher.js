import Person from "../../main/practice_9/person.js"

export default class Teacher extends Person{
  constructor(id,name,age,klassObj){
    super(id,name,age);
    this.klass = klassObj;
  }
  introduce(){
    return super.introduce() +
        ` I am a Teacher. I teach ${this.klass? `Class ${this.klass.number}` : "No Class"}.`
  }
  introduceWith(stu){
    return super.introduce() + ` I am a Teacher. I ${stu.klass === this.klass ? "" : "don't "}teach Jerry.`;
  }
}

