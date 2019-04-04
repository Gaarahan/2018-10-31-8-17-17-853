import Person from "../../main/practice_11/person.js"

export default class Teacher extends Person{
  constructor(id,name,age,klassObj){
    super(id,name,age);
    this.klasses = klassObj || [];
  }
  introduce(){
    let klassStr  = "";
    if(this.klasses.length !== 0){
      klassStr += "Class ";
      this.klasses.forEach((val,index)=>{
        if(index !== 0){
          klassStr += ", ";
        }
        klassStr += val.number;
      });
    }
    else
      klassStr = "No Class";
    return super.introduce() +
        ` I am a Teacher. I teach ${klassStr}.`
  }
  isTeaching(student){
    return this.klasses.some(val=>val.isIn(student));
  }
  introduceWith(stu){
    return super.introduce() + ` I am a Teacher. I ${stu.klass === this.klass ? "" : "don't "}teach Jerry.`;
  }
}

