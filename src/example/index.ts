// built-in type :number, string, boolean, void, undefined, null

function display(): void {
  console.log("I am display");
}
display();

class BadPerson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, o my name is ${this.name}`);
  }
}

const p = new BadPerson("Faruk");
p.greet();
