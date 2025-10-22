function user (name , age , work){
    return{
        name,
        age ,
        work ,
        intro:()=>{console.log(`My name is ${name } and I'm ${age} years old & I'm a ${work}`);
            
        },
    }
}
const tufail = user ("Tufail", 20 ,"Programmer")
const alex = user ("Alex", 19 , "Designer")
console.log(tufail.intro());

console.log(alex.intro());


//Challenges
const lib= {
    sum : ( a,b)=>a+b,
    mult : (a,b)=> a*b,
}

console.log(lib.sum(2,3));
console.log(lib.mult(2,4));

