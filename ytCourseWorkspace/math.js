/*
let x = 3.99;
let y = 5;
let z = 9;
let maximum;
let minimum;

// x = Math.round(x);                 // rounds x to nearest integer
// x = Math.floor(x);                 // always rounds DOWN
// x = Math.ceil(x);                  // always rounds UP
// x = Math.pow(x, 2);                   // (base, exponent)
// x = Math.sqrt(x);                       // square root
// x = Math.abs(x);                     // absolute value
// maximum = Math.max(x, y, z);            // finds maximum
// minimum = Math.min(x, y, z);            // finds minimum
x = Math.PI;                            // built-in pi constant;

console.log(x);
*/


// FINDING THE HYPOTENUSE v1
/* 
let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);
b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("The hypotenuse is " + c + ".");
*/

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c + ".";
}