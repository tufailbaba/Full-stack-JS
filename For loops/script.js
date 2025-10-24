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