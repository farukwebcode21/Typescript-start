// Here explain any type typescript  example


// let userPerson: any;
// userPerson = "Faruk";
// console.log(userPerson);
// userPerson =510;
// console.log(userPerson);

type Data ={num21:number};
type B ={
    [key in keyof Data]:string
}


const numbers:B={ num21:"20"}
console.log(numbers);


