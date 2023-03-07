let serah = "beautiful";
console.log(serah.length);
console.log(serah[8]);
console.log(serah[7]);
console.log(serah[6]);
console.log(serah[5]);

const food = "I was feeling hungry today";
const newstring = "eat";
console.log(food[4]);
const result = `I was ${newstring} feeling hungry today`;
console.log(result);

"the"
"brown"
const story = "The quick brown fox jumps over the lazy dog";
console.log(story.match(/the/g).length);
console.log(story.match(/brown/g).length);
const string5 = "We are now going to school";
console.log(string5.includes("now"));
console.log(string5.includes("sitting"));


//convert
//1. to Uppercase
let s 
= "wonderful"
console.log(v.toUpperCase())
//2 . to lowercase
let x = "amazing"
let y = "BEneath"
console.log(x.toLocaleLowerCase())
console.log(y.toLocaleLowerCase())
//3.TITleCASE
let d="A beautiful wedding";
    d=d.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
       console.log(d);
