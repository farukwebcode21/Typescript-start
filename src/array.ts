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
