class Parent {
  public name: string;
  public age: number;
  public address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}  hours`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
const student1 = new Student("Mr Rahim", 15, "Dhaka Mirput");

class Teacher extends Parent {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(numberOfClass: number): string {
    return `This ${this.name} will take ${numberOfClass} class`;
  }
}

const teacher1 = new Teacher("Mr Karim", 35, "USA", "Profession");
console.log(teacher1);
const person = teacher1.makeSleep(20);
console.log(person);
