

const person = {
    name: "Tufail Baba",
    age : 20,
    email: "email@gmail.com",
    adress :{
        city: "Sopore",
        idk:true
    }
}
//Json stringfy
const JsonString = JSON.stringify(person);
// console.log(JsonString);
const parasedObject = JSON.parse(JsonString)
console.log(parasedObject);


