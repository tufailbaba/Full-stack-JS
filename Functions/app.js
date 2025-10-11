//Functions 
function greet (){
    console.log("Hello from function");
    
}
// Call , run , execute
greet();

function add (x ,y){
    return x+y
} 
// console.log(add(10,7));

const rest  = add(10,20);

const rest1 = add (10,2);
console.log(rest);
console.log(rest1);


// Exercise

function myFunction(a,b){
 return a*b
}
const result = (myFunction(10,5))
console.log(result);
//function declaration
function sayHello (username){
    console.log(`Hello  ${username}`);
    console.log(`Welcome to the platform, ${username}`);
}
sayHello("Tufail");

//function expression
const sayHi = function (username){
    console.log(`Hi  ${username}`);
    console.log(`Welcome to the platform, ${username}`);
}   
sayHi("Ali");

//Callback function

 function showCallfunc1 (fn){
    const value =10
    fn(value)
 }
 showCallfunc1(function(value){
    console.log(value);
    
 })

 //Exercise

 function showCallFunc (fn){
    const value = 16
    fn(value)
 }
showCallFunc(function(value){
    console.log(value);
    
})
showCallFunc(function(value){
    console.log(value*value);   
})
showCallFunc(function(value){
    console.log(value*value*value);   
})

 