function person(firstName, LastName, ...hobbies) {
  console.log("First Name :", firstName);
  console.log("Last Name :", LastName);
  console.log("Hobbies:", hobbies);
  
}

person("Tufail", "WebDev","Programming","Cricket","Riding")


// Challenge

function unlimited (...unlimited){
    console.log("Unlimited amount" , unlimited);
    
}
console.log(12,1,3,2,2,24);


//Destructuring

const foo = ["one", "Two", "Three"];
const one = foo[0] 
console.log(one);

//Assigining the rest of the array elements to a variable
const [a, ...b]=['one','two', 'three']
console.log(b);
//challenge

const colors = ['red','green', 'blue', 'yellow','orange'];

const [color1,color2,color3]= colors;
console.log(color1,color2,color3);

