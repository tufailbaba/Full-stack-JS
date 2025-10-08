//Condtionals
//IF statement

let a = 110;

let b = 20;

if (a > b) {
  console.log("A is greater than B");
}

//IF else
let y = 20;
let z = 30;

if (z > y) {
  console.log("Z is greater than Y");
} else {
  console.log("Y is greater than Z");
}
//

//Exercises

let Password = 8;

if (Password === 8) {
  console.log("Welcome");
} else if (Password <= 8) {
  console.log("Password is too short");
} else if (Password >= 8) {
  console.log("Password is too Long");
} else {
  console.log("Please provide a Password");
}

//Switch Statements

let x = 0;
let text;

switch (x) {
  case 0:
    text = "Off";
    console.log("Text");

    break;
  case 1:
    text = "ON";
    console.log("Text1");
    break;
  default:
    text = "No value found";
}

// Switch Exercises

let fruit = "Banana";

switch (fruit) {
  case "Banana":
    console.log("Banana is good");
    break;
  case "Orange":
    console.log("I am not a fan of Orange");
    break;
  case "Apple":
    console.log("How you like them Apples");
    break;
  default:
    console.log("I never heard of that fruit");
}

//For loops
for (let i = 0; i <= 1000; i++) {
  console.log("Tufail loves her", i);
}
//while loops
let i =10;
while (i<=100){
    console.log("Tufail baba",i);
    i++;
}

//Do while loop
let j =1;
do{
    console.log('Hi tufail',i);
    i++;
}
while(i<=5);