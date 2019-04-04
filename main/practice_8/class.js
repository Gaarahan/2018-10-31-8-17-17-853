export default class Class{
  constructor(num){
    this.number = num;
    this.leader = {id : -1};
  }

  getDisplayName() {
    return `Class ${this.number}`;
  }

  assignLeader(student) {
    this.leader = student;
  }
}
