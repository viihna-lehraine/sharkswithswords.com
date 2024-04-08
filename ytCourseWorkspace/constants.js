// const = a variable that can't be changed

const PI = 3.1415927  // make constants all UPPERCASE
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

// PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is: " + circumference);