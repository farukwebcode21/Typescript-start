class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}
const dog = new Animal("German Shepard", "dog", "Ghew ghew");
const cat = new Animal("Persian", "cat", "mew mew");

dog.makeSound();
cat.makeSound();
