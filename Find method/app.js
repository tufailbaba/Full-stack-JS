const peoples = [
    {name: "tufail", age: 20},
    {name: "John", age: 24},
    {name: "OTna", age: 23},
    {name: "boka", age: 22},
]


const res = peoples.find(person => person.name === "tufail")
console.log(res);


//challenge

const ages = [2,3,45,53,5,34]

function checkAge (age){
    return age >18
}

const ress = ages.find(checkAge)
console.log(ress);

let products  =[
    {name: "Checkers", category: "Toys"},
    {name: "Harry Potter", category: "Books"},
    {name: "iphone", category: "Electronics"},
    {name: "Learn PHP", category: "Books"},
]

const resss = products.find(things =>things.category === "Books")
console.log(resss);
