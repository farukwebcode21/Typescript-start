// array declear in string type

let arrayName: string[];
arrayName = ["anis", "rubel", "asad"];

console.log(arrayName); // ['anis', 'rubel', 'asad']
console.log(arrayName[2]); // asad

arrayName.push("Faruk Ahamd");
console.log(arrayName); //['anis','rubel', 'asad', 'Faruk Ahamd']

arrayName.sort();
console.log(arrayName); //["Faruk Ahamd", "anis", "asad", "rubel"]

// array declear another style

let userNames: Array<number>;
userNames = [10, 20, 30, 40];
userNames.push(100);
console.log(userNames[4]); //100

// Multiple type array

let multipleTypes: (string | number)[];
multipleTypes = [20, "name"];

console.log(multipleTypes); // 20, "name"

// another example array

let series = [1, 2, 3];
console.log(series.length); //3
let doubleleft =series.map(e =>e*2);
console.log(doubleleft); //[2, 4, 6]


// storing mixed types value in array

let scores :(string |number)[];
scores =['Programming', 5, 'Sofftware Design', 4];
console.log(scores); //show mixing result []

