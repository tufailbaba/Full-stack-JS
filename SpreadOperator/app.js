function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}
const colors = ["red","green","blue","teal"];
giveMe4(...colors)

//objects

const obj1 = {x:1,y:2}
const obj2 = {z:3}
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//challenge
let arr = [1,2,3];
let arr2 = [4,5]

let arr3 = [...arr, ...arr2]
console.log(arr3);

const user = {
    name : "Tufail",
    age :20,
}

const clone = { ...user };
console.log(clone);

