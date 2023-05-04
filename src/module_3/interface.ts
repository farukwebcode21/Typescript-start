// // Interface Example ===========
// interface IUser {
//   id: number;
//   name: string;
//   age: number;
// }

// // Extend interface
// interface IExtendUser extends IUser {
//   role: string;
//   country: string;
//   developer: boolean;
// }

// let user1: IUser = {
//   id: 1,
//   name: "Faruk",
//   age: 31,
// };

// let user2: IUser = {
//   id: 2,
//   name: "Faruk Ahmad",
//   age: 30,
// };

// let user3: IExtendUser = {
//   id: 3,
//   name: "Rashel Khan",
//   age: 25,
//   role: "Admin",
//   country: "Banglaesh",
//   developer: true,
// };
// let users: IUser[] = [];

// users.push(user1);
// users.push(user2);
// users.push(user3);

// console.log(users); //[{ id: 1, name: 'Faruk', age: 31 },  { id: 2, name: 'Faruk Ahmad', age: 30 }]

// interface IRollNumbers {
//   [index: number]: number;
// }
//  const arr:number[] =[1, 2, 3, 5];
//  arr.push(50,90, 100, 45,36);
//  arr.push(60);
//  arr.push(80);
//  console.log(arr);
