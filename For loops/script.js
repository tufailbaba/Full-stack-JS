// for-in  loop is used to iterate over the properties of an object.
let person = {
    name: "tufail",
    age: 20,
    gender:"male"
}
for (let keys in person){
    console.log(keys,person[keys]);
    
}


let list = ['One', 'Two', 'Three', 'four']
for(let index in list){
    console.log(`${index}:${list[index]}`);
    
}

// challenge

const object = {a:1, b:2, c:3};
for (const properties in object ){
    console.log(`${properties}:${object[properties]}`);
    
}

// for-of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

let peoples = ["Tufi", "alex",'baba']
for (let people of peoples){
    console.log(peoples);
    
}
const text ='Hello'
for (const char of text) {
    console.log(text);
    
    
}

//challenge

const array1 = ["a", "b", "c"];
for (const elements of array1 ) {
    console.log(array1);
    
    
}

// foreach loop is a method that executes a provided function once for each array element.
 
const colors = ["teal", "blue",'red']
colors.forEach(element => {
    console.log(colors);
    
});

