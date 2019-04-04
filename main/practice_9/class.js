export default class Class{
  constructor(num){
    this.number = num;
    this.leader = {id : -1};
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }

  assignLeader(student) {
    if(student.klass.number !== this.number){
      console.log("It is not one of us.");
    }
    else
      this.leader = student;
  }

  appendMember(student) {
    student.klass = this;
  }
}
