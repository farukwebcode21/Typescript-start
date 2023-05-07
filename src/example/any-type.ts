// Here explain any type typescript  example

let userPerson: any;
userPerson = "Faruk";
console.log(userPerson);
userPerson = 510;
console.log(userPerson);

// key in keyof data change =------
type Data = { num21: number };

type B = {
  [key in keyof Data]: string;
};
type C = {
  [key in keyof Data]: boolean;
};

const testB = { num1: "faruk" };
console.log(testB);
const numbers: C = { num21: true };
console.log(numbers);
