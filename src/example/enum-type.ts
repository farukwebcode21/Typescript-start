// numeric enum type example
enum UserRequest {
  ReadData = 1,
  SaveData,
  DeleteData,
}

console.log(UserRequest);
// string enum type example
enum UserRequest2 {
  redData = "Read Data",
  SaveData = "Save Data",
  deleteData = "Delete Data perfectly",
}

console.log(UserRequest2.deleteData);
console.log(UserRequest2["redData"]);
// heterogeneous enum type example

enum UserRequest3 {
  saveData = "Save Every thing",
  deleteData = 20,
}
console.log(UserRequest3.deleteData);
