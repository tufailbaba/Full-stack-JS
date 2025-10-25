// Every Method
const peoples  = [ "tufail", "baba", "tung tung"]
let res = peoples.every(people => people.length === 4)
console.log(res);
//some method
let res1 = peoples.some(people =>people.length === 4)
console.log(res1);


// chalenge

let products  =[
    {name: "Checkers", category: "Toys"},
    {name: "Harry Potter", category: "Books"},
    {name: "iphone", category: "Electronics"},
    {name: "Learn PHP", category: "Books"},
]

let res2 = products.every(product => product.category === "Books")
console.log(res2);

let res3 = products.some(product => product.category === "Books")
console.log(res3);

