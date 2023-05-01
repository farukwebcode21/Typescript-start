// const names: string[] = [];
// names.push("Faruk");
// console.log(names);

// // Readonly Type

// const arrayName: readonly string[] = [];

// const numbers = [1, 2, 3, 4];
// numbers.push(9);
// // console.log(numbers);
// numbers.push("6") //Error because number types is a number not string
function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));

const friendName: string[] = ["karla", "Potol", "Tomato"];
const rollNumbers: number[] = [55, 20, 30];
friendName.push("Karim");
friendName.push("Sormola");
console.log(friendName);


// Trupel
const user:[number, string]=[45, "rahim"];
user.push(500, "Rohima");
console.log(user);