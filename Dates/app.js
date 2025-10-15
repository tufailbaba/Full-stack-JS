// Year,month,date,hours,minutes,seconds,milliseconds
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(date.toDateString());
console.log(date.toISOString());



