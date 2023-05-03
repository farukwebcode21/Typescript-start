let someString:any ="Testing Assertion type";
let sizeWithAs:number =(someString as string).length;
let sizeWithAngleBrackets:number =(<string>someString).length;

console.log(sizeWithAs);
console.log(sizeWithAngleBrackets);

// type assertion
let testTypeAssertion;
testTypeAssertion = "Testing Type assertion";
(testTypeAssertion as string).length;

console.log(testTypeAssertion);

let testTypeAssertion2 =45.45;
let testResult = (testTypeAssertion2 as number).toString();
console.log(testResult);

// function example

function kgToGram(argo:any):any{
    if(typeof argo === "string"){
        const result =parseFloat(argo)*1000;
        return `The Converted result is :${result} gram`;
    }else if(typeof argo === "number"){
        const result = argo * 1000;
        return result;
    }
}

const resultToBeNumber = <number>kgToGram(1000);
const resultToBeNumber2 = <string>kgToGram("1000");

console.log(resultToBeNumber);
console.log(typeof(testTypeAssertion2));