const isHeroAvailable: boolean = false;

if (isHeroAvailable) {
  console.log("book now");
} else {
  console.log("You can not book");
}

const checkAvailablity = isHeroAvailable ? "book now" : "you can not book";
console.log(checkAvailablity);

// nullish operator (??)

// check null and undefined

const inputSomething:unknown= null;
const checkInput =inputSomething ?? "no input";
console.log(checkInput);
