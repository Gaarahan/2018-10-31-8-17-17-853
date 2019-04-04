export default class Class{
  constructor(num){
    this.number = num;
    this.leader = {id : -1};
    this.listenerTeacher = null;
    this.joinListener = null;
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }

  assignLeader(student) {
    if(student.klass.number !== this.number){
      console.log("It is not one of us.");
    }
    else{
      this.leader = student;
      if(this.listenerTeacher !== null){
        console.log(`I am ${this.listenerTeacher.name}. I know ${this.leader.name} become Leader of Class ${this.number}.`)
      }
    }
  }

  appendMember(student) {
    student.klass = this;
    if(this.joinListener !== null){
      console.log(`I am ${this.joinListener.name}. I know ${student.name} has joined Class ${this.number}.`)
    }
  }
  isIn(student){
    return student.klass === this.number;

  }
  registerAssignLeaderListener(teacher) {
    this.listenerTeacher = teacher;
  }

  registerJoinListener(teacher) {
    this.joinListener = teacher;
  }
}
