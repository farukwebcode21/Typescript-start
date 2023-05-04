// Now Explain union type typescript

let userId: string | number;
userId = "Faruk";
userId = 450;

function displayUserInfo(userId: string | number) {
  console.log(userId);
}
displayUserInfo(1450);
displayUserInfo("Faruk");
