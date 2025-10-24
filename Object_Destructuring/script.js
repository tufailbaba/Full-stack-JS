const student  = {Name:"Tufail",
    position:"first",
    rollNo:103
}
const{Name}=student;
console.log(Name);
// challenge

const person ={
    name:"Tufail baba",
    age:20,
    gender:"Male",
    country:"Kashmir"
};

const{name, age, country}=person;
console.log(name);
console.log(age);
console.log(country);

// renaming Variables

const num = {x:100, y:200}
const {x:new1, y:new2}=num

console.log(new1);
console.log(new2);

//object destructuring and rest operator

let {a,b, ...rest}={a:100,b:200,c:300,d:400,e:500}
// console.log(a);
// console.log(b);
console.log(rest);
// challenge

const Person ={
    NAme:"Tufi",
    Age:20,
    Country:"kashmir"
}
// const{NAme,Age,Country}=Person
// console.log("Person Name", NAme);
// console.log("Person Age", Age);
// console.log("Person Country", Country);

const{NAme:personName, Age:personAge, Country:personCountry}=person;
console.log(personName);
console.log(personAge);
console.log(personCountry);

