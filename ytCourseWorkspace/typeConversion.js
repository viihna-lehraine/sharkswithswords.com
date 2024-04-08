// Type Conversion = change the data type of a value to another 
//                   (strings, numbers, booleans)

// let age = window.prompt("Hello! How old are you?");
// age += 1;
// console.log("Happy birthday! You are " + age + " years old");
// age is a string, needs to be converted to a number

/*
let age = window.prompt('Hello! How old are you?');
console.log(typeof age);     // shows data type of variable age
age = Number(age);  // converts string to number
age += 1;
console.log(typeof age);
console.log("Happy birthday! You are " + age + " years old");
*/

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean ("kitty cat");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

z = Boolean("");
console.log(z, typeof z);