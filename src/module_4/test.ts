const userInfo2: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];
console.log(typeof userInfo2[3]);
userInfo2[2];

const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [2, 4, 6, 8];

// var array1 = [2, 4];
// var array2 = [4, 2];

const intersection = array1.filter((e) => {
  return array2.includes(e);
});
console.log(intersection);

let difference = array1.filter((x) => !array2.includes(x));

console.log("equals", difference?.length != 0 ? false : true);

const numbers1:number[] =[1, 3, 6, 8, 11];
const greaterThanSeven =numbers1.filter(number =>{
    return number > 7;
})

console.log(greaterThanSeven);

function sayHello (user:string):string{
    return  `Hello ${user}`
}
