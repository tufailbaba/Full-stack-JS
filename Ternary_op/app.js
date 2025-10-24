let password = 5;
function passwordChecker(ps){
    return ps ===5? `strong Password` : "Password should be 8 Characters.";
}
const res = passwordChecker(password);
console.log(res);
// another example

const age = 25;
const isAdult = age >=18? "Adult": "Not an Adult";
console.log(isAdult);
// Challenge

let personMoney = true
let haveMoney = personMoney === true? "Buy Products":"They should bring money";
console.log(haveMoney);
