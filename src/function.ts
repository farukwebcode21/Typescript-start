function add(num1: number, num2: number) {
  return num1 + num2;
}
const result = add(100, 20);
console.log(result);


// rest parameter

const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends("Rashel", "Kasem", "Sumon", "Sohel", "Surma", "Soleman");
