const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

console.log(songs.filter(songs =>songs.duration > 3))


// challenge

const ages = [32,33,16,40];

function checkAdults(age){
    return age >=18
}
const res = ages.filter(checkAdults);
console.log(res);

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
]



let check = words.filter(words => words.length >6)
console.log(check);
