
interface IUser {
    id:number;
    name:string;
    age:number;
}

let users:IUser[] =[];

let user1:IUser={
    id:1,
    name:"Faruk",
    age:31,
}

let user2:IUser={
    id:2,
    name:"Faruk Ahmad",
    age:30,
}

users.push(user1);
users.push(user2);

console.log(users);//[{ id: 1, name: 'Faruk', age: 31 },  { id: 2, name: 'Faruk Ahmad', age: 30 }]