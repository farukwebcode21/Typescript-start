type generaicArray<T> = Array<T>;

const rollNumber1: generaicArray<string> = ["Faruk", "Rakib", "Rustom"];
const rollNumber2: Array<number> = [4, 22, 30];
const rollNumber3: Array<boolean> = [true, false];
console.log(rollNumber1);
console.log(rollNumber2);
console.log(rollNumber3);

function identity(arg: number): number {
  return arg;
}

function identity1(arg: any): any {
  return arg;
}

const result1 = identity1("Fruka");
console.log(result1);

function checkGeneric<T>(name: T): T {
  return name;
}
console.log(checkGeneric(10));
console.log(checkGeneric(true));
const result3 =checkGeneric("Faruk");
console.log(result3);


function identity2<Type>(arg: Type): Type {
    return arg;
  }
let output = identity2<number>(500);
console.log(output);


function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }
let output2 = loggingIdentity(["Faruk", "Rakib", "Rustom", 50, 60, 70, true, false]);
console.log(output2);