class Person {
  #id;
  constructor(firstName, sureName, salary, age, id) {
    this.firstName = firstName;
    this.sureName = sureName;
    this.salary = salary;
    this.age = age;
    this.#id = id;
  }

  get fullName() {
    return `${this.firstName} ${this.sureName}`;
  }

  get whatage() {
    return this.age;
  }

  set newAge(_newAge) {
    return this.age = _newAge;
  }

  get whatsalary() {
    return this.salary
  }

  set newSalary(_newSalary) {
    return this.salary = _newSalary;
  }

}

class Player extends Person {
  constructor(firstName, sureName, salary, age, id, strongLeg, position, celebrationSentence) {
    super(firstName, sureName, salary, age, id);
    this.strongLeg = strongLeg;
    this.position = position;
    this.celebrationSentence = celebrationSentence;
  }
  goalCelebration() {
    console.log(this.celebrationSentence);
    this.salary = this.salary * 1.025
  }
  set newPosition(_newPosition) {
    this.position = _newPosition;
  }
  set newCeleb(_newCeleb) {
    this.celebrationSentence = _newCeleb;
  }
}

class Goalkeeper extends Person {
  constructor(firstName, sureName, salary, age, id, isLeftHanded, lastGoalConceded) {
    super(firstName, sureName, salary, age, id);
    this.isLeftHanded = isLeftHanded;
    this.lastGoalConceded = lastGoalConceded;
  }
  concededAGoal() {
    console.log('Booz');
    this.salary = this.salary * 0.975
    this.lastGoalConceded = new Date().toISOString().slice(0, 10);
  }
  get lastGoalDate() {
    return this.lastGoalConceded;
  }
}

const Ronaldo = new Player('Cristano', 'Ronaldo', 1000000000, 35, 7, 'right', 'CF', 'Suiuuuuiii');
const Dudu = new Goalkeeper('Dudu', 'Awhat', 1000, 40, 23, true);