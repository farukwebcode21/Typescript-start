const myText = (text: string | null): void => {
  if (text === null) {
    console.log("I have not text");
  } else {
    console.log(text);
  }
};
myText(null);
myText("This is not a null value");

const guessSomething = (myGuess: unknown) => {
  console.log(myGuess);
};
guessSomething(23);
guessSomething(undefined);
guessSomething(null);
