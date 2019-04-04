import Person from "../../main/practice_5/person.js"
export default class Worker extends Person{
  introduce(){
    return super.introduce() + ` I am a Teacher. I have a job.`
  }
}
